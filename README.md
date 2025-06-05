# API de Gerenciamento de Produtos

## Descrição Geral

Esta API permite o gerenciamento de produtos, possibilitando operações de cadastro, consulta, atualização e remoção de itens em um catálogo. É ideal para sistemas de e-commerce, controle de estoque ou qualquer aplicação que necessite gerenciar produtos de forma eficiente.

## Objetivos

- Facilitar a integração de sistemas com um catálogo de produtos.
- Prover endpoints RESTful para operações CRUD (Create, Read, Update, Delete).
- Garantir segurança, escalabilidade e facilidade de uso.

## Funcionalidades

- **Listar produtos**: Consultar todos os produtos cadastrados.
- **Buscar produto por ID**: Obter detalhes de um produto específico.
- **Adicionar produto**: Cadastrar um novo produto.
- **Atualizar produto**: Modificar informações de um produto existente.
- **Remover produto**: Excluir um produto do catálogo.

## Tecnologias Utilizadas

- **Linguagem:** Node.js (JavaScript)
- **Framework:** Express.js
- **Banco de Dados:** MongoDB (em processo)
- **Autenticação:** JWT (JSON Web Token) (em processo)
- **Documentação:** Swagger (em processo)

## Exemplos de Requisições e Respostas

### 1. Listar Produtos

**Requisição:**
```http
GET /api/produtos
```

**Resposta:**
```json
[
    {
        "id": "1",
        "nome": "Notebook",
        "preco": 3500.00,
        "estoque": 10
    },
    {
        "id": "2",
        "nome": "Mouse",
        "preco": 50.00,
        "estoque": 100
    }
]
```

### 2. Adicionar Produto

**Requisição:**
```http
POST /api/produtos
Content-Type: application/json

{
    "nome": "Teclado",
    "preco": 120.00,
    "estoque": 50
}
```

**Resposta:**
```json
{
    "id": "3",
    "nome": "Teclado",
    "preco": 120.00,
    "estoque": 50
}
```

### 3. Atualizar Produto

**Requisição:**
```http
PUT /api/produtos/3
Content-Type: application/json

{
    "nome": "Teclado Mecânico",
    "preco": 200.00,
    "estoque": 40
}
```

**Resposta:**
```json
{
    "id": "3",
    "nome": "Teclado Mecânico",
    "preco": 200.00,
    "estoque": 40
}
```

### 4. Remover Produto

**Requisição:**
```http
DELETE /api/produtos/3
```

**Resposta:**
```json
{
    "mensagem": "Produto removido com sucesso."
}
```

## Instruções de Instalação

1. **Clone o repositório:**
     ```bash
     git clone https://github.com/REN4TONASCIMENTO/APIprodutos.git
     cd nome-do-repositorio
     ```

2. **Instale as dependências:**
     ```bash
     npm install
     ```

3. **Configure as variáveis de ambiente:**
     - Crie um arquivo `.env` com as configurações do banco de dados e JWT.

4. **Inicie a aplicação:**
     ```bash
     npm start
     ```

5. **Acesse a documentação Swagger:**
     - Disponível em `http://localhost:3000/api-docs`

---

> Para dúvidas ou sugestões, abra uma issue no repositório.
