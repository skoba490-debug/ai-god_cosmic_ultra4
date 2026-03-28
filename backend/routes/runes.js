import express from "express";
const r = express.Router();

const runes = ["Феху","Уруз","Ансуз","Райдо","Кеназ"];

r.get("/", (req,res)=>{
 res.json({rune: runes[Math.floor(Math.random()*runes.length)]});
});
