export class Modelos {
    id: number;
    nome: string;
    colecao: string;
    responsavel: string;

    constructor(id: number, nome: string, colecao: string, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.colecao = colecao;
        this.responsavel = responsavel;
    }
}
