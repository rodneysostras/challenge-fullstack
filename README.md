<h1>
    <img src=".github/assets/img/icon-readme.png" alt="" height="60em" align="left"/>Challenge Verzel
</h1>
<div align="center">
    <img src="https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />
    <!-- <img src="https://img.shields.io/badge/%F0%9F%9A%A7%20EM%20CONTRU%C3%87%C3%83O%20-90%25-brightgreen?style=for-the-badge" /> -->
    <img src="https://shields.io/github/deployments/rodneysostras/challenge-fullstack-verzel/production?style=for-the-badge&logo=appveyor" />
    <img src="https://img.shields.io/website-up-down-green-red/https/challenge-fullstack-verzel.rodneysostras.me?style=for-the-badge"/>
    <img src="https://img.shields.io/github/repo-size/rodneysostras/challenge-fullstack-verzel?style=for-the-badge"/>
    <img src="https://img.shields.io/github/languages/count/rodneysostras/challenge-fullstack-verzel?style=for-the-badge"/>
    <img src="https://img.shields.io/github/issues/rodneysostras/challenge-fullstack-verzel?style=for-the-badge"/>
    <!-- <img src="https://img.shields.io/github/license/rodneysostras/challenge-fullstack-verzel?style=for-the-badge"/> -->
</div>

<br />

<p align="center">
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-requisitos">Requisitos</a> •
    <a href="#-recursos">Recursos</a> •
    <a href="#-como-executar-o-projeto">Como executar</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-autor">Autor</a> •
<!--     <a href="#-creditos">Creditos</a> •  -->
    <a href="#-licença">Licença</a>
</p>

<br />

## 💻 Sobre o projeto

<br />

<!-- <div align="center"><img src="https://cdn.rawgit.com/rodneysostras/rodneysostras/main/assets/img/under-construction.png" alt="previewer" height="300em"/></div> -->

<div align="center">
    <em>
        Sistema de catálogo de aulas por módulo<br />
        <b>DEMO: </b>
        <a href="https://challenge-verzel.rodneysostras.me/">VERCEL</a>
    </em>
</div>

<br />

🏆 Challenge Verzel - Uma aplicação Web desenvolvida em ReactJS e Django sendo um sistema de catálogo de aulas por módulo.

Aplicação foi desenvolvida com back-end em Python + Django funcionando como Rest API para Front-end em Javascript + ReactJS.

Sua base de dados persistente e o MySQL um banco de dados relacional.

<blockquote>
<p dir="auto">Uma challenge realizada para testar meus conhecimentos tendo que comprir os requisitos abaixo.</p>
</blockquote>

> Branch da entrega '[challenge](https://github.com/rodneysostras/challenge-fullstack-verzel/tree/challenge)'

## 🎯 Requisitos

- [ ] Back-end deverá ser uma API Rest
- [ ] Todos os dados devem ser persistidos no bando de dados
- [ ] Home page pública
    - [ ] Exibindo os módulos
    - [ ] Ao selecionar o módulos exibir as aulas deles
- [ ] As páginas de cadastro deve esta seguras e só acessar após login autenticado
- [ ] Todas as requisições privadas precisam de um tokem válido gerado no login
- [ ] Módulos
  - [ ] Devem ter os atributos; ID e Nome
  - [ ] Deverá ter listagem, criação, edição e deleção de registros
  - [ ] Devem contabilizar o total de aulas referente
  - [ ] Devem esta ordenados por ordem alfabética
- [ ] Aulas
  - [ ] Devem ter os atributos; ID, Nome, Módulo e Data que acontecerá a aula
  - [ ] Deverá ter listagem, criação edição e deleção de registros
  - [ ] Devem esta ordenados por ordem alfabética
<br />

## 📦 Recursos

-   [ ] Responsivo.
-   [ ] SEO

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone git@github.com:rodneysostras/challenge-fullstack-verzel.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd challenge-fullstack-verzel
# Instale as dependências front-end
$ cd frontend
$ yarn install
# Instale as dependências back-end
$ cd backend
$ pip install -r requirements.txt
```

> Sobre instalação de dependências e execução da aplicação acesse a respectiva pasta **[BACKEND](https://github.com/rodneysostras/challenge-fullstack-verzel/tree/main/backend)** ou **[FRONTEND](https://github.com/rodneysostras/challenge-fullstack-verzel/tree/main/frontend)** para mais informações


> Na pasta `.devcontainer` possui as configurações para subir o container docker do ambiente de desenvolvimento deste projeto \
> Fique a vontade para usar o docker-composer ou a extensão do vscode `Remote Development` que e o recomendado \
> Após o start do container realize o comando no container `npm install` depois `npm run serve`

## 🛠 Tecnologias

-   **[ReactJS](https://reactjs.org/)** • Framework Javascript open source utilizado para criar interfaces de usuário em paginas web.
-   **[React router dom](https://v5.reactrouter.com/)** • Um componente que possibilita navegação entre componente gerando um roteamento de url.
-   **[Django](https://www.djangoproject.com/)** • Framework gratuito e de código aberto escrito em Python para desenvolvimento web.
-   **[Axios](https://github.com/axios/axios)** • Cliente HTTP leve semelhante à API Fetch nativa do JavaScript.
-   **[Vercel](https://vercel.com/)** • Plataforma voltada para a hospedagem de aplicações.

> Para saber dependências do front-end veja o arquivo [package.json](https://github.com/rodneysostras/challenge-fullstack-verzel/blob/main/frontend/package.json) na pasta `frontend`

## 🦸 Autor

<table align="left">
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/rodneysostras.png" width="150px;" alt="Foto do Rodney Sostras no GitHub"/><br>
        <sub>
          <b>Rodney Sostras</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
<p>
    &nbsp;&nbsp;
    <a href="https://github.com/rodneysostras">
        <img src="https://img.shields.io/badge/rodneysostras-000000?style=for-the-badge&logo=GitHub&logoColor=FFF" />
    </a>
</p>
<p>
    &nbsp;&nbsp;
    <a href="https://linkedin.com/in/rodney-sostras" alt="Linkedin do Rodney Sostras">
        <img src="https://img.shields.io/badge/-rodney--sostras-0077B5?style=for-the-badge&logo=Linkedin&logoColor=FFF"/>
    </a>
</p>
<p>&nbsp;&nbsp;
    <a href="mailto:contact@rodneysostras.me" alt="Email do Rodney Sostras">
        <img src="https://img.shields.io/badge/-contact@rodneysostras.me-D14836?style=for-the-badge&logo=Gmail&logoColor=FFF" />
    </a>
</p>
<p>&nbsp;&nbsp;
    <a href="https://rodneysostras.me/" alt="Web Site do Rodney Sostras">
        <img src="https://img.shields.io/badge/%F0%9F%8C%8E%20RODNEYSOSTRAS.ME%20-191919?style=for-the-badge" />
    </a>
</p>

<br />

<!-- ## 🎨 Creditos -->

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Rodney Sostras 👋🏽 [Entre em contato!](https://www.linkedin.com/in/rodney-sostras/)

<br />

<div align="right"><a href="#">Voltar ao topo ⬆</a></div>
