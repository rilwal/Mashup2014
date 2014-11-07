(function () {
    "use strict";
    var startupApp = angular.module('startupApp', []);
    startupApp.controller('startupCtrl', ['$scope', 
        function ($scope) {
            $scope.test = "hello world";
        }]);
}());