var angular = require('angular');

require('../services/srv1.js');

angular.module('test').controller('testCtrl', ['$scope', 'testSrv', function($scope, testSrv) {
    $scope.test = 'ytu   ta s u';
    $scope.akcja = function() { 
        $scope.test = testSrv.akcja();
    };
}]);
    