// cadastroservico.js
let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

function cadastrarServico() {
    const servico = {
        tipo: document.querySelector(".placeholderTipoServico").value,
        nome: document.querySelector(".placeholderNomeServico").value,
        custoHora: document.querySelector(".placeholderHomemHora").value,
        subservicos: []
    };

    servicos.push(servico);
    localStorage.setItem("servicos", JSON.stringify(servicos));

    document.querySelector(".placeholderTipoServico").value = "";
    document.querySelector(".placeholderNomeServico").value = "";
    document.querySelector(".placeholderHomemHora").value = "";

    atualizarTabelaServicos();
    alert("Serviço cadastrado com sucesso!");
}

function atualizarTabelaServicos() {
    const tabelaBody = document.getElementById("tabelaServicos").getElementsByTagName("tbody")[0];
    tabelaBody.innerHTML = "";

    servicos.forEach((servico, index) => {
        const row = tabelaBody.insertRow();
        
        const numCell = row.insertCell();
        numCell.textContent = index + 1;

        const tipoCell = row.insertCell();
        tipoCell.textContent = servico.tipo;

        const nomeCell = row.insertCell();
        nomeCell.textContent = servico.nome;

        const custoCell = row.insertCell();
        custoCell.textContent = servico.custoHora;
    });
}

window.addEventListener("load", atualizarTabelaServicos);
document.getElementById("btnFinalizarCadastroServico").addEventListener("click", cadastrarServico);