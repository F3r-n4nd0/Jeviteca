angular
    .module('jeviteca')
    .controller('bandasCtrl', ['$scope', function($scope) {

        var url = "/jeviteca/resources/data/bands.json";

        $http
            .get(url)
            .then(
            function(datos) {
                $scope.bandas = datos.data.results;
            },
            function() {
                debugger;
            }
        ) ;

    }]);