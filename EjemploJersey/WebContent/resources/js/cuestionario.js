/**
 * @author: Leydy Johanna Arenas M.
 */

var cuestionario = angular.module('modCuestionario',[]);

cuestionario.controller('contCuestionario', 
		function($scope){
	//Listado de preguntas con sus respectivas respuestas que 
	//serán cargadas dinámicamente el HTML.
	$scope.preguntas = [{
		id: 1,
		texto: 'Pregunta 1',
		respuestaValida: 1,
		respuesta: null,
		estado: '',
		respuestas: [{id: 1, texto: 'Respuesta 1.1'},
		            {id: 2, texto: 'Respuesta 1.2'},
		            {id: 3, texto: 'Respuesta 1.3'}]
	},{
		id: 2,
		texto: 'Pregunta 2',
		respuestaValida: 2,
		respuesta: null,
		estado: '',
		respuestas: [{id: 1, texto: 'Respuesta 2.1'},
		            {id: 2, texto: 'Respuesta 2.2'},
		            {id: 3, texto: 'Respuesta 2.3'}]
	},{
		id: 3,
		texto: 'Pregunta 3',
		respuestaValida: 3,
		respuesta: null,
		estado: '',
		respuestas: [{id: 1, texto: 'Respuesta 3.1'},
		            {id: 2, texto: 'Respuesta 3.2'},
		            {id: 3, texto: 'Respuesta 3.3'}]
	}];
	
	$scope.respuestasCorrectas = 0;
	$scope.totalCorrectas;
	$scope.totalPreguntas;
	$scope.estadoUsuario = '';
	$scope.respuestaAcertadas = []; //arreglo que indica las respuestas acertadas
	$scope.HazAcertado = '';
	$scope.de = '';
	
	//Valida una pregunta en función de la respuesta del usuario. 
	$scope.validar = function(pregunta){
		if(pregunta.respuestaValida == pregunta.respuesta){
			$scope.respuestasCorrectas++; 
				$scope.respuestaAcertadas[pregunta.id-1]=1; //le lleva al arreglo 1 si la respuesta es correcta
		}else{
			if(pregunta.estado == 'ok' && 
					$scope.respuestasCorrectas > 0)
				$scope.respuestasCorrectas--;
			$scope.respuestaAcertadas[pregunta.id-1]=0; //le lleva al arreglo 0 si la respuesta es incorrecta
			
		}
		
		
	};
	

	function estadoUsuario(){
		var total = $scope.respuestasCorrectas/$scope.preguntas.length;
		
		if(total == 0){
			$scope.estadoUsuario = 'looser';
		}else if(total == 1){
			$scope.estadoUsuario = 'guru';
		}else{
			$scope.estadoUsuario = 'poor';
		}
	}
	
	
	//se llama luego de dar click en el boton
	$scope.enviar = function(){
		estadoUsuario(); //llama a la funcion estadoUsuario
		
		$scope.totalCorrectas = $scope.respuestasCorrectas;
		$scope.totalPreguntas = $scope.preguntas.length;
		
		$scope.HazAcertado = 'Haz acertado ';
		$scope.de = 'de';
		
		//cambia el estado de acuerdo a las respuestas acertadas
		for (var i = 0; i < $scope.respuestaAcertadas.length; i++) {
			if ($scope.respuestaAcertadas[i]==1) {
			
				$scope.preguntas[i].estado = 'ok';
			}else{
				
				$scope.preguntas[i].estado = 'error';
			}
			
		}
		
	}
	
	
});