export default class Pessoa{
    private _nome : string
    private _telefone : number //numero não começa com zero, tem que ser string para que possa considerar o primeiro numero como zero.

    constructor(nome : string, telefone : number){
        this._nome = nome
        this._telefone = telefone
    }

    public get nome() : string{
        return this._nome
    }

    public get telefone() : number{
        return this._telefone
    }

    public set nome(nome : string){
        this._nome = nome
    }

    public set telefone(telefone : number){
        this._telefone = telefone
    }

    
}