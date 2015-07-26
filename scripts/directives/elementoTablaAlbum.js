angular
    .module('jeviteca')
    .directive("elementoTablaAlbum", function() {
       return {
           restrict: 'AE',
           templateUrl: 'views/elementoTablaAlbum.html',
           replace: true,
           scope: {
               model: '='
           },
           link: function (scope) {
           }
       };
    });