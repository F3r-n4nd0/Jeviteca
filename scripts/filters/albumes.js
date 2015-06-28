angular.
    module("jeviteca")
    .filter("fullTitle", function() {
    return function(title, year) {
        return title + " (" + year + ")";
    };
});