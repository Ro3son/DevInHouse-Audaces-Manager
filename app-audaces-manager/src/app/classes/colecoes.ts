export class Colecoes {
  id: number;
  nome: string;
  marca: string;
  estacao: string;
  orcamento: number;
  lancamento: number;
  responsavel: string;

  constructor(
    id: number,
    nome: string,
    marca: string,
    estacao: string,
    orcamento: number,
    lancamento: number,
    responsavel: string
  ) {
    this.id = id;
    this.nome = nome;
    this.marca = marca;
    this.estacao = estacao;
    this.orcamento = orcamento;
    this.lancamento = lancamento;
    this.responsavel = responsavel;
  }
}
