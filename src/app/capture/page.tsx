"use client";

import { useState, useEffect } from 'react';

export default function MobileCapture() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [structuredData, setStructuredData] = useState({
        price: null as string | null,
        surface: null as string | null,
        rooms: null as string | null,
    });

    // Mock transcription effect
    useEffect(() => {
        if (isRecording) {
            const interval = setInterval(() => {
                setTranscript(prev => prev + "...");
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRecording]);

    const toggleRecording = () => {
        if (!isRecording) {
            // Start
            setIsRecording(true);
            setTranscript("Bordeaux, quartier Chartrons, magnifique T3 de 75 mètres carrés, proposé à 450 000 euros...");

            // Fake structuring after 2s
            setTimeout(() => {
                setStructuredData({
                    price: "450 000€",
                    surface: "75 m²",
                    rooms: "3 Pièces",
                });
            }, 2500);
        } else {
            setIsRecording(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-[#0F172A] text-white p-6 max-w-md mx-auto">
            {/* Header Accessibility */}
            <header className="flex justify-between items-center mb-8">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xl">👤</div>
                <h1 className="text-xl font-bold text-blue-500">Immo Facile</h1>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xl">⚙️</div>
            </header>

            {/* Real-time Transcription Display */}
            <div className="flex-1 glass-card p-6 mb-8 overflow-y-auto border-blue-500/20">
                <p className={`text-lg font-medium transition-opacity ${isRecording ? 'opacity-100' : 'opacity-50'}`}>
                    {transcript || "Appuyez sur le bouton pour dicter les caractéristiques du bien..."}
                </p>

                {/* Structuring Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {structuredData.price && (
                        <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                            💰 {structuredData.price}
                        </span>
                    )}
                    {structuredData.surface && (
                        <span className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                            📐 {structuredData.surface}
                        </span>
                    )}
                    {structuredData.rooms && (
                        <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                            🚪 {structuredData.rooms}
                        </span>
                    )}
                </div>
            </div>

            {/* Main Pulse Button (Thumb Zone) */}
            <div className="flex flex-col items-center gap-6 mb-8">
                <div className="relative">
                    {/* Wave Animation */}
                    {isRecording && (
                        <>
                            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                            <div className="absolute -inset-4 bg-blue-500 rounded-full animate-ping opacity-10"></div>
                        </>
                    )}

                    <button
                        onPointerDown={toggleRecording}
                        className={`relative w-28 h-28 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all active:scale-90 ${isRecording ? 'bg-red-500 shadow-red-500/40' : 'bg-blue-600 shadow-blue-600/40'}`}
                    >
                        {isRecording ? '⏹️' : '🎤'}
                    </button>
                </div>

                <p className="text-sm font-semibold tracking-wider uppercase text-slate-400">
                    {isRecording ? "Enregistrement en cours..." : "Maintenir pour capturer"}
                </p>
            </div>

            {/* Quick Action Dock */}
            <nav className="glass-card flex justify-around p-4">
                <div className="text-2xl opacity-100 text-blue-400">⚡</div>
                <div className="text-2xl opacity-30">🏠</div>
                <div className="text-2xl opacity-30">📂</div>
            </nav>
        </div>
    );
}
