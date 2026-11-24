"use server"
import { GoogleGenAI } from "@google/genai"
import { log } from "console";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
})

export async function generateText(prompt: string): Promise<string> {
    const interaction = await ai.interactions.create({
        model: "gemini-3.5-flash-lite",
        input: prompt,
    });


    return interaction.output_text || "No output generated";
}