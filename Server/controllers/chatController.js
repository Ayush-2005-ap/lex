import { getGeminiReply } from "../services/geminiService.js";

export const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }
    const reply = await getGeminiReply(message);
    res.json({ reply });
  } catch (error) {
    console.error('Chat handler error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
