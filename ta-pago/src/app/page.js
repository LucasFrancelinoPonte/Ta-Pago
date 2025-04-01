"use client";
import AuthForm from '@/components/AuthForm';
import Link from 'next/link';

export default function Login() {
  const handleLogin = (event) => {
    // Mantendo a lógica de login existente
    logar(event);
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
