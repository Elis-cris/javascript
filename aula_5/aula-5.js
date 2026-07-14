const API_URL = "https://6a557802e49d9eb2cc55c30b.mockapi.io/produtos";

async function buscarProdutos() {
    try {
        const resposta = await fetch(API_URL);
        const produtos = await resposta.json();

        popularTabela(produtos);
    } catch (erro) {
        console.error(erro)
    }
}

function popularTabela(produtos) {
    let html = "";
    for (const produto of produtos) {
        html += `
            <tr>
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${calcularTotal(produto.preco, produto.quantidade).toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger" onclick="excluirProduto(${produto.id})">Excluir</button>
                </td>
            </tr>
        `;
    }
    document.querySelector("tbody").innerHTML = html;
}

function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}
                  

                  


buscarProdutos();