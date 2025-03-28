export default class Produto{
    private _codigo : number;
    private _descricao : string
    private _valor : number

    constructor(codigo : number, descricao : string, valor : number){
        this._codigo = codigo
        this._descricao = descricao
        this._valor = valor
    }

    get valor() : number{
        return this._valor;
    }

    get codigo() : number{
        return this._codigo
    }

    get descricao() : string{
        return this._descricao
    }

    set valor(valor : number){
        this._valor = valor
    }

    set descricao(descricao : string){
        this._descricao = descricao;
    }

    set codigo(codigo : number){
        this._codigo = codigo;
    }

}