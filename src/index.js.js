const express = require('express');
const produtosRoutes = require('./routes/produtosRoutes');

const app = express();
app.use(express.json()); // Permite receber JSON nas requisições

app.use('/produtos', produtosRoutes); // Rotas de produtos

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});