angular
    .module('jeviteca')
    .controller('bandasCtrl', ['$scope', 'Bandas', function($scope, Bandas) {
        $scope.bandas = Bandas.data;
    }]);