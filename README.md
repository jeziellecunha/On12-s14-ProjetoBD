# Workshop Back end - Reprograma

## 

## 

## Exercício : On12-s14-ProjetoGuiado-BBD

### 

### Professora: Simara Conceição

### 

### Aluna: Jezielle Cunha



O projeto irá criar um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar.

## Tecnologias usadas no projeto:

| Ferramenta   | Descrição                                |
| ------------ | ---------------------------------------- |
| `javascript` | Linguagem de programação                 |
| `nodejs`     | Ambiente de execução do javascript       |
| `express`    | Framework NodeJS                         |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections |
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente |
| `npm `       | Gerenciador de pacotes                   |
| `MongoDb`    | Banco de dado não relacional orietado a documentos |
| ` Robo 3T`   | Interface gráfica para verificar se os dados foram persistidos |
| ` Postman`   | Interface gráfica para realizar os testes |

## 📁 Arquitetura

```
 📁 projetoDbS14
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 titulo.routes.js 
   |         |- 📄 estudio.routes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 package-lock.json
   |- 📄 server.js


```

### Requisitos do projeto:

-   **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
-   **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
-   **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar
-   **"/estudios"** Deverá retornar todos os estudios cadastrados
-   "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio
-   "**/estudios**" Deverá criar um estudio
-   "**/titulos**"  Deverá criar um título
-   "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
-   "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável
-   "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
-   "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

### 

### Regras de negócio

-   Não deverá ser possível criar estudio com o mesmo nome
-   Não deverá ser possível criar título com o mesmo nome
-   Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

### 

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório



### API retorna o seguinte JSON:

```
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]
```

### 

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório

### 

### API retorna o seguinte JSON:

```
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c285d2685e6",
    "nome": "Spirited Away",
    "genero": "romance",
    "descricao": "SPIRITED AWAY é uma fantasia maravilhosa sobre uma jovem garota, Chihiro, presa em um estranho mundo novo de espíritos. Quando seus pais passam por uma transformação misteriosa, ela deve invocar a coragem que ela nunca soube que tinha para se libertar e retornar sua família para o mundo exterior. Uma história inesquecível e cheia de criatividade, SPIRITED AWAY o levará em uma jornada além da sua imaginação.",
    "estudio": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad33d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]
```



### Mariores aprendizados:

- Reforçar o conhecimento do CRUD em API;

- Reforçar o conhecimento da utilização da dependência Mongoose;

- Saber como é possível criar database e collections a partir dos inserts no Postman;

- Aprender como criar "relacionamento" entre collections, utilizando um documento para popular outro documento de uma collection distinta;

- Primeiro contato com a dependência Dotenv, aprendizado e aplicação para resguardar dados sensíveis.

  ​







