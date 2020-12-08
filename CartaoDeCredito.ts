import { MeioDePagamento } from './MeioDePagamento';

export class CartaoDeCredito extends MeioDePagamento {

    limite: number;
    validade: Date;
    numero: number;
    ccv: number;


    constructor(cartao: ICartaoDeCredito) {
        super({
            emissor: cartao.emissor,
            moeda: cartao.moeda
        });

        this.limite = cartao.limite;
        this.validade = cartao.validade;
        this.numero = cartao.numero;
        this.ccv = cartao.ccv;
    }
}



export interface ICartaoDeCredito {
    emissor: string;
    moeda: string;
    limite: number;
    validade: Date;
    numero: number;
    ccv: number;
}