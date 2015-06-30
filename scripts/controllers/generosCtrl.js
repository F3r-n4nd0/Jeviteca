angular
    .module('jeviteca')
    .controller('generosCtrl', ['$scope', 'ApiService', function($scope, ApiService) {

        ApiService.obtenerDatos('data/genres.json')
            .then(
            function(datos) {
                $scope.generos = datos.data;
            },
            function() {
                debugger;
            }
        ) ;

    }]);