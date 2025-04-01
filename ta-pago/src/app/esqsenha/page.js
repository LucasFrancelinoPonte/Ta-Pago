"use client";
import AuthForm from '@/components/AuthForm';

export default function EsqueceuSenha() {
    const handleNovaSenha = () => {
        // Mantendo a lógica de redefinição de senha existente
        novasenha();
    };

    const senhaInputs = [
        { type: "text", id: "email", placeholder: "Nova senha" },
        { type: "text", id: "senha", placeholder: "Digite Novamente" }
    ];

    return (
        <main className="container">
            <AuthForm
                title="MUDAR"
                titleColored="SENHA"
                inputs={senhaInputs}
                buttonText="Altere"
                buttonAction={handleNovaSenha}
                linkText="Lembrei minha senha"
                linkHref="/"
            />
        </main>
    );
}