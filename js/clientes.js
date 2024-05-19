const clientes = [
    { id: 1, nome: "Arthur", sobrenome: "Buch", cpf: "118.175.649-94" },
    { id: 2, nome: "Andre", sobrenome: "Victor", cpf: "117.985.475-47" },
    { id: 3, nome: "Eduardo", sobrenome: "Pias", cpf: "126.692.395-37" },
    { id: 4, nome: "Thomas", sobrenome: "Willian", cpf: "147.135.854-75" }
];

const tabelaBody = document.querySelector("#tabelaClientes tbody");

clientes.forEach(cliente => {
    const row = tabelaBody.insertRow();
    row.innerHTML = `
        <th scope="row">${cliente.id}</th>
        <td>${cliente.nome}</td>
        <td>${cliente.sobrenome}</td>
        <td>${cliente.cpf}</td>
    `;
});
