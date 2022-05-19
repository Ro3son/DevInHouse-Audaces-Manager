export class Modelos {
    id: number;
    nome: string;
    colecao: number;
    responsavel: string;

    constructor(id: number, nome: string, colecao: number, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.colecao = colecao;
        this.responsavel = responsavel;
    }
}
