import express from "express";
const r = express.Router();

r.post("/", (req,res)=>{
 const text = req.body.text.toLowerCase();

 let result = "Сон отражает внутреннее состояние.";

 if(text.includes("вода")) result = "Вода — эмоции";
 if(text.includes("падение")) result = "Падение — страх";

 res.json({result});
});

export default r;
