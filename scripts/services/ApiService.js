/**
 * Created by fernando on 6/28/15.
 */
angular
    .module("jeviteca")
    .service("ApiService", ["$http", "Settings", function( $http, Settings ) {

        this.obtenerDatos = function( ruta ) {
            return $http.get(Settings.urlResources + ruta);
        };

    }]);