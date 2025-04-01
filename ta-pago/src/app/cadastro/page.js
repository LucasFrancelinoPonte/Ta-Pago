"use client";
import AuthForm from '@/components/AuthForm';

export default function Cadastro() {
    const handleCadastro = () => {
        // Mantendo a lógica de cadastro existente
        novouser();
    };

    const cadastroInputs = [
        { type: "email", id: "email", placeholder: "Email" },
        { type: "password", id: "senha", placeholder: "Crie uma senha" }
    ];

    return (
        <main className="container">
            <AuthForm
                title="CADASTRE -"
                titleColored="SE"
                inputs={cadastroInputs}
                buttonText="Crie"
                buttonAction={handleCadastro}
                linkText="Já Tenho uma conta"
                linkHref="/"
            />
        </main>
    );
}
