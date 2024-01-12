
//Fazer as perguntas de nome e experiência 5 vezes 
for(let vezes = 0; vezes < 5; vezes ++){
    let nomeHeroi = prompt("Informe o nome do herói: ");
    let XpHeroi = prompt("Informe a quantidade de experiência do Herói(XP): ");
}

//Variável que irá mostrar o nível do Herói
let nivel

if(XpHeroi <= 1000){
    nivel = "Ferro";
}else if(XpHeroi <= 1001 && XpHeroi <= 2000){
    nivel = "Bronze"
}else if(XpHeroi <= 2001 && XpHeroi <= 5000){
    nivel = "Prata";
}else if(XpHeroi <= 5001 && XpHeroi <= 7000){
    nivel = "Ouro";
}else if(XpHeroi <= 7001 && XpHeroi <= 8000){
    nivel = "Platina";
}else if(XpHeroi <= 8001 && XpHeroi <= 9000){
    nivel = "Ascendente";
}else if(XpHeroi <= 9001 && XpHeroi <= 10.000){
    nivel = "Imortal";
}else if(XpHeroi >= 10.001 ){
    nivel = "Radiante"; 
}

//Saída 
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel);

