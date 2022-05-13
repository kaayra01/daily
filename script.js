let date = new Date();
let hora = date.getHours();
let min = date.getMinutes();
let seg = date.getSeconds();

let horMinSeg = hora + ':' + min + ':' + seg;

let validar = hora >=0 && hora < 24;

let msg = document.getElementById("msg");
let mensagem;

if (hora <= 6) {
	mensagem = "É madrugada!";
} else if (hora <= 12){
	mensagem = "Tá de dia! Bom dia";
} else if (hora <= 18){
	mensagem = "Entardeceu! Boa tarde!";
} else {
	mensagem = "Boa noitinha!";
}


msg.innerText = horMinSeg + " => "+ mensagem;