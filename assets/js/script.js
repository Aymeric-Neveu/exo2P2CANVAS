var c = document.getElementById("monCanvas");
 var ctx = c.getContext("2d");
 // rectangle bleu
 ctx.fillStyle="blue";
 ctx.fillRect(50,50,200,200);
 // paupiere superieure
 ctx.moveTo(90,160);
 ctx.quadraticCurveTo(150,115,200,160);
 ctx.fillStyle="white";
 ctx.fill();
 // paupiere inférieure
 ctx.moveTo(90,160);
 ctx.quadraticCurveTo(150,200,200,160);
 ctx.fillStyle="white";
 ctx.fill();
 // enclos
 ctx.moveTo(130,160);
 ctx.quadraticCurveTo(150,80,160,160);
 ctx.fillStyle="white";
 ctx.fill();
