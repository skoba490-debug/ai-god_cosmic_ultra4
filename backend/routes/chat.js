import express from "express";
const router = express.Router();

function aiLogic(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("стих"))
    return "🌙 Стих:\nТихо ночь ложится на плечи...";

  if (msg.includes("песн"))
    return "🎵 Песня:\n[Куплет] Я иду сквозь мир...";

  if (msg.includes("стать"))
    return "📰 Статья:\nСовременные технологии меняют мир...";

  if (msg.includes("ea") || msg.includes("mt5"))
    return `💻 EA (MQL5):
void OnTick(){
 if(PositionsTotal()==0){
  trade.Buy(0.1);
 }
}`;

  if (msg.includes("игра"))
    return `🎮 JS Game:
document.addEventListener("keydown", e=>{
 console.log(e.key);
});`;

  if (msg.includes("приложение"))
    return `📱 React App:
export default () => <h1>Hello AI</h1>;`;

  if (msg.includes("сон"))
    return "😴 Сонник: Вода — эмоции, полет — свобода.";

  return "🤖 AI: " + msg;
}

router.post("/", (req, res) => {
  res.json({ reply: aiLogic(req.body.message) });
});

export default router;
