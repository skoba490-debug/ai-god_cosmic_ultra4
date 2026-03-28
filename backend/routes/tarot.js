import express from "express";
const r = express.Router();

const cards = ["Шут","Маг","Солнце","Луна","Башня"];

r.get("/", (req,res)=>{
 res.json({card: cards[Math.floor(Math.random()*cards.length)]});
});

export default r;
