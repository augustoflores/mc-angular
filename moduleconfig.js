var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/consultar", {
            templateUrl: "consultar.html",
            controller: 'appcontroller'
        })
        .when("/depositar", {
            templateUrl: "depositar.html",
            controller: 'appcontroller'
        })
        .when("/retirar", {
            templateUrl: "retirar.html",
            controller: 'appcontroller'
        })
        .when("/registrar", {
            templateUrl: "registrar.html",
            controller: 'appcontroller'
        });
});