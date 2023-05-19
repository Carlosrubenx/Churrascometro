// Carne - 400g por pessoa    + de 6 horas - 650g.
// Cerveja - 1200ml por pessoa   + de 6 horas - 2000ml.
// Refrigerante/agua - 1000ml por pessoa   + de 6 horas 1500ml.

// Crianças valem poe 0,5.


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

    
    resultado.innerHTML = `<p>${Math.ceil(qdtTotalCarne/1000)}Kg de Carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Pet's de 2 Litros.</p>`
}

function carnePP(duracao) {
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 1600;
    }else{
        return 1200;
    }
}
function bebidasPP(duracao) {
    if(duracao >= 6){
        return 2000;
    }else{
        return 1000;
    }
}


