(function(){
	var app = angular.module('ListaClientes', []);
	
	app.controller('ClientesController', function(){
		this.clientes = bancoDeDados; // Conecte 
	});
	
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



