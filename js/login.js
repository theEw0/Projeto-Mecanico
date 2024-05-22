function fazerLogin() {
  const usuario = document.getElementById('txtUsuario').value;
  const senha = document.getElementById('txtSenha').value;
  console.log("Usuario", usuario);
  console.log("Senha", senha);
  // Validação simples (para fins de exemplo)
  if (usuario === 'admin' && senha === 'senha123') {

      console.log("Login Bem Sucedido")
      window.location.href = "Home.html"
      alert('Login bem-sucedido! Redirecionando...');

  } else {

      alert('Usuário ou senha incorretos. Tente novamente.');
  }
}
  