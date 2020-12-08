export class MeioDePagamento {

    emissor: string;
    moeda: string

    constructor(meioPagamento: IMeioDePagamento) {
        this.emissor = meioPagamento.emissor;
        this.moeda = meioPagamento.moeda;
    }

}

export interface IMeioDePagamento {
    emissor: string,
    moeda: string
}