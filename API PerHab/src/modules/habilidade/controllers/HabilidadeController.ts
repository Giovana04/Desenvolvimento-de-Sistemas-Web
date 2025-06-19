import { NextFunction, Request, Response } from "express";
import ListHabilidadeService from "../services/ListHabilidadeService";
import ShowHabilidadeService from "../services/ShowHabilidadeService";
import CreateHabilidadeService from "../services/CreateHabilidadeService";
import UpdateHabilidadeService from "../services/UpdateHabilidadeService";
import DeleteHabilidadeService from "../services/DeleteHabilidadeService";

export default class PersonagemsController {

    public async index(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { tipo } = req.query;

            const listHabilidade = new ListHabilidadeService();
            const habilidades = await listHabilidade.execute(tipo as string);

            res.json(habilidades);
        } catch (err) {
            next(err);
        }
    }
    public async show(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const showhabilide = new ShowHabilidadeService();
            const habilidade = await showhabilide.execute({ id });
            return response.json(habilidade);
        } catch (err) {
            next(err);
        }
    }

    
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { nome, descricao, tipo, energia_custo, tempo_exe, personagem_id } = req.body;

            const createHabilidade = new CreateHabilidadeService();
            const habilidade = await createHabilidade.execute({
                nome,
                descricao,
                tipo,
                energia_custo,
                tempo_exe,
                personagem_id,
            });

            res.status(201).json(habilidade);
        } catch (err) {
            next(err);
        }
    }


    public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const { nome, descricao, tipo, energia_custo, tempo_exe, personagem_id } = req.body;

            const updateHabilidade = new UpdateHabilidadeService();
            const habilidade = await updateHabilidade.execute({
                id,
                nome,
                descricao,
                tipo,
                energia_custo,
                tempo_exe,
                personagem_id,
            });

            res.json(habilidade);
        } catch (err) {
            next(err);
        }
    }



    public async delete (request: Request, response: Response, next: NextFunction): Promise < Response | void> {
    try {
        const { id } = request.params;
        const deletehabilidade = new DeleteHabilidadeService();
        const habilidade = await deletehabilidade.execute({ id });
        return response.json([]);
    } catch(err) {
        next(err);
    }
}
}