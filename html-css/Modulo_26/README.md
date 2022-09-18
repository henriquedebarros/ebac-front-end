# Módulo 25

Projeto utilizando Framework Webpack com servidor ao vivo

## Instalação

Como o node instalado, acessar o diretório do projeto e rodar.

```
npm install
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