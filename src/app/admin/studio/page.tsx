"use client";

import { useState } from 'react';

export default function AIPromptStudio() {
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleAISubmit = async () => {
    if (!prompt) return;
    setIsProcessing(true);
    
    // Simulation du traitement IA (Inpainting par prompt)
    setTimeout(() => {
      // Image simulée : un salon meublé selon le prompt
      setResultImage('https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop');
      setIsProcessing(false);
    }, 3500);
  };

  return (
    <div className="flex flex-col gap-6 p-8 h-screen bg-[#0F172A] text-white">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold">Studio Photo IA (Prompt Edition)</h2>
          <p className="text-slate-400">Dictez ou écrivez vos changements, l'IA s'occupe de tout.</p>
        </div>
        <div className="flex gap-4">
            <button className="text-slate-400 hover:text-white">Annuler</button>
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold">Valider & Publier</button>
        </div>
      </header>

      <div className="flex flex-1 gap-8 min-h-0">
        {/* Photo Area */}
        <div className="flex-1 relative bg-slate-800/50 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src={resultImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"} 
            className={`w-full h-full object-cover transition-all duration-700 ${isProcessing ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}
            alt="Property Visualization"
          />
          
          {isProcessing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold text-lg animate-pulse">L'IA transforme la pièce...</p>
            </div>
          )}

          {!resultImage && !isProcessing && (
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-xs">Photo originale de Marc</div>
          )}
        </div>

        {/* AI Control Center */}
        <aside className="w-96 flex flex-col gap-6">
          <div className="bg-blue-500/5 backdrop-blur-md p-6 rounded-3xl flex flex-col gap-4 border border-blue-500/20">
            <h3 className="font-bold text-blue-400 flex items-center gap-2">
              <span>🪄</span> Instructions de modification
            </h3>
            
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Mets un canapé scandinave gris, change le sol en parquet clair et ajoute une plante dans le coin."
              className="w-full h-40 bg-slate-950/50 border border-white/10 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />

            <div className="flex gap-2">
                <button 
                  onClick={() => setPrompt("Remplace le carrelage par du parquet chêne clair")}
                  className="bg-white/5 hover:bg-white/10 text-[10px] px-2 py-1 rounded border border-white/5"
                >
                  🧩 Parquet clair
                </button>
                <button 
                  onClick={() => setPrompt("Meuble le salon dans un style industriel moderne")}
                  className="bg-white/5 hover:bg-white/10 text-[10px] px-2 py-1 rounded border border-white/5"
                >
                  🛋️ Style Industriel
                </button>
            </div>

            <button 
              onClick={handleAISubmit}
              disabled={isProcessing || !prompt}
              className={`w-full py-4 rounded-xl font-bold text-lg transition shadow-lg ${!prompt || isProcessing ? 'bg-slate-700 text-slate-500' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/40 text-white'}`}
            >
              Exécuter le changement
            </button>
          </div>

          <div className="bg-slate-800/30 p-6 flex-1 rounded-3xl border border-white/5 text-sm text-slate-400 flex flex-col gap-4">
              <h4 className="font-bold text-slate-200">Transcription de Marc :</h4>
              <p className="italic">"... salon très spacieux avec une belle lumière, mais le carrelage est un peu daté. On pourrait proposer un aménagement avec un grand canapé d'angle..."</p>
              <div className="mt-auto bg-yellow-500/10 text-yellow-500/80 p-3 rounded-lg text-xs leading-relaxed border border-yellow-500/20">
                  ⚠️ <strong>Info :</strong> L'IA utilise la transcription de Marc pour suggérer des modifications automatiques si vous laissez le champ vide.
              </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
