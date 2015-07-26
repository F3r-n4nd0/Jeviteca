angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module( "jeviteca" )
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when('/albumes', "albumes");
        $routeSegmentProvider.when('/bandas', "bandas");
        $routeSegmentProvider.when('/generos', "generos");

        $routeSegmentProvider.segment('albumes', {
            controller: 'albumesCtrl',
            templateUrl: "views/albumes.html",
            resolve: {
                Albumes: ["ApiService", function(ApiService) {
                    return ApiService.obtenerDatos('data/albums.json');
                }]
            }
        });

        $routeSegmentProvider.segment('bandas', {
            controller: 'bandasCtrl',
            templateUrl: 'views/bandas.html',
            resolve: {
                Bandas: ["ApiService", function(ApiService) {
                    return ApiService.obtenerDatos('data/bands.json');
                }]
            }
        });

        $routeSegmentProvider.segment('generos', {
            controller: 'generosCtrl',
            templateUrl: 'views/generos.html',
            resolve: {
                Generos: ["ApiService", function(ApiService) {
                    return ApiService.obtenerDatos('data/genres.json');
                }]
            }
        });

        $routeProvider.otherwise({
           redirectTo: '/albumes'
        });

    }]);