let produtos = []; // Simulação de banco de dados em memória
let idAtual = 1;

exports.listar = (req, res) => {
  res.json(produtos);
};

exports.criar = (req, res) => {
  const produto = { id: idAtual++, ...req.body };
  produtos.push(produto);
  res.status(201).json(produto);
};

exports.editar = (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  produtos[index] = { id, ...req.body };
  res.json(produtos[index]);
};

exports.deletar = (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  produtos.splice(index, 1);
  res.status(204).send();
};