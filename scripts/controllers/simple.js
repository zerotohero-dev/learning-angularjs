'use strict';

var module = angular.module('app', []);

module.controller(
    'SimpleController',
    function SimpleController($scope) {
        $scope.customers = [
            {name: 'John', city: 'Alabama'},
            {name: 'Jack', city: 'Paris'},
            {name: 'April', city: 'Arkansas'},
            {name: 'Linus', city: 'London'}
        ];

        $scope.addCustomer = function() {
            $scope.customers.push({
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            })
        };
    }
);

/*
You define a route,
route has a controller, and a view,
and the controller can load data from factories, services, and things.
 */
