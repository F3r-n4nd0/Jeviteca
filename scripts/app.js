angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module( "jeviteca" )
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when('/albumes', "albumes");
        $routeSegmentProvider.when('/bandas', "bandas");
        $routeSegmentProvider.when('/generos', "generos");

        $routeSegmentProvider.segment('albumes', {
            controller: 'albumesCtrl',
            templateUrl: 'views/albumes.html'

        });

        $routeSegmentProvider.segment('bandas', {
            controller: 'bandasCtrl',
            templateUrl: 'views/bandas.html'
        });

        $routeSegmentProvider.segment('generos', {
            controller: 'generosCtrl',
            templateUrl: 'views/generos.html'
        });

        $routeProvider.otherwise({
           redirectTo: '/albumes'
        });

    }]);