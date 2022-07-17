# ebac-front-end


# Curso Front-end
#### EBAC

# GIT
## Conceitos de versionamento
 - Histórico
 - Controle de versão
 - Quem alterou
 - O quê alterou
 - Quando alterou
 - Todos os arquivos
 - Evolução contínua

 Arquivo A  | Versão 1 | Versão 2
 Arquivo B  | Versão 1 | Versão 2

 ## Instalação do Git
https://git-scm.com/

- Windows: https://git-scm.com/download/win
- Linux (apt-get): sudo apt-get install git
- Mac (brew): brew install git

 ## Criar conta no GitHub

 ## Clonar o projeto
 git clone https://github.com/cavalcantemmarcelo/curso-frontend.git

 ## Commits
 Informação de alteração
 - após testado todo seu código
 > git add *
 > git commit -m "mensagem"
 > git push (enviar alterações para o repositório GitHub)
 > git pull (puxar / trazer alterações do GitHub para sua máquina)

## GitFlow
Fluxo do Git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop 
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

> git checkout -b dev (cria uma branch)
> git checkout master (mudar de branch)


### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente

> git merge main 

### Pull Requests
Mescla de branchs no repositório
Permite code review
O respositório resolve os conflitos automaticamente


### configura o GitFlow
> git flow init
> git flow feature start {nome-da-feature}

# Exercício do Algoritmo

## Problema

Um homem precisa atravessar um rio com um barco que possui capacidade apenas para carregar ele mesmo e mais um de seus três pertences, que são: um lobo, uma cabra e um maço de alfafa. Em cada viagem só poderá ir o homem e apenas um de seus pertences. A seguinte regra deverá ser respeitada: o lobo não pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa. Escreva um algoritmo para fazer a travessia dos pertences que estão em uma margem do rio para a outra.

##Solução

1. Início
2. Homem atravessa cabra e deixa na margem 2
3. Homem volta sozinho para margem 1
4. Homem atravessa lobo e deixa na margem 2
5. Homem volta com a cabra para margem 1
6. Homem deixa cabra e atravessa alfafa para margem 2
7. Homem deixa alfafa e volta sozinho para margem 1
8. Homem atravessa com cabra para margem 2
