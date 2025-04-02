"use client";
import AuthForm from '@/components/AuthForm';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

export default function Login() {
  const { darkMode } = useTheme();

  const handleLogin = (event) => {
    // Mantendo a lógica de login existente
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Sua lógica de autenticação aqui
    console.log('Tentativa de login com:', email, senha);
  };

  const loginInputs = [
    { type: "email", id: "email", placeholder: "Email" },
    { type: "password", id: "senha", placeholder: "Senha" }
  ];

  const registerElement = (
    <div className="cadastro">
      <p>Não tem uma conta? <Link href="/cadastro">Registre-se</Link></p>
    </div>
  );

  return (
    <main className="container">
      <AuthForm
        title="LOGIN"
        titleColored="TÁ PAGO"
        inputs={loginInputs}
        buttonText="Acesse"
        buttonAction={handleLogin}
        linkText="Esqueci minha senha"
        linkHref="/esqsenha"
        extraElement={registerElement}
      />
    </main>
  );
}