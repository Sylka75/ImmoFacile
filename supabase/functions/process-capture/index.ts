import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { OpenAI } from "https://deno.land/x/openai@v4.24.1/mod.ts"

const openai = new OpenAI({
    apiKey: Deno.env.get("OPENAI_API_KEY"),
})

serve(async (req) => {
    try {
        const { audio_url } = await req.json()

        // 1. Transcription via Whisper
        const transcription = await openai.audio.transcriptions.create({
            file: await fetch(audio_url),
            model: "whisper-1",
        })

        // 2. Structuration via GPT-4o-mini
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Tu es un assistant expert en immobilier. Extrais les données structurées (prix, surface, pièces) d'une dictée." },
                { role: "user", content: transcription.text }
            ],
            response_format: { type: "json_object" }
        })

        return new Response(JSON.stringify({
            text: transcription.text,
            data: JSON.parse(completion.choices[0].message.content)
        }), { headers: { "Content-Type": "application/json" } })

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
})
