# Boas-vindas ao repositório do projeto API de Blogs! (BlogsApi)

Projeto desenvolvido durante o modulo de backend na [Trybe](https://www.betrybe.com/).
- Nesse projeto foi proposto desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts. Assim criando relações entre:
  - `user` e `posts`
  - `posts` para `categories` e de `categories` para `posts`

## Diagrama
![Cover](.github/diagrama.png)

## Requisitos
- [Node](https://nodejs.org) versão LTS
- [npm](https://www.npmjs.com) ou [yarn](https://yarnpkg.com/getting-started/install)
- [MySql](https://www.mysql.com/)

## Tech Stack :rocket:

- [JavaScript](https://www.javascript.com/)
- [Node](https://nodejs.org)
- [Express](https://expressjs.com)
- [Sequelize](https://sequelize.org/)
- [MySql](https://www.mysql.com/)
- [Joi](https://joi.dev/)
- [JWT](https://jwt.io/)

## Instruções

#### 1. Clone o repositório
- Use o comando: `git clone git@github.com:LeonardoMonti/blogsApi.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd blogsApi`
#### 2. Instale as dependências
  - Execute `npm install`
#### 3. Você irá precisar configurar as variaveis de ambiente
  - Renomeie o arquivo `.env.example` para `.env`
  - Abra o arquivo `.env` e certifique-se que suas credencias do banco mysql estão corretas.
    - IMPORTANTE configurar as variáveis: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`
    - Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJs](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

#### 4. Execute `npm run prestart` para criar o banco e gerar as tabelas

<details>
  <summary><strong>👀 Dicas de scripts prontos</strong></summary>

---

  - Cria o banco e gera as tabelas:
  ```json
  "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
  ```

  - Deleta o banco de dados:
  ```json
  "drop": "npx sequelize-cli db:drop"
  ```

  - Insere dados/Popula a tabela:
  ```json
  "seed": "npx sequelize-cli db:seed:all"
  ```

  ### também listados no `package.json`

---

</details>

#### 5. Inicie o servidor rodando `npm run debug` basta acessar [http://localhost:3000](http://localhost:3000)
```http
  {
    "message": "connect"
  }
```

---

## Meu [Linkedin](https://www.linkedin.com/in/leonardomonti/)