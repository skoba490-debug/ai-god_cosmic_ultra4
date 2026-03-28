const c = document.getElementById("chat");

async function send(){
 let t=input.value;
 c.innerHTML+=t;

 let r = await fetch("/api/chat",{method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify({message:t})});

 let d = await r.json();
 c.innerHTML+=d.reply;
 speak(d.reply);
}

function voice(){
 let r=new(window.SpeechRecognition||webkitSpeechRecognition)();
 r.start();
 r.onresult=e=>{input.value=e.results[0][0].transcript;send();}
}

function speak(t){
 speechSynthesis.speak(new SpeechSynthesisUtterance(t));
}

async function img(){
 let r=await fetch("/api/image",{method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify({prompt:prompt.value})});
 let d=await r.json();
 c.innerHTML+=`<img src="${d.url}" width=200>`;
}

async function tarot(){
 let r=await fetch("/api/tarot");let d=await r.json();
 c.innerHTML+=d.card;
}

async function runes(){
 let r=await fetch("/api/runes");let d=await r.json();
 c.innerHTML+=d.rune;
}

async function iching(){
 let r=await fetch("/api/iching");let d=await r.json();
 c.innerHTML+=d.hex;
}
