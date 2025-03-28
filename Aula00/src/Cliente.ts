import Endereco from "./Endereco";
import Telefone from "./Telefone";


export default class Cliente{
    private _nome : string
    private _cpf : number
    private _dt_nascimento : number 
    private _sexo : string
    private _endereco : Endereco;
    private _telefone : Telefone[];

    constructor(nome : string, cpf : number, dt_nascimento : number, sexo : string, endereco : Endereco, telefone : Telefone[]){
        this._cpf = cpf
        this._endereco = endereco
        this._nome = nome
        this._sexo = sexo
        this._telefone = telefone
        this._dt_nascimento = dt_nascimento
    }

    get endereco() : Endereco{
        return this._endereco
    }

    get telefone() : Telefone[]{
        return this._telefone
    }
    get sexo() : string{
        return this._sexo
    }
    get dt_nascimento() : number{
        return this._dt_nascimento
    }
    get cpf() : number{
        return this._cpf
    }

    get nome() : string{
        return this._nome
    }

    set endereco(endereco: Endereco){
        this._endereco = endereco
    }

    set cpf(cpf : number){
        this._cpf = cpf
    }
    
    set sexo(sexo: string){
        this._sexo = sexo
    }
    
    set telefone(telefone : Telefone[]){
        this._telefone = telefone
    }
    
    set dt_nascimento(dt_nascimento : number){
        this._dt_nascimento = dt_nascimento
    }

    set nome(nome: string){
        this._nome = nome
    }

}