export class Produto {
    id: number;
    descricao: string;
    categoria: string
    preco: number;

    constructor(produto: IProduto) {
        this.id = produto.id;
        this.descricao = produto.descricao;
        this.categoria = produto.categoria;
        this.preco = produto.preco;
    }


    getPreco(): number {
        return this.preco;
    }

    getId(): number {
        return this.id;
    }
}

export interface IProduto {
    descricao: string;
    categoria: string;
    preco: number;
    id: number;
}