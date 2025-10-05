// backend/controllers/aiController.js
import PracticeHistory from "../models/PracticeHistory.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Request body: { topic, company }
 * Uses ClerkExpressRequireAuth middleware so req.auth contains user info.
 */
export const getDSAQuestions = async (req, res) => {
  try {
    const userId = req.auth?.userId || null;
    const { topic, company } = req.body;
    if (!topic || !company) return res.status(400).json({ error: "topic & company required" });

    // Strong prompt asking for valid JSON only (important)
    const prompt = `
You are an expert interview coach. For DSA topic "${topic}" and company "${company}", return a JSON array (top-level) of exactly 5 objects. 
Each object must have these keys:
- question: string
- difficulty: "easy" | "medium" | "hard"
- tags: array of short strings
- solution: string (brief algorithm + sample code snippet in python or cpp)
Return ONLY valid JSON (no explanation, no markdown). Example output:
[
  {"question":"...", "difficulty":"medium", "tags":["graphs","bfs"], "solution":"..."},
  ...
]
`;

    // Call Gemini via GenAI SDK
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    // response.text contains the generated text in SDK examples
    const text = response?.text ?? (response?.candidates?.[0]?.content?.parts?.[0]?.text) ?? "";

    // try to extract JSON (match first top-level array)
    let questions = null;
    try {
      const m = text.match(/(\[.*\])/s); // dotall
      if (m) questions = JSON.parse(m[1]);
      else questions = JSON.parse(text);
    } catch (parseErr) {
      // return raw text if JSON couldn't be parsed (and log)
      console.error("JSON parse failed, returning raw:", parseErr, text);
      return res.status(200).json({ raw: text, warning: "Gemini didn't return strict JSON - adjust prompt." });
    }

    // Save to MongoDB
    const doc = await PracticeHistory.create({
      userId,
      topic,
      company,
      questions
    });

    return res.json({ questions, savedId: doc._id });
  } catch (err) {
    console.error("AI error:", err);
    return res.status(500).json({ error: err.message });
  }
};
