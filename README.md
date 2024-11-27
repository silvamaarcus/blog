# Blog em React

Bem-vindo ao **Blog em React**, uma aplicação web que permite aos usuários criar e compartilhar posts sobre uma variedade de tópicos, incluindo tecnologia, cinema e muito mais. Este projeto foi criado com **React** usando **Vite** e **TypeScript**, utilizando **Tailwind CSS** para a estilização e **JSON-Server** para a manipulação de banco de dados.

## Visão Geral

Este projeto demonstra como construir um blog dinâmico e interativo usando **React**. Os usuários podem:

- Criar novos posts.
- Visualizar e editar posts existentes.
- Excluir posts.
- Interagir com outros usuários por meio de comentários.

## Tecnologias Utilizadas

- **React**: O frontend da aplicação foi desenvolvido utilizando o framework React, permitindo interfaces dinâmicas e reativas.
- **Vite**: Ferramenta de build rápida e eficiente para projetos em React.
- **TypeScript**: Garantindo um desenvolvimento mais seguro e organizado com tipagem estática.
- **Tailwind CSS**: Utilizado para estilização rápida e responsiva, com classes utilitárias para layout e design.
- **CSS personalizado**: Estilização de fontes e cores específicas.
- **JSON-Server**: Simulação de um banco de dados para persistência de dados de posts e comentários.

## Instalação

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/silvamaarcus/blog-react.git
```

2. Navegue até o diretório do projeto:

```bash
cd blog-react
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:5137.

## Estrutura do Projeto

- src/: Contém os arquivos principais do projeto, incluindo componentes, páginas e arquivos de estilo.
- public/: Contém arquivos públicos como imagens.
- db.json: Arquivo de configuração do JSON-Server, simulando o banco de dados para armazenar os posts e comentários.

## Link do Deploy

Acesse a aplicação diretamente no seguinte link (POSTS FICTÍCIOS):

[Blog em React - Deploy](https://blog-mauve-five.vercel.app/)

**OBS**: Para ver os posts e comentários, é necessário iniciar o servidor JSON-Server ao fazer clone do projeto. Nao funciiona no deploy.

Para iniciar o servidor JSON-Server, certifique-se de ter o Node.js instalado em sua máquina. Em seguida, navegue até o diretório do projeto e execute o seguinte comando:

```bash
json-server --watch db.json --port 3001
```
Isso iniciará o servidor JSON-Server na porta 3001. Certifique-se de que a porta 3001 não esteja em uso por outro processo.