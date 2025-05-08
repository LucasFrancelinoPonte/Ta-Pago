require('dotenv').config();
const express = require('express');
const { db } = require('./config/database');

/*// Importar rotas
import authRoutes from './routes/authRoutes';

// Rotas da API
app.use('/api/auth', authRoutes);
*/
const app = express();
const PORT = process.env.PORT || 3001;
// Iniciar o servidor
async function startServer() {
  try {
    await db.sync({force: false});
    await db.authenticate();
    console.debug('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

startServer();