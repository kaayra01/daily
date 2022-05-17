let date = new Date();
let hora = date.getHours();
let min = date.getMinutes();
let seg = date.getSeconds();

let horMinSeg = hora + ':' + min + ':' + seg;

let msg = document.getElementById("msg");
let mensagem;

if (hora <= 6) {
	mensagem = "Ainda é madrugada!";
} else if (hora <= 12){
	mensagem = "Amanheceu, bom dia!";
} else if (hora <= 18){
	mensagem = "Entardeceu, boa tarde!";
} else {
	mensagem = "Boa noitinha!";
}

msg.innerText = horMinSeg + " => "+ mensagem;