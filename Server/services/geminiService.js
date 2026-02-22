import dotenv from 'dotenv';

dotenv.config();

const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile'; // active Groq model as of Feb 2026

/**
 * Sends a message to Groq API and returns the assistant's reply.
 * This function is exported as `getGeminiReply` to keep the existing controller API unchanged.
 * @param {string} message - User message.
 * @returns {Promise<string>} - Reply text.
 */
export async function getGeminiReply(message) {
    if (!process.env.GROQ_API_KEY) {
        throw new Error('GROQ_API_KEY not set in .env');
    }
    try {
        const response = await fetch(GROQ_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: DEFAULT_MODEL,
                messages: [{ role: 'user', content: message }],
                temperature: 0.7,
                max_tokens: 1024,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Groq API error ${response.status}: ${errText}`);
        }
        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'No response from Groq.';
    } catch (err) {
        console.error('Groq API request failed:', err);
        throw err;
    }
}
