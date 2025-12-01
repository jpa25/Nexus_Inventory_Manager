# 🛡️ Nexus Inventory Manager

![Gravando 2025-12-01 114420](https://github.com/user-attachments/assets/5020095d-cc54-479b-9559-7919c763338c)

> Um painel de controlo de inventário estilo RPG, desenvolvido para demonstrar manipulação de DOM, requisições AJAX e filtragem de dados em tempo real.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![Tech](https://img.shields.io/badge/Tech-jQuery%20%7C%20AJAX-blue)

## 🎮 Sobre o Projeto

O **Nexus Inventory Manager** é uma aplicação Front-end que simula o inventário de um jogo. O objetivo do projeto foi aplicar conceitos fundamentais de desenvolvimento web moderno, saindo do estático para o dinâmico.

O sistema consome dados de um ficheiro JSON externo (simulando uma API REST) e popula a interface dinamicamente, permitindo ao utilizador gerir e filtrar os itens sem recarregar a página.

---

## ✨ Funcionalidades (Features)

* **📦 Carregamento Assíncrono (Loot Drop):** Utiliza AJAX para buscar dados de um ficheiro JSON local e preencher a tabela instantaneamente.
* **🔍 Filtro em Tempo Real (Search Engine):** Sistema de busca que filtra os itens da tabela enquanto o utilizador digita (com suporte a *substring matching*).
* **✨ Sistema de Raridade:** Classificação visual dos itens (Comum, Raro, Épico, Lendário).
* **🎨 UI/UX Responsiva:** Interface com tema "Dark Sci-Fi", utilizando Variáveis CSS para fácil manutenção e consistência visual.
* **🗑️ Manipulação de DOM:** Botões interativos para limpar e atualizar a interface sem refresh.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído "raiz" para solidificar os fundamentos:

* **HTML5:** Estrutura semântica.
* **CSS3:** Flexbox, Variáveis (`:root`), e design responsivo.
* **JavaScript (ES6+):** Lógica de programação e manipulação de arrays/objetos.
* **jQuery:** Biblioteca utilizada para simplificar seletores, eventos e chamadas AJAX.
* **JSON:** Estrutura de dados para o "Loot".

---

## 📂 Estrutura do Projeto

A organização das pastas segue o padrão MVC (Model-View-Controller) simplificado:

```text
NEXUS_INVENTORY_MANAGER
└── 📂 src
    ├── 📂 css
    │   └── 📜 styles.css       # Estilização (Skin)
    ├── 📂 data
    │   └── 📜 itens.json       # Base de Dados (Loot)
    ├── 📂 html
    │   └── 📜 index.html       # Interface Principal
    └── 📂 js
        └── 📜 index.js         # Lógica (Engine)
```
![Estrutura do Projeto](./src/img/Captura%20de%20tela%202025-12-01%20114445.png)
## 🚀 Como Rodar o Projeto

> ⚠️ **Atenção:** Como este projeto utiliza **AJAX** para ler arquivos JSON locais, ele precisa de um servidor HTTP para funcionar corretamente (devido às políticas de CORS dos navegadores).

### Pré-requisitos
* Um editor de código (recomendado: **VS Code**).
* Extensão **Live Server** (para VS Code) ou similar.

### Passo a Passo
1. Clone ou baixe este repositório.
2. Abra a pasta do projeto no **VS Code**.
3. Navegue até `src/html/index.html`.
4. Clique com o botão direito e selecione **"Open with Live Server"**.
5. O projeto abrirá no seu navegador padrão (geralmente em `http://127.0.0.1:5500`).

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram abordados os seguintes conceitos:

* Uso de `$.ajax()` e `$.get()` para consumo de dados.
* Manipulação avançada do DOM com **jQuery** (`.append()`, `.empty()`, `.hide()`, `.fadeIn()`).
* Uso de **Template Strings** para injeção de HTML dinâmico.
* Lógica de programação para filtragem de arrays (`indexOf`, `toLowerCase`).
* Organização de arquitetura de pastas Front-end.

---

Developed with 💻 by **João Paulo Melo Amorim**
