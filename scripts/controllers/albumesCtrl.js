angular
    .module('jeviteca')
    .controller("albumesCtrl", ["$scope", 'Albumes', function( $scope, Albumes ) {
        $scope.albumes = Albumes.data;
    }]);