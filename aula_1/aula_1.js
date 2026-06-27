// console.log("Olá mundo!")

//const nome = prompt("Digite seu nome");
//alert("Bem vindo" +  nome);

function somar() {
  const n1 = Number(prompt("Digite o primeiro numero"));
  const n2 = Number(prompt("Digite o  segundo numero"));
  const resultado = n1 + n2;
  alert(`O resultado da soma é ${resultado}`);


}
//somar();

function multiplicar() {
  const n1 = Number(prompt("Digite o primeiro numero"));
  const n2 = Number(prompt("Digite o  segundo numero numero"));
  const resultado = n1 * n2;
  alert(`o resultado da multiplicaçao é ${resultado}`);

}

function somarInpusts() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;

  console.log(n1, n2);
  document.querySelector("#resultado_soma").textContent = `o resutado da soma é ${resultado}`;


}

function somarInpusts() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;

  console.log(n1, n2);
  document.querySelector("#resultado_soma").textContent = `o resutado da soma é ${resultado}`;


}
