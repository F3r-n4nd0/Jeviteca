angular.
    module("jeviteca").
    filter("listInstruments", function()  {
     return function(collection) {
        return "Instrumentos:" + collection.join(",");
     };
});