async function buscarCep() {
    const cepDiditado = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cepDiditado}/json/`;

    const resposta = await fetch(url);
    const data = await resposta.json();

    poplarCampos(data);

}
function poplarCampos(data) {
    document.querySelector("#logradouro").value = data.logradouro;
    document.querySelector("#bairro").value = data.bairro;
    document.querySelector("#cidade").value = data.localidade;
    document.querySelector("#siglaDoEstado").value = data.uf;
    document.querySelector("#regiao").value = data.regiao;
    // Preencher outros campos conforme necessário do html
}