import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Aluno } from '../entity/Aluno';

export const getAlunos = async (request: Request, response: Response) => {
    const alunos = await getRepository(Aluno).find();
    return response.json(alunos);
};

export const getAluno = async (request: Request, response: Response) => {
    const aluno = await getRepository(Aluno).findOne(request.params);
    return response.json(aluno);
};

export const saveAluno = async (request: Request, response: Response) => {
    const aluno = await getRepository(Aluno).save(request.body);
    return response.json(aluno);
};

export const deleteAluno = async (request: Request, response: Response) => {
    const { id } = request.params;
    const aluno = await getRepository(Aluno).delete(id);

    aluno.affected == 1 ? response.status(200).json({ message: 'Aluno excluído com sucesso!' }) : response.status(404).json({ message: 'Aluno não encontrado!' });
};

export const updateAluno = async (request: Request, response: Response) => {
    const aluno = await getRepository(Aluno).update(request.params, request.body);

    if (aluno.affected == 1) {
        const alunoUpdated = await getRepository(Aluno).findOne(request.params);
        return response.json(alunoUpdated);
    } else {
        return response.status(404).json({ message: 'Aluno não encontrado!' });
    }
};
