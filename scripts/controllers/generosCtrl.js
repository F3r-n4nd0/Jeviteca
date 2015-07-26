angular
    .module('jeviteca')
    .controller('generosCtrl', ['$scope', 'Generos', function($scope, Generos) {
        $scope.generos = Generos.data;
    }]);