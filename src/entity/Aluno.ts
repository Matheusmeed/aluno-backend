import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    idade: number;

    @Column()
    ra: number;

    @Column()
    endereco: string;

    @Column()
    dataNascimento: Date;

    @Column({
        default: false,
    })
    matriculado: boolean;
}
