let banco = {
    agencia: 1213,
    conta: 233453,
    tipo: "corrente",
    saldo: 300,
    deposito: 100,
    saque: 150,
    saldo_final: function (a, b){
    return a + b;
    }
    
    

};

let saldofinal = banco.saldo_final(banco.saldo, banco.deposito)

console.log("Você depositou ", banco.deposito, ", Seu saldo é:",saldofinal)


saldofinal = (saldofinal - banco.saque)
console.log("Você sacou", banco.saque, ", seu saldo é",saldofinal)

console.log("Numéro da conta:",banco.conta)
