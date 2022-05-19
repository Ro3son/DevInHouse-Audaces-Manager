export class Colecoes {
    id: number;
    nome: string;
    estacao: string
    responsavel: string;

    constructor(id: number, nome: string, estacao: string, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.estacao = estacao;
        this.responsavel = responsavel;
    }
}
