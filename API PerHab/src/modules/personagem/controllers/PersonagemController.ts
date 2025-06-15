import { NextFunction, Request, Response } from "express";
import CreatePersonagemService from "../services/CreatePersonagemService";
import DeletePersonagemService from "../services/DeletePersonagemService";
import ListPersonagemService from "../services/ListPersonagemService";
import ShowPersonagemService from "../services/ShowPersonagemService";
import UpdatePersonagemService from "../services/UpdatePersonagemService";

export default class PersonagemsController{
    
    public async index(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
      try{
            const listpersonagems = new ListPersonagemService();
            const personagems = await listpersonagems.execute();
            return response.json(personagems);
      }  catch(err){
            next(err);
      }
    }
    public async show(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {id} = request.params;
            const showpersonagem = new ShowPersonagemService();
            const personagem = await showpersonagem.execute({id});
            return response.json(personagem);
        }  catch(err){
            next(err);
        }
    }
    public async create(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {nome, anime} = request.body;
            const createpersonagem = new CreatePersonagemService();
            const personagem = await createpersonagem.execute({nome, anime});
            return response.json(personagem);
        }  catch(err){
            next(err);
        }
    }
    public async update(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {id} = request.params;
            const {nome, anime, arma, vies, img} = request.body;
            const updatepersonagem = new UpdatePersonagemService();
            const personagem = await updatepersonagem.execute({id, nome, anime, arma, vies, img});
            return response.json(personagem);
        }  catch(err){
            next(err);
        }
    }

    public async delete(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {id} = request.params;
            const deletepersonagem = new DeletePersonagemService();
            const personagem = await deletepersonagem.execute({id});
            return response.json([]);
        }  catch(err){
            next(err);
        }
    }
}