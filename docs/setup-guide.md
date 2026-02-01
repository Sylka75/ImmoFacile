# Guide d'activation des services : Immo Facile

Pour que votre application devienne "vivante", vous devez renseigner vos propres clés sécurisées dans le fichier `.env` (à créer à partir de `.env.example`).

---

### 🧠 1. OpenAI (Cerveau & Voix)
Permet d'utiliser Whisper (transcription) et GPT-4o-mini (rédaction).
1.  Allez sur [platform.openai.com](https://platform.openai.com/).
2.  Créez un compte ou connectez-vous.
3.  Allez dans **Dashboard** > **API Keys**.
4.  Cliquez sur **Create new secret key**. Copiez-la immédiatement.
5.  *Note : Assurez-vous d'ajouter quelques euros de crédit dans "Settings > Billing" pour activer les appels.*

### 💾 2. Supabase (Base de données & Auth)
C'est le serveur qui stocke vos annonces et gère vos utilisateurs.
1.  Allez sur [supabase.com](https://supabase.com/).
2.  Créez un projet nommé "Immo Facile".
3.  Une fois le projet créé, allez dans **Project Settings** (icône roue crantée) > **API**.
4.  Copiez :
    - `Project URL`
    - `anon` (public key)

### 🖼️ 3. Fal.ai (Studio Photo IA)
Permet de générer les rendus de homestaging via Flux.1.
1.  Allez sur [fal.ai](https://fal.ai/).
2.  Connectez-vous via GitHub ou Email.
3.  Allez dans l'onglet **Keys**.
4.  Générez une nouvelle clé API.

---

### 🛠️ Installation des clés
1.  Dans le dossier de votre projet, créez un fichier nommé `.env`.
2.  Copiez-y le contenu de `.env.example`.
3.  Remplacez les placeholders par vos clés réelles.
    - `OPENAI_API_KEY=votre_cle_openai`
    - `NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon`
    - `FAL_KEY=votre_cle_fal`

**Une fois ces clés renseignées, l'application sera 100% opérationnelle !**
