angular.module('demoApp', []).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'SimpleController',
            templateUrl: 'partials/view1.html'
        })
        .when('/partial2', {
            controller: 'SimpleController',
            templateUrl: 'partials/view2.html'
        }).
        otherwise({
            redirectTo: '/'
        });
});