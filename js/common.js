(function () {
    "use strict";
    var startupApp = angular.module('startupApp', []);
    startupApp.controller('startupCtrl', ['$scope',
        function ($scope) {
            $scope.hello = "hello";
        }]);
}());