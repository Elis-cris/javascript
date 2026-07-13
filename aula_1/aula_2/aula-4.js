async function buscarCep() {
    const CepDiditado = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${CepDiditado}/json/`;
    const resposta = await fetch(url);
    const dados = await resposta.json();  
    console.log(dados);
    poplarCampos(dados);
    
}
 function poplarCampos(dados) {

 }