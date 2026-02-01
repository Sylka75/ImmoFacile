-- 1. Tables de base
CREATE TABLE agencies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    agency_id UUID REFERENCES agencies(id),
    full_name TEXT,
    role TEXT CHECK (role IN ('agent', 'manager')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE mandates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_id UUID REFERENCES agencies(id),
    agent_id UUID REFERENCES profiles(id),
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL,
    surface DECIMAL,
    status TEXT DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Activation de la sécurité (RLS)
ALTER TABLE mandates ENABLE ROW LEVEL SECURITY;

-- 3. Politiques de sécurité (Isolément strict)
-- Politique : Les agents voient uniquement leurs mandats
CREATE POLICY "Agents can see their own mandates" 
ON mandates FOR SELECT 
USING (auth.uid() = agent_id);

-- Politique : Les managers voient tous les mandats de leur agence
CREATE POLICY "Managers can see agency mandates" 
ON mandates FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM profiles 
        WHERE id = auth.uid() AND role = 'manager' AND agency_id = mandates.agency_id
    )
);
