export default function AdminDashboard() {
    return (
        <div className="flex h-screen bg-[#0F172A]">
            {/* Sidebar Simmulée */}
            <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-8">
                <h1 className="text-2xl font-bold text-blue-500">Immo Facile</h1>
                <nav className="flex flex-col gap-4">
                    <div className="text-white font-semibold flex items-center gap-2">
                        📊 Tableau de bord
                    </div>
                    <div className="text-slate-400 hover:text-white cursor-pointer transition">
                        🏠 Mes Mandats
                    </div>
                    <div className="text-slate-400 hover:text-white cursor-pointer transition">
                        🎤 Captures Terrain
                    </div>
                    <div className="text-slate-400 hover:text-white cursor-pointer transition">
                        🖼️ Studio Photo IA
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold">Bonjour Sophie 👋</h2>
                        <p className="text-slate-400">Voici l'activité de l'agence pour aujourd'hui.</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition">
                        + Nouveau Mandat
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm">Mandats en cours</p>
                        <p className="text-3xl font-bold">24</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm">Photos retouchées IA</p>
                        <p className="text-3xl font-bold text-emerald-400">142</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm">Annonces publiées</p>
                        <p className="text-3xl font-bold text-blue-400">89%</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-6">Dernières captures de Marc</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-xl">
                                        🏠
                                    </div>
                                    <div>
                                        <p className="font-semibold">Villa Contemporaine - Biarritz</p>
                                        <p className="text-sm text-slate-400">Capturé il y a 12min • En attente de validation IA</p>
                                    </div>
                                </div>
                                <button className="text-blue-400 hover:text-blue-300 font-medium">
                                    Réviser l'annonce
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
