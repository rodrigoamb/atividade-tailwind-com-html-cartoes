// Nome do comprador
const nomeInput = document.querySelector("#input-nome");
const nomeExibicao = document.querySelector("#nome-exibicao");

nomeInput.addEventListener("input", () => {
  nomeExibicao.textContent = nomeInput.value || "Nome do comprador";
});

// Número do cartão

const numeroInput = document.querySelector("#input-numero-cartao");
const numeroExibicao = document.querySelector("#numero-cartao-exibicao");

numeroInput.addEventListener("input", () => {
  numeroExibicao.textContent = numeroInput.value || "#### #### #### ####";
});

// Mes e ano de validade

const mesInput = document.querySelector("#input-mes");
const anoInput = document.querySelector("#input-ano");
const mesExibicao = document.querySelector("#mes-exibicao");
const anoExibicao = document.querySelector("#ano-exibicao");

mesInput.addEventListener("input", () => {
  mesExibicao.textContent = mesInput.value || "MM";
});

anoInput.addEventListener("input", () => {
  anoExibicao.textContent = anoInput.value || "AA";
});

// CCV

const ccvInput = document.querySelector("#input-ccv");
const ccvExibicao = document.querySelector("#ccv-exibicao");

ccvInput.addEventListener("input", () => {
  ccvExibicao.textContent = ccvInput.value || "###";
});

//alterando a imagem da bandeira do cartão

const bandeiraSelect = document.querySelector("#bandeira");
const bandeiraImagem = document.querySelector("#bandeira-imagem");

bandeiraSelect.addEventListener("change", () => {
  if (bandeiraSelect.value === "mastercard") {
    bandeiraImagem.src = "./assets/mastercard.png";
  } else if (bandeiraSelect.value === "visa") {
    bandeiraImagem.src = "./assets/visa.png";
  }
});

//enviando os dados do formulário e abrindo o modal de confirmação

const inputParcelas = document.querySelector("#parcelas");
const inputCpf = document.querySelector("#input-cpf");
const inputEndereco = document.querySelector("#input-endereco");
const inputNumero = document.querySelector("#input-numero-endereco");
const inputComplemento = document.querySelector("#input-complemento");
const inputCep = document.querySelector("#input-cep");
const inputCidade = document.querySelector("#input-cidade");
const inputEstado = document.querySelector("#input-estado");

const form = document.querySelector("#form-pagamento");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dados = {
    nome: nomeInput.value,
    numero: numeroInput.value,
    mes: mesInput.value,
    ano: anoInput.value,
    ccv: ccvInput.value,
    bandeira: bandeiraSelect.value,
    parcelas: inputParcelas.value,
    cpf: inputCpf.value,
    endereco: inputEndereco.value,
    numeroEndereco: inputNumero.value,
    complemento: inputComplemento.value,
    cep: inputCep.value,
    cidade: inputCidade.value,
    estado: inputEstado.value,
  };

  console.log(dados);

  alert("Compra realizada com sucesso!");
});
