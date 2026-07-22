const API_URL = "https://6a5fe634b1933e9d25fcc879.mockapi.io/produtos";

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
                <td>R$ ${produto.preco}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${calcularTotal(produto.preco, produto.quantidade)}</td>

                <td>
                    <button class="btn btn-danger" onclick="apagarProduto(${produto.id})">
                    Remover</button>
                    
                    <button class="btn btn-warning" onclick="atualizarProduto(${produto.id})">
                    Atualizar</button>
                </td>
            </tr>
        `;
    }
    const tbody = document.querySelector('#tabela_produtos tbody');
    tbody.innerHTML = html;

}
function calcularTotal(preco, quantidade) {
    const resutado = Number(preco) * Number(quantidade);
    return resutado.toFixed(2);
}

async function apagarProduto(id) {
    if( !confirm("Relmanete deseija a pagar esse produto ?")){
        return;

    }
    const url = '${API_URL}/${id}';
    try {
        await fetch(url, {
            method: 'DELETE'
        });
        buscarProdutos();
    } catch (error) {

        alerta("Erro ao apagar produto");
    }finally{
        buscarProdutos();
    }
}

async function criarProduto() { }

async function atualizarProduto(id) { }



buscarProdutos();