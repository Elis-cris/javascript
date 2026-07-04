const alunos = ["gustavo", "Nilson", "Ezequiel", "Brunna"];
//alert(alunos[2]);
//for(const aluno of alunos){
/// console.log(aluno);

//}

const carros = [
  {
    placa: "AAAA0A33",
    cor: "Branca",
    marca: "VW",
    modelo: "Fusca",
    tetoSolar: false,
    chassi: "AAAAA0000",
  },
  {
    placa: "AAAD0A33",
    cor: "Azul",
    marca: "chevrolet",
    modelo: "chevette",
    tetoSolar: false,
    chassi: "BBAAA0000",
  },
  {
    placa: "AAAD0A33",
    cor: "Preto",
    marca: "Monza",
    modelo: "chevette",
    tetoSolar: false,
    chassi: "CCCBAAA0000",
  },
];
//alert('O carrro è: ${carro1.marca} ${carro1.modelo} - ${ carro1.placa}');
//console.log (carros[0].placa);
//console.log (carros[1].placa);
// for (const carro of carros){
//console.log(carro.modelo);
// }

function popularTabela() {
const tbody = document.querySelector("#tabela_carros tbody");
let html = "";
for (const carro of carros) {
    html += `<tr>
        <td>${carro.marca}</td>
        <td>${carro.modelo}</td>
        <td>${carro.cor}</td>
        <td>${carro.placa}</td>
        <td>${carro.chassi}</td>
        <td>${carro.tetoSolar ? "Sim" : "Não"}</td>
    </tr>
`;
}
tbody.innerHTML = html;
}
popularTabela();
