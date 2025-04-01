// src/utils/auth.js
// Aqui você deve migrar as funções de autenticação do seu arquivo index.js original

export function logar(event) {
    // Implemente a lógica de login aqui
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Sua lógica de autenticação aqui
    console.log('Tentativa de login com:', email, senha);
  }
  
  export function novouser() {
    // Implemente a lógica de cadastro de novo usuário aqui
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Sua lógica de cadastro aqui
    console.log('Novo usuário:', email, senha);
  }
  
  export function novasenha() {
    // Implemente a lógica de recuperação de senha aqui
    const novaSenha = document.getElementById('email').value;
    const confirmacao = document.getElementById('senha').value;
    
    // Sua lógica de alteração de senha aqui
    console.log('Nova senha:', novaSenha, confirmacao);
  }