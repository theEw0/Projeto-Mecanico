function recriarEstruturaHtml() {
    // Criação dos elementos principais
    const container = document.createElement('div');
    container.className = 'container';

    const box1 = document.createElement('div');
    box1.className = 'box';

    // Elementos dentro do primeiro box
    const tituloPesquisa = document.createElement('div');
    tituloPesquisa.style.marginBottom = '10px';
    tituloPesquisa.textContent = 'Pesquisar cliente';

    const wrapperFormPesquisa = document.createElement('div');
    wrapperFormPesquisa.className = 'd-flex justify-content-left';

    const formPesquisa = document.createElement('form');
    formPesquisa.className = 'd-flex';

    const inputPesquisa = document.createElement('input');
    inputPesquisa.className = 'form-control me-2';
    inputPesquisa.type = 'search';
    inputPesquisa.placeholder = 'Search';
    inputPesquisa.ariaLabel = 'Search';

    const botaoPesquisa = document.createElement('button');
    botaoPesquisa.className = 'btn btn-outline-success';
    botaoPesquisa.type = 'submit';
    botaoPesquisa.textContent = 'Search';

    formPesquisa.appendChild(inputPesquisa);
    formPesquisa.appendChild(botaoPesquisa);
    wrapperFormPesquisa.appendChild(formPesquisa);

    const tituloOrdemServico = document.createElement('div');
    tituloOrdemServico.style.marginTop = '25px';
    tituloOrdemServico.textContent = 'Emitir ordem de servico/orcamento';

    const tituloSelecionarServico = document.createElement('div');
    tituloSelecionarServico.style.marginTop = '15px';
    tituloSelecionarServico.textContent = 'selecionar tipo de servico';

    box1.appendChild(tituloPesquisa);
    box1.appendChild(wrapperFormPesquisa);
    box1.appendChild(tituloOrdemServico);
    box1.appendChild(tituloSelecionarServico);

    // Função para criar os itens de serviço
    function criarItemServico(texto) {
        const box = document.createElement('div');
        box.className = 'box';

        const wrapperIcone = document.createElement('i');
        wrapperIcone.className = 'fas fa-calendar-check';
        wrapperIcone.style.color = '#74C0FC';

        const textoIcone = document.createElement('i');
        textoIcone.style.color = 'rgba(31, 30, 30, 0.863)';
        textoIcone.style.marginLeft = '5px';
        textoIcone.style.fontSize = '11px';
        textoIcone.textContent = ` ${texto}`;

        wrapperIcone.appendChild(textoIcone);
        box.appendChild(wrapperIcone);

        return box;
    }

    // Adicionando os itens de serviço
    box1.appendChild(criarItemServico('Funilaria'));
    box1.appendChild(criarItemServico('Mecanica'));
    box1.appendChild(criarItemServico('Eletrica'));
    box1.appendChild(criarItemServico('Estetica'));

    container.appendChild(box1);

    // Cliente e veículo selecionado
    const boxCliente = document.createElement('div');
    boxCliente.className = 'box';

    const infoCliente = document.createElement('div');
    const nomeCliente = document.createElement('i');
    nomeCliente.textContent = 'Cliente';
    const detalhesCliente = document.createElement('p');
    detalhesCliente.textContent = 'thomas turbante de oliveria - CPF, 111.555.777-22';

    infoCliente.appendChild(nomeCliente);
    infoCliente.appendChild(detalhesCliente);
    boxCliente.appendChild(infoCliente);

    container.appendChild(boxCliente);

    const boxVeiculo = document.createElement('div');
    boxVeiculo.className = 'box';

    const infoVeiculo = document.createElement('div');
    const tituloVeiculo = document.createElement('i');
    tituloVeiculo.textContent = 'veiculo selecionado';
    const detalhesVeiculo = document.createElement('p');
    detalhesVeiculo.textContent = 'Subaro wrx 1998 / placa 777-666';

    infoVeiculo.appendChild(tituloVeiculo);
    infoVeiculo.appendChild(detalhesVeiculo);
    boxVeiculo.appendChild(infoVeiculo);

    container.appendChild(boxVeiculo);

    // Seção de produtos e serviços
    const retangulo = document.createElement('div');
    retangulo.className = 'rectangle chield';

    const tituloSelecionarProdutos = document.createElement('div');
    tituloSelecionarProdutos.style.marginLeft = '40px';
    tituloSelecionarProdutos.textContent = 'Selecionar produtos e servicos';

    const wrapperFormProdutos = document.createElement('div');
    wrapperFormProdutos.className = 'd-flex justify-content-left';
    wrapperFormProdutos.style.marginLeft = '25px';
    wrapperFormProdutos.style.marginTop = '15px';

    const formProdutos = document.createElement('form');
    formProdutos.className = 'd-flex';

    const inputProdutos = document.createElement('input');
    inputProdutos.className = 'form-control me-2';
    inputProdutos.type = 'search';
    inputProdutos.placeholder = 'Search';
    inputProdutos.ariaLabel = 'Search';

    const botaoProdutos = document.createElement('button');
    botaoProdutos.className = 'btn btn-outline-success';
    botaoProdutos.type = 'submit';
    botaoProdutos.textContent = 'Search';

    formProdutos.appendChild(inputProdutos);
    formProdutos.appendChild(botaoProdutos);
    wrapperFormProdutos.appendChild(formProdutos);

    retangulo.appendChild(tituloSelecionarProdutos);
    retangulo.appendChild(wrapperFormProdutos);

    // Tabela de produtos e serviços
    const tabela = document.createElement('table');
    tabela.className = 'stretch table table-bordered';

    const thead = document.createElement('thead');
    const linhaCabecalho = document.createElement('tr');
    const cabecalhos = ['COD', 'NOME', 'DESCRICAO', 'VALORES'];
    cabecalhos.forEach(textoCabecalho => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = textoCabecalho;
        linhaCabecalho.appendChild(th);
    });
    thead.appendChild(linhaCabecalho);
    tabela.appendChild(thead);

    const tbody = document.createElement('tbody');

    const produtos = [
        { cod: 1, nome: 'Chapeacao e pintura', descricao: 'Valor R$ 300,00 (nao incluso tinta)', valores: 'Adicionar' },
        { cod: 2, nome: 'ASX-Lampada led', descricao: 'Valor R$ 200,00 - Luz led marca ASX', valores: 'Adicionar' },
        { cod: 2, nome: 'Modulo injecao-gol', descricao: 'Valor R$ 800,00 - modulo injecao marca EURO', valores: 'Adicionar' },
    ];

    produtos.forEach(produto => {
        const linha = document.createElement('tr');

        const celulaCod = document.createElement('th');
        celulaCod.scope = 'row';
        celulaCod.textContent = produto.cod;
        linha.appendChild(celulaCod);

        const celulaNome = document.createElement('td');
        celulaNome.textContent = produto.nome;
        linha.appendChild(celulaNome);

        const celulaDescricao = document.createElement('td');
        celulaDescricao.textContent = produto.descricao;
        linha.appendChild(celulaDescricao);

        const celulaValores = document.createElement('td');
        const linkAdicionar = document.createElement('a');
        linkAdicionar.href = '#';
        linkAdicionar.style.color = '#74C0FC';
        linkAdicionar.textContent = produto.valores;
        celulaValores.appendChild(linkAdicionar);
        linha.appendChild(celulaValores);

        tbody.appendChild(linha);
    });

    tabela.appendChild(tbody);
    retangulo.appendChild(tabela);

    container.appendChild(retangulo);

    // Adiciona o container ao corpo do documento
    document.body.appendChild(container);
}