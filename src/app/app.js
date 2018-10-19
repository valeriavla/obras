var miApp = angular.module('miApp', ["leaflet-directive"]);
miApp.controller("ctrl", [ "$scope", function($scope) {
}]);
$scope.markers = {
    main: {
        lat: 19.0515,
        lng: -98.1927,
        focus: true,
        message: "This place is in London",
        draggable: true
    }
}

