# <center> Biblioteca CSS - Lista de Propriedades

Este projeto consiste em uma aplicação de linha de comando desenvolvida em JavaScript, utilizando o ambiente Node.js. Ela permite aos usuários adicionar propriedades CSS por meio do terminal e exibi-las de forma ordenada em formato de tabela.

https://github.com/DeniCosta/biblioteca_css/assets/106042686/5fa6079e-f8b3-4e61-9ad2-13d06c730c38

<p align="center">
<a href="#tecnologias-utilizadas">Tecnologias</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#guia-de-execução">Guia de Execução</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#exemplos-de-interação">Exemplos</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#autor">Autor</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#licença">Licença</a>
</p>

## Tecnologias Utilizadas

A aplicação utiliza as seguintes tecnologias:

- [**JavaScript:**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)A linguagem de programação principal para desenvolver a lógica e funcionalidade da aplicação.
- [**Node.js:**](https://nodejs.org/en/docs) Um ambiente de tempo de execução que permite executar JavaScript no lado do servidor e construir aplicativos de rede escaláveis.
- [**Git**](https://nodejs.org/en/docs) **/** [**Github:**](https://docs.github.com/pt) Para controle de versionamento e colaboração no desenvolvimento do projeto.
- [**Figlet:**](https://www.npmjs.com/package/figlet) Para criar arte em texto estilizado no terminal.
- [**Gradient-string:**](https://www.npmjs.com/package/gradient-string)Para adicionar gradientes coloridos ao texto no terminal.
- [**Inquirer:**](https://www.npmjs.com/package/inquirer)Para criar uma interface interativa de perguntas e respostas no terminal.
- [**Cli-table3:**](https://www.npmjs.com/package/cli-table3) Para gerar uma tabela formatada no terminal.
- [**Chalk:**](https://www.npmjs.com/package/chalk)Para estilizar o texto no terminal com cores.

Essas tecnologias combinadas proporcionam uma experiência visual agradável e interativa.

## Guia de Execução

Aqui está um guia passo a passo para executar o projeto em sua máquina local.

### Pré-requisitos

- [**Node.js:**](https://nodejs.org/) Versão 18.16.0. 
- [**Git:** ](https://git-scm.com/) Para clonar o repositório utilizando o termina Git Bash. 

### Instalação

1. Use o comando: `git clone https://github.com/DeniCosta/biblioteca_css.git` no terminal de sua preferência. Entretanto, o terminal do [git](https://git-scm.com) é fortemente recomendado.<br>
ou<br>
faça o download do arquivo ZIP deste repositório.

2. Abra o repositório clonado no editor de código de sua preferência. [Clique aqui](https://code.visualstudio.com) para fazer o download do VScode, caso ainda não tenha um.

3. Abra o terminal Git, ou similar, e use o comando 'cd' para entrar no diretório do projeto:

```bash
cd caminho/para/o/projeto
```

4. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### Executando a Aplicação

Após instalar as dependências, você pode executar a aplicação usando o seguinte comando:

```bash
npm start
```

### Exemplos de interação
Aqui estão alguns exemplos de como a interação com a aplicação pode ocorrer:

1. Inicie a aplicação
```bash
npm start
```
2. Irá aparecer a seguinte mensagem:

![`Digite uma propriedade de CSS (ou digite 'SAIR' para ver a lista e encerrar):`](./src/utils/inicio.png)

2. Escreva individualmente os nomes das propriedades que deseja inserir, seguido da tecla "Enter":

![`inputs`](./src/utils/inputs_sucesso.png)

3. Ao escrever "SAIR" será exibida a tabela com a lista ordenada das propriedades válidas adicionadas:

![`output sucesso`](./src/utils/resultado_sucesso.png)

### Entradas inválidas
1. Caso sejam adicionadas entradas vazias, duplicadas, ou que contenham caracteres diferentes de a-z e hífen(-), será exibida uma menssagem de erro e solicitará uma nova propriedade:

![`entradas inválidas`](./src/utils/erro.png)

2. Caso não seja inserida nenhuma propriedade válida e seja digitado "SAIR" será exibida a mensagem a seguir e a aplicação será encerrada:

![`lista vazia`](./src/utils/lista_vazia.png)

## Autor

<p align="center">
Desenvolvido com ❤️ por <a href="https://www.linkedin.com/in/-denisecosta-/">Denise Costa</a>
</p>

## Licença

Este projeto está sob a licença MIT - consulte o arquivo LICENSE para mais detalhes.

