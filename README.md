# Exercício Lista de Clientes

Esta é a aplicação para ser utilizada como exercício de desenvolvimento no Angular.

A solução de cada etapa está em um commit, **mas não olhe antes de tentar!!**

Se precisar de referência, use [a aplicação ToDo](https://github.com/alexandrehst/ToDo)


## Exercício 1

Baixe a aplicação no estado inicial - 1o. commit - e faça o seguinte (se você é desenrolado no Github, faça um fork):

1. Conecte o módulo angular no HTML via `ng-app`.
2. Crie um controlador, que tenha um array de clientes.
3. Conecte o controlador em uma DIV no HTML usando `ng-controller`
4. Use o `ng-repeat` para mostrar os dados

p.s.: Não esqueça de incluir o Angular e o js do módulo no HTML
	
## Exercício 2

1. Crie um controlador para o formulário. Lembre-se de passar o objeto $scope.
2. Faça o *bind* dos inputs com `ng-model`.
3. Cria uma função para incluir e coloque-a no `ng-submit`
4. Faça a inclusão na lista

Os clientes têm um atributo `pos` que marca a posição. Use a função a seguir para pegar a próxima posição:

```
function proximaPosicao(clientes) {
    if (clientes.length === 0) {
        return 1;
    }

    var max = clientes[0].pos;

    for (var i = 1; i < clientes.length; i++) {
        if (clientes[i].pos > max) {
            max = clientes[i].pos;
        }
    }
    return ++max;
}
```

## Exercício 3

1. Crie a função `excluir()` que faça o `splice` do array. Essa função deve estar em qual controlador? Lembre-se de passar o `$scope`
```
$scope.excluiCliente = function(cliente){
	clientes = bancoDeDados;

	clientes.splice(cliente,1); 
}
```

2. Conecte ao botão de exclusão via `ng-click`
3. Ordene por ordem crescente de pedidos