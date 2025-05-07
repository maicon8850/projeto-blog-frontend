# 🚀 Projeto Blog Pessoal - Parte 2 (Frontend)

## 1. 📋 Descrição

O **Projeto Blog Pessoal** é um frontend desenvolvido com **Angular** para consumir uma API REST feita em **Java Spring Boot**. A aplicação permite o gerenciamento de **Usuários**, **Postagens** e **Temas**, utilizando autenticação com **JWT** para proteger rotas e garantir a segurança da aplicação.

### 1.1. ✅ Funcionalidades Principais

- 🔐 Autenticação por Usuário e Senha  
- 🔑 Validação de Token JWT  
- 👤 CRUD de Usuários  
- 📝 CRUD de Postagens  
- 🗂️ CRUD de Temas  

---

## 2. 🛠️ Tecnologias

| Item                         | Descrição      |
|-----------------------------|----------------|
| **Servidor**                 | Node.js        |
| **Linguagem de Programação** | TypeScript     |
| **Framework**                | Angular        |
| **Estilização**              | Tailwind CSS   |

---

## 3. 📦 Outras Bibliotecas

| Biblioteca          | Finalidade                   |
|---------------------|------------------------------|
| `@ng-icons`         | Ícones SVG                   |
| `@ngneat/dialog`    | Modais                       |
| `ngx-loading`       | Indicadores de carregamento  |
| `ngx-toastr`        | Alertas/Notificações         |

---

## 4. ✅ Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Angular CLI](https://v17.angular.io/guide/setup-local)

---

## 5. ⚙️ Instalação e Execução

### 5.1. Clonando o Repositório

```bash
git clone https://github.com/maicon8850/projeto-blog-frontend.git
cd projeto-blog-frontend
```
5.2. Instalando as dependências

```
npm install
```
5.3. Executando o projeto
```
ng serve
```
A aplicação estará disponível no endereço:

```
http://localhost:4200
```
---
## 6. 🧩 Estrutura do Projeto

```plaintext
src
    ├── app
        │
        ├── components/       # Componentes reutilizáveis
        ├── models/           # Estrutura de dados da aplicação-
        ├── pages/            # Páginas da aplicação
        ├── services/         # Integração com a API (requisições HTTP)
        └── App           	  # Componente principal da aplicação
  	├── environments		 # Gerenciamento de estado global (ex: autenticação)
```

7. 🔐 Autenticação e Validação de Token JWT
🔄 Fluxo de Autenticação
O usuário realiza o login com e-mail e senha.

A aplicação faz uma requisição para a API, que retorna um token JWT.

O token é armazenado no Environment para uso em futuras requisições autenticadas.

Nas rotas protegidas, o token é validado antes do acesso aos recursos.

🛡️ Controle de Autenticação
Se o token expirar ou for inválido, o usuário será redirecionado para a página de login.

8. 🖼️ Telas da Aplicação
🔐 Página de Login
Permite ao usuário se autenticar com e-mail e senha
Abaixo estão algumas das telas desenvolvidas no frontend do Blog Pessoal:

Página de Login
Permite ao usuário se autenticar com e-mail e senha.
![image](https://github.com/user-attachments/assets/bd7f2fea-276c-4d85-b972-d049c0f4db70)


Página de Cadastro de Usuário
Formulário para criar um novo usuário.

⚠️ Atenção: O campo Foto deve ser preenchido com uma URL válida de imagem (por exemplo: https://example.com/minha-foto.jpg).
![image](https://github.com/user-attachments/assets/867f4d5e-d053-43a8-8113-33b0ad9311bd)


Dashboard de Postagens
Visualização de todas as postagens disponíveis no blog.

![image](https://github.com/user-attachments/assets/5327126a-4ed1-4ba1-b5b8-a99b7f7760cc)

Cadastro de Postagem
Permite criar uma nova postagem vinculando-a a um tema existente.
![image](https://github.com/user-attachments/assets/bf4467e0-e2de-4229-bf18-d49a51d1f8df)

Gerenciamento de Temas
Visualização e cadastro de temas utilizados nas postagens.

![image](https://github.com/user-attachments/assets/f4103c27-246b-4919-aacf-afd533f2cac8)


## 

