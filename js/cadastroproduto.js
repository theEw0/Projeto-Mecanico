// cadastroproduto.js
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function cadastrarProduto() {
    const produto = {
        id: document.getElementById("idProduto").value,
        tipo: document.getElementById("tipoProduto").value,
        nome: document.getElementById("nomeProduto").value,
        custo: document.getElementById("custoProduto").value,
        preco: document.getElementById("precoProduto").value,
    };

    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    document.getElementById("idProduto").value = "";
    document.getElementById("tipoProduto").value = "";
    document.getElementById("nomeProduto").value = "";
    document.getElementById("custoProduto").value = "";
    document.getElementById("precoProduto").value = "";

    atualizarTabelaProdutos();
    alert("Produto cadastrado com sucesso!");
}

function atualizarTabelaProdutos() {
    const tabelaBody = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
    tabelaBody.innerHTML = "";

    produtos.forEach(produto => {
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
    });
}

window.addEventListener("load", () => {
    atualizarTabelaProdutos();
    document.getElementById("btnFinalizarCadastroProduto").addEventListener("click", cadastrarProduto);
});
