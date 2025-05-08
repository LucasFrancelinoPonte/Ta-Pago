export async function verify(event) {
    event.preventDefault();
    const dadosJson = require('./dados.json');

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        console.log(JSON.stringify({ email, senha }))
        const response = await fetch('http://localhost:3001/api/auth/login', { //como o front ta rodando no live server porta 5500 (padrão) e o back na 3001 estava dando erro ao acessar a rota
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "./home"
        }
        else {
            console.error('error ao fazer login nego')
        }
    } catch (er) {
        console.error('error ao fazer login negão', er)
    }
}

    /*if (dadosJson.email === email && dadosJson.senha === senha) {
        alert("Login bem-sucedido!");
        window.location.href = "./home"
        // Redirecionar ou realizar outra ação após o login bem-sucedido
    }

    else if (dadosJson.email !== email) {
        alert("Email incorreto. Tente novamente.");
    }
    else if (dadosJson.senha !== senha) {
        alert("Senha incorreta. Tente novamente.");
    }*/

