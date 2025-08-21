/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages,
      }),
    });

    const data = await response.json();

    // Debug log: check what API actually returns
    console.log("OpenAI Response:", data);

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: "No choices returned from OpenAI" });
    }

    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server error, check logs" });
  }
});


app.listen(8787, () => console.log("Server running on http://localhost:8787"));
