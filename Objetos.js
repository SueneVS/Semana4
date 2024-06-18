//class

class Produto{
    nome 
    preco 
    quantidade 

    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log('Estoque insuficiente');
        } else {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada: ${quantidadeVendida} unidades do produto ${this.nome}`);
        }
    }

    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Reposição realizada: ${quantidadeReposta} unidades do produto ${this.nome}`);
    }

    MostrarEstoque() {
        console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis`);
    }

    AtualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço do produto ${this.nome} atualizado para R$ ${this.preco}`);
    }
}

//instanciação com construtor
let produto = new Produto("Camiseta", 100.35, 2)

//métodos
produto.Vender(1); 
produto.Repor(5);
produto.MostrarEstoque();
produto.AtualizarPreco(70.00)

console.log(produto)



