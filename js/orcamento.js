function atualizarTabelaProdutos() {
    const tabelaBody = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
    tabelaBody.innerHTML = "";

    const searchTerm = document.getElementById("searchProduto").value.toLowerCase();

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.forEach(produto => {
        if (produto.nome.toLowerCase().includes(searchTerm)) {
            const row = tabelaBody.insertRow();

            const idCell = row.insertCell();
            idCell.textContent = produto.id;

            const tipoCell = row.insertCell();
            tipoCell.textContent = produto.tipo;

            const nomeCell = row.insertCell();
            nomeCell.textContent = produto.nome;

            const custoCell = row.insertCell();
            custoCell.textContent = produto.custo;

            const precoCell = row.insertCell();
            precoCell.textContent = produto.preco;
        }
    });
}

function atualizarTabelaRelatorio() {
    const tabelaBody = document.getElementById("tabelaClientes").getElementsByTagName("tbody")[0];
    tabelaBody.innerHTML = "";

    const searchTerm = document.getElementById("searchCliente").value.toLowerCase();
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    clientes.forEach((cliente, index) => {
        if (cliente.nome.toLowerCase().includes(searchTerm) || cliente.sobrenome.toLowerCase().includes(searchTerm)) {
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
        }
    });
}

function atualizarTabelaServicos() {
    const tabelaBody = document.getElementById("tabelaServicos").getElementsByTagName("tbody")[0];
    tabelaBody.innerHTML = "";

    const searchTerm = document.getElementById("searchServico").value.toLowerCase();

    const servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    servicos.forEach((servico, index) => {
        if (servico.tipo.toLowerCase().includes(searchTerm) || servico.nome.toLowerCase().includes(searchTerm)) {
            const row = tabelaBody.insertRow();
            
            const numCell = row.insertCell();
            numCell.textContent = index + 1;

            const tipoCell = row.insertCell();
            tipoCell.textContent = servico.tipo;

            const nomeCell = row.insertCell();
            nomeCell.textContent = servico.nome;

            const custoCell = row.insertCell();
            custoCell.textContent = servico.custoHora;
        }
    });
}
