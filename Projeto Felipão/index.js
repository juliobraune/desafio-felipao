let heroi = "Protetor Estelar";
let xp = 9358;
let nivel; 

if (xp <= 1001) {
    nivel = "FERRO!";
} else if (xp <= 2000) {
    nivel = "BRONZE!";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "PRATA!";
} else if (xp >= 5001 && xp <= 7000 ) {
    nivel = "OURO!";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "PLATINA!";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "ASCENDENTE!";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "IMORTAL!";
} else if (xp >= 10001) {
    nivel = "RADIANTE!"
}

console.log("O herói " + heroi + " está no nível de " + nivel);
