import Venda from "./Venda";
import Cliente from "./Cliente";
import Telefone from "./Telefone";
import Endereco from "./Endereco";
import Produto from "./Produto";

var venda1 = new Venda(
    123,
    401, 
    new Cliente("Giovana", 123456789, 1902, "femino", 
    new Endereco("Rio de janeiro", 23456, "floripa", "são paulo"), 
    [
        new Telefone("11", 987654321, "celular"),
        new Telefone("12", 765432345, "fixo")
    ]), 
    [
        new Produto(101, "note", 3500.00),
        new Produto(102, "capa", 150.00)
    ]
);

console.log(venda1);
console.log("Total da venda:", venda1.calcularTotal());