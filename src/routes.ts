import { Router } from 'express';
import { deleteAluno, getAluno, getAlunos, saveAluno, updateAluno } from './controller/AlunoController';

const routes = Router();

routes.get('/alunos', getAlunos);
routes.get('/alunos/:id', getAluno);
routes.post('/alunos', saveAluno);
routes.delete('/alunos/:id', deleteAluno);
routes.put('/alunos/:id', updateAluno);

export default routes;
