# :computer: Desafio 5 - GoStack

## Primeiro projeto com ReactJS

### :rocket: Sobre o desafio

- [x] **Captando erros**

  Adicione um try/catch por volta do código presente na função handleSubmit presente no componente Main e caso um repositório não seja encontrado na API do Github adicione uma borda vermelha por volta do input em que o usuário digitou o nome do repositório.

- [x] **Repositório duplicado**

  Antes de fazer a chamada à API na função handleSubmit faça uma verificação para ver se o repositório não está duplicado, ou seja, se ele ainda não existe no estado de repositories.

- [x] **Filtro de estado**

  Adicione um filtro de estado na listagem de Issues que criamos no detalhe do repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

- [x] **Paginação**

  Adicione paginação nas issues listadas no detalhe do repositório. A API do Github lista no máximo 30 issues por página e você pode controlar o número da página atual por um parâmetro no endereço da requisição:
