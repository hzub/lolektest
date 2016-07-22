var angular = require('angular');

angular.module('test').service('testSrv', [function() {
    return {
    	akcja: function() {
    		return 'abc';
    	}
    };
}]);
