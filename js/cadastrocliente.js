
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];


function cadastrarCliente() {
  const cliente = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    cpf: document.getElementById("cpf").value,
    telefone: document.getElementById("telefone").value,
    numero: document.getElementById("numero").value,
    bairro: document.getElementById("bairro").value,
    endereco: document.getElementById("endereco").value,
    cep: document.getElementById("cep").value,
    veiculo: {
      marca: document.getElementById("marca").value,
      modelo: document.getElementById("modelo").value,
      cor: document.getElementById("cor").value,
      ano: document.getElementById("ano").value,
      placa: document.getElementById("placa").value,
    },
  };

  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));


  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("placa").value = "";

  atualizarTabelaRelatorio();
  alert("Cliente cadastrado com sucesso!");
}

function atualizarTabelaRelatorio() {
  const tabelaBody = document.getElementById("tabelaClientes").getElementsByTagName("tbody")[0];
  tabelaBody.innerHTML = "";

  clientes.forEach((cliente, index) => {
    const row = tabelaBody.insertRow();

    const nomeCell = row.insertCell();
    nomeCell.textContent = cliente.nome;

    const sobrenomeCell = row.insertCell();
    sobrenomeCell.textContent = cliente.sobrenome;

    const cpfCell = row.insertCell();
    cpfCell.textContent = cliente.cpf;

    const actionsCell = row.insertCell();
    const detalhesButton = document.createElement("button");
    detalhesButton.classList.add("btn", "btn-info");
    detalhesButton.textContent = "Detalhes";
    detalhesButton.onclick = () => mostrarDetalhesCliente(index);
    actionsCell.appendChild(detalhesButton);
  });
}


function mostrarDetalhesCliente(index) {
  const cliente = clientes[index];
  document.getElementById("modalNome").textContent = cliente.nome;
  document.getElementById("modalSobrenome").textContent = cliente.sobrenome;
  document.getElementById("modalCPF").textContent = cliente.cpf;
  document.getElementById("modalTelefone").textContent = cliente.telefone;
  document.getElementById("modalNumero").textContent = cliente.numero;
  document.getElementById("modalBairro").textContent = cliente.bairro;
  document.getElementById("modalEndereco").textContent = cliente.endereco;
  document.getElementById("modalCEP").textContent = cliente.cep;
  document.getElementById("modalMarca").textContent = cliente.veiculo.marca;
  document.getElementById("modalModelo").textContent = cliente.veiculo.modelo;
  document.getElementById("modalCor").textContent = cliente.veiculo.cor;
  document.getElementById("modalAno").textContent = cliente.veiculo.ano;
  document.getElementById("modalPlaca").textContent = cliente.veiculo.placa;

  const clienteModal = new bootstrap.Modal(document.getElementById('clienteModal'), {});
  clienteModal.show();
}


function limparLocalStorage() {
  localStorage.clear();
  clientes = [];
  atualizarTabelaRelatorio();
  alert("Todos os cadastros foram removidos!");
}


document.addEventListener("DOMContentLoaded", function () {
  const botaoCadastrar = document.getElementById("botaoCadastrarCliente");
  botaoCadastrar.addEventListener("click", cadastrarCliente);

  const botaoLimpar = document.getElementById("botaoLimparLocalStorage");
  botaoLimpar.addEventListener("click", limparLocalStorage);
});


window.addEventListener("load", atualizarTabelaRelatorio);
