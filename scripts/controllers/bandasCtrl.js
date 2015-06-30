angular
    .module('jeviteca')
    .controller('bandasCtrl', ['$scope', 'ApiService', function($scope, ApiService) {

        ApiService.obtenerDatos('data/bands.json')
            .then(
            function(datos) {
                $scope.bandas = datos.data;
            },
            function() {
                debugger;
            }
        ) ;

    }]);