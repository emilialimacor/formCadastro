function cadastrarPessoa() {
  var nome = document.getElementById("nome").value;
  var salario = document.getElementById("salario").value;
  var idade = document.getElementById("idade").value;
  var possuiDiploma = document.getElementById("diploma").checked;

  var listaPessoas = document.getElementById("listaPessoas");
  var listItem = document.createElement("li");
  listItem.textContent = `Nome: ${nome}, Salário: ${salario}, Idade: ${idade}, Diploma: ${
    possuiDiploma ? "Sim" : "Não"
  }`;

  //Adiciona pessoas cadastradas à lista
  listaPessoas.appendChild(listItem);

  //Limpar o formulário após o cadastro

  document.getElementById("cadastroForm").reset();
}
