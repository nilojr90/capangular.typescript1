export class Endereco {
    cep: number;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;

    constructor(endereco: IEndereco) {
        this.cep = endereco.cep;
        this.pais = endereco.pais;
        this.estado = endereco.estado;
        this.cidade = endereco.cidade;
        this.bairro = endereco.bairro;
        this.rua = endereco.rua;
        this.numero = endereco.numero;
    }

    toString(): string {
        return `CEP:${this.cep}` +
            `País:${this.pais}` +
            `Estado:${this.estado}` +
            `Cidade:${this.cidade}` +
            `Bairro:${this.bairro}` +
            `Rua:${this.rua}` +
            `Numero:${this.numero}`;
    }
}

export interface IEndereco {
    cep: number;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
}