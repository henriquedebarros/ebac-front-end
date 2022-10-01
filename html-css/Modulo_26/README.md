# Módulo 26

Projeto utilizando Framework Webpack com servidor ao vivo

## Instalação

Como o node instalado, acessar o diretório do projeto e rodar.

```
npm install
```

As versões dos pacotes para melhor uso do sistema.

```js
"devDependencies": {
    "@babel/core": "^7.15.8",
    "@babel/preset-env": "^7.15.8",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.4.0",
    "file-loader": "^6.2.0",
    "html-loader": "^3.0.0",
    "html-webpack-live-reload-plugin": "^1.0.12",
    "html-webpack-plugin": "^5.4.0",
    "mini-css-extract-plugin": "^2.4.3",
    "sass": "^1.54.9",
    "sass-loader": "^12.2.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.59.1",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.3.1",
    "minimist": ">=1.2.6",
    "json-schema": ">=0.4.0"
```

## Rodando servidor ao vivo

Para contornar alguns problemas ligados ao servidor do webpack, no terminal utilize o comando

```
export NODE_OPTIONS=--openssl-legacy-provider
```

O servidor que auto atualiza a cada alteração no source é acessado pelo comando

```
npm run dev
```

Ele fica disponível no endereço

```
http://localhost:3000/
```

## Geração do diretório de Distribuição

Depois de baixar os módulos necessários, na pasta raiz usar o comando a seguir para contruir o diretório "./dist" para ver o projeto final.

```
npm run build
```

## Acesso a página

A página principal fica localizada em

```
./dist/index.html
```