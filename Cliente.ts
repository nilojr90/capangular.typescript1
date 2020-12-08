import { MeioDePagamento } from './MeioDePagamento';
import { Endereco } from './Endereco';

export class Cliente {
    nome: string;
    endereco: Endereco;
    meiosDePagamento: MeioDePagamento[] = [];

    setNome(nome: string) {
        this.nome = nome;
    }

    setEndereco(endereco: Endereco) {
        this.endereco = endereco;
    }

    addMeioDePagamento(meioDePagamento: MeioDePagamento) {
        this.meiosDePagamento.push(meioDePagamento);
    }
}