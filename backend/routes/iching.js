import express from "express";
const r = express.Router();

const hex = ["Цянь","Кунь","Чжунь","Мэн","Сюй"];

r.get("/", (req,res)=>{
 res.json({hex: hex[Math.floor(Math.random()*hex.length)]});
});

export default r;
