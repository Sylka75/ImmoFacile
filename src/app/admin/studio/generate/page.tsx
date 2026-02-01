"use client";

import { useState } from 'react';

/**
 * Note technique : On utilise fal-js pour appeler le modèle Inpainting / Image-to-Image
 * Cela permet de fusionner la photo vide avec les meubles déposés.
 */
export default function StudioPhotoIA() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [resultImage, setResultImage] = useState<string | null>(null);

    const generateHomestaging = async () => {
        setIsGenerating(true);
        // Simulation de l'appel à Fal.ai / Flux.1 Inpainting
        setTimeout(() => {
            // Image simulée d'une pièce meublée par IA
            setResultImage('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop');
            setIsGenerating(false);
        }, 3000);
    };

    return (
        <div className="flex flex-col gap-6 p-8 h-full bg-[#0F172A]">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">Studio Photo IA</h2>
                    <p className="text-slate-400">Générez un rendu professionnel en un clic.</p>
                </div>
                <button
                    onClick={generateHomestaging}
                    disabled={isGenerating}
                    className={`px-8 py-3 rounded-xl font-bold transition shadow-xl ${isGenerating ? 'bg-slate-700 text-slate-400' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/40'}`}
                >
                    {isGenerating ? '✨ Fusion IA en cours...' : '🪄 Générer le Rendu Final'}
                </button>
            </header>

            <div className="grid grid-cols-2 gap-8 flex-1">
                {/* Avant (Input Marc) */}
                <div className="relative glass-card overflow-hidden group">
                    <div className="absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white">Avant (Terrain)</div>
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-60 grayscale-[50%]"
                        alt="Pièce vide"
                    />
                </div>

                {/* Après (Rendu IA) */}
                <div className="relative glass-card overflow-hidden border-2 border-blue-500/30">
                    <div className="absolute top-4 left-4 z-10 bg-blue-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white">Après (IA Optimisée)</div>

                    {resultImage ? (
                        <img
                            src={resultImage}
                            className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                            alt="Rendu meublé"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500">
                            <span className="text-5xl opacity-20 italic font-serif">Immo Facile Studio</span>
                            <p className="text-sm">En attente de génération...</p>
                        </div>
                    )}
                </div>
            </div>

            {resultImage && (
                <div className="mt-4 flex justify-end gap-4">
                    <button className="text-slate-400 hover:text-white font-medium">Recommencer</button>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold">Valider & Publier sur SeLoger ✅</button>
                </div>
            )}
        </div>
    );
}
