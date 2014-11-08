(function () {
    "use strict";
    var startupApp = angular.module('startupApp', []);
    startupApp.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
    startupApp.controller('startupCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.problems = [{'text': 'Businesses want this...'}];
            $scope.p = {'text': ''}
            $scope.active="home";
            $('#navbar >* >* >*').click(function(){
                $scope.active=$(this).attr('data-target');
                $http.get('templates/'+$scope.active+'.html');
            });
            
            $scope.pushProblem = function () {
                $scope.problems.push($scope.p);   
            }
        }]);
}());