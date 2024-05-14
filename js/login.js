document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('form');
    const inputUsuario = document.getElementById('username-login');
    const inputSenha = document.querySelector('input[type="password"]');
  
    const usuarios = {
      'adm@email.com': 'senha123',
      'admin@mecasystem.com': 'admin123'
    };
  
    formLogin.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const usuario = inputUsuario.value;
      const senha = inputSenha.value;
  
      if (usuarios[usuario] === senha) {
        alert('Login realizado com sucesso!');
        window.location.href = 'cadastrocliente.html';
      } else {
        alert('Usuário ou senha incorretos!');
      }
    });
  });
  