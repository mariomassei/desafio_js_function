let vitorias = 90
let derrotas = 10


rank(vitorias, derrotas)



function rank(valor1, valor2){

    let saldo = valor1 - valor2

    if(saldo <= 10){
    console.log("Ferro")
    } else if(saldo >=11 && saldo <=20 ){
        console.log("Bronze")
    } else if(saldo >=21 && saldo <=50 ){
        console.log("Prata")
    } else if(saldo >=51 && saldo <=80 ){
        console.log("Ouro")
    } else if(saldo >=81 && saldo <=90 ){
        console.log("Diamante")
    } else if(saldo >=91 && saldo <=100 ){
        console.log("Lendario")
    } else {
        console.log("Imortal")
    }
}