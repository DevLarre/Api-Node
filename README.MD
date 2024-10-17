# 🛒 API de Produtos

## 📄 Descrição

Este projeto é uma API simples de produtos construída em **Node.js** utilizando o framework **Express**. O objetivo principal é praticar a construção de APIs RESTful com persistência de dados em arquivo JSON, validação de dados com a biblioteca **Joi**, e implementação de operações CRUD (Create, Read, Update, Delete).

## 🚀 Funcionalidades

- ✅ **CRUD completo** para a entidade `products`.
  - Criar um novo produto.
  - Listar todos os produtos.
  - Atualizar um produto existente.
  - Deletar um produto.
- 🗃️ Persistência de dados em arquivo JSON.
- 🔍 Validação de dados nas requisições com **Joi**.
- ⚙️ Utilização do **Nodemon** para reinicialização automática do servidor durante o desenvolvimento.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para Node.js.
- **Joi**: Biblioteca de validação de dados.
- **Nodemon**: Ferramenta para reinicializar automaticamente o servidor quando houver alterações nos arquivos.
- **File System (fs)**: Módulo nativo do Node.js para leitura e escrita em arquivos.

## 📦 Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:

   ```
   Copiar código
   npm install
   ```

3. Inicie o servidor com Nodemon:

   ```
   npx nodemon index.js
   ```

4. O servidor estará rodando na porta 3000:

   ```
   http://localhost:3000
   ```

## 🔗 Endpoints da API
### 📝 Listar Produtos
Endpoint: GET /products
Descrição: Retorna a lista de todos os produtos.
Exemplo de Resposta:


   ```   
[
  {
    "id": 1,
    "title": "Product A",
    "description": "This is product A",
    "quantity": 10
  },
   {
      "id": 2,
      "title": "Product B",
      "description": "This is product B",
      "quantity": 5
   }
]
   ```

## ➕ Criar Produto
### Endpoint: POST /products
Descrição: Cria um novo produto.
Campos Requeridos:
title: string, mínimo de 3 caracteres.
description: string, mínimo de 10 caracteres.
quantity: número inteiro, mínimo de 1.

### Exemplo de Requisição:
```
{
  "title": "Product C",
  "description": "This is product C",
  "quantity": 7
}
```

### Exemplo de Resposta:
```
{
  "id": 3,
  "title": "Product C",
  "description": "This is product C",
  "quantity": 7
}  
```

## 🛠️ Atualizar Produto
### Endpoint: PUT /products/:id
Descrição: Atualiza os dados de um produto existente.

### Exemplo de Requisição:
```
{
  "title": "Updated Product",
  "description": "This is an updated product",
  "quantity": 15
}
```

### Exemplo de Resposta:
```
{
  "id": 1,
  "title": "Updated Product",
  "description": "This is an updated product",
  "quantity": 15
}
```

## ❌ Deletar Produto

### Endpoint: DELETE /products/:id
Descrição: Deleta um produto existente.
Exemplo de Resposta: Código de status 204 (sem conteúdo).

## ✅ Validação de Dados

A validação dos dados é feita utilizando a biblioteca Joi. Ao tentar criar ou atualizar um produto com dados inválidos, a API retorna um erro de validação com o código de status 400 e uma mensagem descritiva do erro.

### Exemplo de Resposta de Erro:

```
{
  "error": "\"title\" is required"
}
```

## 📂 Estrutura de Diretórios
```
├── middlewares
│   └── validateProduct.js   # Middleware de validação dos produtos
├── data.json                # Arquivo JSON que armazena os dados dos produtos
├── index.js                 # Arquivo principal da aplicação
├── package.json             # Dependências do projeto
├── README.md                # Documentação do projeto

```

# 🛠️ Como Usar o Postman para Testar
Você pode usar o Postman para enviar requisições HTTP para a API:

### GET: Para listar os produtos, envie uma requisição GET para http://localhost:3000/products.
### POST: Para criar um produto, envie uma requisição POST com o corpo em JSON para http://localhost:3000/products.
### PUT: Para atualizar um produto, envie uma requisição PUT com o corpo em JSON para http://localhost:3000/products/:id.
### DELETE: Para deletar um produto, envie uma requisição DELETE para http://localhost:3000/products/:id.

## 🤝 Contribuição
Sinta-se à vontade para contribuir com este projeto. Sugestões e melhorias são sempre bem-vindas!

1. Fork o repositório.
2. Crie uma nova branch: git checkout -b feature/nova-funcionalidade.
3. Faça suas alterações e commit: git commit -m 'Adiciona nova funcionalidade'.
4. Envie para a branch principal: git push origin feature/nova-funcionalidade.
5. Abra um Pull Request.

## 📜 Licença
Este projeto está licenciado sob a MIT License.

### Conecte-se comigo

[![Linkdln](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/douglas-rodrigues-larré-a59637231/)
[![Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](dev.larre@outlook.com)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/dev_larre)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevLarre)

Vamos codar! 🚀

## © Desenvolvido por Dev Larré, 2024