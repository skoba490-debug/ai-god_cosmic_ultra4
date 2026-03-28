import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import chat from "./routes/chat.js";
import image from "./routes/image.js";
import tarot from "./routes/tarot.js";
import runes from "./routes/runes.js";
import iching from "./routes/iching.js";
import dream from "./routes/dream.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API
app.use("/api/chat", chat);
app.use("/api/image", image);
app.use("/api/tarot", tarot);
app.use("/api/runes", runes);
app.use("/api/iching", iching);
app.use("/api/dream", dream);

// Frontend
app.use(express.static(path.join(__dirname, "../frontend")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("AI Ultra 4.0 running"));
