// factory, service, provider --> they all return data somehow.

angular.module('demoApp', [])
    .factory('simpleFactory', function() {
       var factory = {},
           customers = [];

        factory.getCustomers = function() {return customers;}

        return factory;
    })
    .controller('SimpleController', function($scope, simpleFactory) {
        $scope.customers = simpleFactory.getCustomers();
    });