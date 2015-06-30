angular
    .module('jeviteca')
    .controller("albumesCtrl", ["$scope", 'ApiService', function( $scope, ApiService ) {

        //$scope.albumes = $filter( "orderBy" )( albumes.data, "original_name" );

        ApiService.obtenerDatos('data/albums.json')
            .then(
            function(datos) {
                $scope.albumes = datos.data;
            },
            function() {
                debugger;
            }
        ) ;

    }]);