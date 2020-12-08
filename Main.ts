
import { CartaoDeCredito } from "./CartaoDeCredito";
import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { ItemDoPedido } from "./ItemDoPedido";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";


var cliente = new Cliente();

cliente.setNome("Nilson Ramos");
cliente.setEndereco(new Endereco({
    cep: 49123999,
    pais: "Brasil",
    estado: "Sergipe",
    cidade: "Aracaju",
    bairro: "Centro",
    rua: "Rua dos Cajueiros",
    numero: 100
}));

/* cliente.addMeioDePagamento(new BoletoBancario({
    emissor: "Banco do Planeta",
    valor: 100,
    codigo_barras: "789456123",
    vencimento: new Date()
})); */

cliente.addMeioDePagamento(new CartaoDeCredito({
    emissor: "Super Card",
    ccv: 123,
    numero: 123412341234,
    limite: 5000,
    validade: new Date(),
    moeda: "BRL" //Real
}));

// Produtos
var teclado = new Produto({
    id: 1,
    categoria: "Hardware",
    descricao: "Teclado Gamer",
    preco: 300.00
});

var mouse = new Produto({
    id: 2,
    categoria: "Hardware",
    descricao: "Mouse Sem Fio",
    preco: 100.00
});

var anti_virus = new Produto({
    id: 3,
    categoria: "Software",
    descricao: "Super Defender",
    preco: 200.00
});


//Pedidos
var pedido_1 = new Pedido();

pedido_1.setCliente(cliente);
pedido_1.setEntrega(true);
pedido_1.addItem(new ItemDoPedido({
    produto: mouse,
    quantidade: 1
}));

var pedido_2 = new Pedido();

pedido_2.setCliente(cliente);
pedido_2.setEntrega(false);
pedido_2.addItem(new ItemDoPedido({
    produto: mouse,
    quantidade: 2
}));

pedido_2.addItem(new ItemDoPedido({
    produto: teclado,
    quantidade: 1
}));

pedido_2.addItem(new ItemDoPedido({
    produto: anti_virus,
    quantidade: 1
}));

///Resultados pedido 1
console.log("pedido_1");
//console.log(pedido_1);
console.log("itens \r\n");
pedido_1.getItens().map((i) => {
    console.log(
        "Descricao: " + i.produto.descricao + "\r\n" +
        "Preco: " + i.produto.getPreco() + "\r\n" +
        "Quantidade: " + i.quantidade + "\r\n" +
        "Valor Total: " + i.getTotal() + "\r\n");
});

console.log("Soma dos Produtos " + pedido_1.somaProdutos() + "\r\n");


console.log("Taxa de Entrega:" + pedido_1.getEntrega() + "\r\n");

console.log("Total " + pedido_1.getTotal() + "\r\n"); //124,2?


///Resultados pedido 2
console.log("pedido_2");
//console.log(pedido_2);
console.log("itens \r\n");
pedido_2.getItens().map((i) => {
    console.log(
        "Descricao: " + i.produto.descricao + "\r\n" +
        "Preco: " + i.produto.getPreco() + "\r\n" +
        "Quantidade: " + i.quantidade + "\r\n" +
        "Valor Total: " + i.getTotal() + "\r\n");
});

console.log("Soma dos Produtos " + pedido_2.somaProdutos() + "\r\n");

console.log("Taxa de Entrega:" + pedido_2.getEntrega() + "\r\n");

console.log("Total " + pedido_2.getTotal()); //124,2?


