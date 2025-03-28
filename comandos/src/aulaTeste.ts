const disciplina : string = "Desenvolvimento de Sistemas Web"

var a = 6
var b = 15
if (a===6) { //dois iguais compara o valor, mas 3 iguais compara também os tipos da variável
    let a = 5 //mantem o resultado interno ao bloco
    var b = 3; //em contrapartida, este declara o valor para função, saindo do bloco
    console.log(a)
    console.log(b)
}
console.log(a)
minhaFuncao()
b = "Giovana Fernandes" //vai pq o compilador é javascript
console.log(b)

function minhaFuncao(): void {
    console.log("minha função")
}