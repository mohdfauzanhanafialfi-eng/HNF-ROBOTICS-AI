import express from "express";
import OpenAI from "openai";
import rateLimit from "express-rate-limit";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/", rateLimit({ windowMs: 60_000, limit: 20, standardHeaders: true, legacyHeaders: false }));

app.post("/api/chat", async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();
    if (!message || message.length > 4000) {
      return res.status(400).json({ error: "Pesan kosong atau terlalu panjang (maksimum 4.000 karakter)." });
    }
    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({ error: "API key belum disetel pada server." });
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      instructions: "Kamu adalah HNF AI Assistant, asisten informasi HNF ROBOTICS AI SOLUTIONS. Jawab dalam bahasa Indonesia yang jelas dan aman. Bantu pertanyaan tentang robotika, AI, otomasi, dan informasi aplikasi. Jangan mengaku bahwa prototipe, fasilitas, atau perangkat fisik sudah tersedia jika belum ada data yang memastikannya. Jelaskan bahwa fitur kendali pada demo tidak mengendalikan robot fisik.",
      input: message,
      max_output_tokens: 700
    });
    res.json({ reply: response.output_text || "Maaf, belum ada jawaban yang dapat ditampilkan." });
  } catch (err) {
    console.error("AI request failed:", err?.message || err);
    res.status(502).json({ error: "Layanan AI gagal merespons. Periksa konfigurasi server dan coba lagi." });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`HNF server berjalan pada port ${port}`));
