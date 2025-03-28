import Produto from "./Produto";
import Cliente from "./Cliente";

export default class Venda{
    private _codigo : number
    private _data : number
    private _cliente : Cliente
    private _produto : Produto[]

    constructor(codigo : number, data : number, cliente : Cliente, produto : Produto[]){
        this._codigo = codigo
        this._cliente = cliente
        this._data = data
        this._produto = produto
    }

    set codigo(codigo : number){
        this._codigo = codigo
    }

    set data(data : number){
        this._data = data
    }

    set cliente(cliente : Cliente){
        this._cliente = cliente
    }

    set produto(produto : Produto[]){
        this._produto = produto
    }

    get produto() : Produto[]{
        return this._produto
    }

    get cliente() : Cliente{
        return this._cliente
    }

    get data(): number{
        return this._data
    }

    get codigo() : number{
        return this._codigo
    }
    
    calcularTotal () : number{
        let v = 0 
        for(let i = 0; i < this._produto.length; i++){
            v += this._produto[i].valor
        }
        return v;
    }
}