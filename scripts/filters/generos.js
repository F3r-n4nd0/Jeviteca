angular.
    module("jeviteca").
    filter("listBandsDetail", function()  {
        return function(collection) {
            var bands = Array();
            angular.forEach(collection, function(item) {
                debugger;
                bands.push(item.name);

            });
            return bands;
        };
    });