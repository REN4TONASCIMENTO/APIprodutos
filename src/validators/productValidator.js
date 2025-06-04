const Joi = require('joi');

// Esquema de validação para produto
const schema = Joi.object({
  nome: Joi.string().min(3).required(),
  preco: Joi.number().positive().required(),
  descricao: Joi.string().optional()
});

exports.validarProduto = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }
  next();
};