function cadastrarProduto() {
    // Obter dados do produto (você pode usar um formulário HTML para isso)
    let nomeProduto = document.getElementById("nomeProduto").value;
    let precoProduto = parseFloat(document.getElementById("precoProduto").value);

    // Criar objeto do produto
    let produto = {
        nome: nomeProduto,
        preco: precoProduto
    };

    // Obter produtos existentes do LocalStorage (ou criar um array vazio se não houver)
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    // Adicionar novo produto ao array
    produtos.push(produto);

    // Salvar array atualizado no LocalStorage
    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso!");
}

function atualizarTabelaRelatorio() {
    const tabelaBody = document.getElementById("tabelaClientes").getElementsByTagName("tbody")[0];
    tabelaBody.innerHTML = ""; // Limpa o corpo da tabela
  
    clientes.forEach(cliente => {
      const row = document.createElement("tr"); // Cria a linha
  
      // Cria as células e adiciona os dados
      const nomeCell = document.createElement("td");
      nomeCell.textContent = cliente.nome;
      row.appendChild(nomeCell);
  
      const sobrenomeCell = document.createElement("td");
      sobrenomeCell.textContent = cliente.sobrenome;
      row.appendChild(sobrenomeCell);
  
      const cpfCell = document.createElement("td");
      cpfCell.textContent = cliente.cpf;
      row.appendChild(cpfCell);
  
      // Adiciona a linha à tabela
      tabelaBody.appendChild(row);
    });
  }
  
  // Carregar os clientes na tabela ao iniciar a página
  window.addEventListener('load', atualizarTabelaRelatorio); 