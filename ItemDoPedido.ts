import { Produto } from './Produto';

export class ItemDoPedido {
    produto: Produto;
    quantidade: number;

    constructor(item: IItemDoPedido) {
        this.produto = item.produto;
        this.quantidade = item.quantidade;
    }

    getTotal(): number {
        return this.produto.getPreco() * this.quantidade;
    }

    getProduto() {
        return this.produto;
    }
}

export interface IItemDoPedido {
    produto: Produto;
    quantidade: number;
}