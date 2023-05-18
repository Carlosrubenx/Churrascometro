// Carne - 400g por pessoa    + de 6 horas - 650g.
// Cerveja - 1200ml por pessoa   + de 6 horas - 2000ml.
// Refrigerante/agua - 1000ml por pessoa   + de 6 horas 1500ml.

// Crianças valem poe 0,5.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let pessoas = parseInt(criancas) + parseInt(adultos);

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas) ; 
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let pao = paoDeAlho(pessoas)
    

    resultado.innerHTML = `<p>${qdtTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Pet's de 2L de Bebidas</p>`
    resultado.innerHTML += `<p>${pao} Pacotes de Pão de Alho</p>`

}


function carnePP (duracao) {

    if(duracao >= 6) {
        return 650;
    }else {
        return 400;
    }

};

function cervejaPP (duracao) {

    if(duracao >= 6) {
        return 2000;
    }else {
        return 1200;
    }

};

function bebidasPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    }else {
        return 1000;
    }

};

function paoDeAlho(pessoas){

    if(pessoas >= 8) {
        return 5;
    }else {
        return 3;
    }
}

