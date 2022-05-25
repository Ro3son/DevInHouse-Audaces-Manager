export class Colecoes {
    id: number;
    nome: string;
    estacao: string;
    lancamento: number;
    responsavel: string;

    constructor(id: number, nome: string, estacao: string, lancamento: number, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.estacao = estacao;
        this.lancamento = lancamento;
        this.responsavel = responsavel;
    }
}
