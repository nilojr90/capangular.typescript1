import { Cliente } from './Cliente';
import { ItemDoPedido, IItemDoPedido } from './ItemDoPedido';

export class Pedido {
    private itens: ItemDoPedido[] = [];
    private cliente: Cliente;
    private entrega: boolean;
    private imposto = 0.08; // 8%
    private taxa_entrega = 0.15; // 15%




    addItem(item: IItemDoPedido): void {
        let i = new ItemDoPedido(item);
        this.itens.push(i);
    }

    removeItem(id: number): ItemDoPedido[] {

        for (let index = 0; index < this.itens.length; index++) {
            if (id == this.itens[index].getProduto().getId()) {
                return this.itens.splice(index, 1);
            }

        }
    }

    getTotal(): number {
        let total = 0;
        let valorImposto = 0;
        let valorEntrega = 0;

        total = this.somaProdutos();

        valorImposto = total * this.getImposto();

        if (this.entrega) {
            valorEntrega = total * this.getTaxaEntrega();
        }

        //O valor do imposto deve incidir sobre a taxa de entrega?
        return total + valorImposto + valorEntrega;
    }


    somaProdutos(): number {
        let somaProdutos = 0;

        this.itens.forEach(item => {
            somaProdutos += item.getTotal();
        });
        return somaProdutos;
    }

    public getItens(): ItemDoPedido[] {
        return this.itens;
    }
    public setItens(value: ItemDoPedido[]) {
        this.itens = value;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }
    public setCliente(value: Cliente) {
        this.cliente = value;
    }

    public getEntrega(): boolean {
        return this.entrega;
    }
    public setEntrega(value: boolean) {
        this.entrega = value;
    }

    public getImposto() {
        return this.imposto;
    }

    public getTaxaEntrega() {
        return this.taxa_entrega;
    }
}



