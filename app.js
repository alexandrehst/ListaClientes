(function(){
	var app = angular.module('ListaClientes', []);
	
	app.controller('ClientesController', ['$scope', function($scope) {	
		this.clientes = bancoDeDados; // Conecte 
		
		$scope.excluiCliente = function(cliente){
			clientes = bancoDeDados;
		
			clientes.splice(cliente,1); 
		}
	}]);
	
	app.controller('ClientesFormController', ['$scope', function($scope) {	
		$scope.clientes = bancoDeDados;
		
		$scope.adiciona = function() {
			
			var pos = proximaPosicao($scope.clientes);
			
			$scope.clientes.push( {nome: $scope.nome,
							   localizacao: $scope.localizacao,
							   pedidos:$scope.pedidos} );
							   
		   $scope.nome = '';
		   $scope.localizacao='';
		   $scope.pedidos='';
							   
		}
		
		// Essa função navega no array e pega a maior pos
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
		
	}]);
	
	// Array que simula o Banco de dados
	var bancoDeDados = [
		{
			pos: 1,
			nome: 'Antonio Costa',
			localizacao: 'Bahia',
			pedidos: 10
		},
		{
			pos: 2,
			nome: 'Zé Pereira Peixoto',
			localizacao: 'Ceará',
			pedidos: 11
		},
		{
			pos: 3,
			nome: 'Cremilda Bastos',
			localizacao: 'Rio Grande do Sul',
			pedidos: 4
		},
		{
			pos: 4,
			nome: 'Igor Ignácio Igino',
			localizacao: 'Piauí',
			pedidos: 7
		}
	]
	
})();



