app.controller('appcontroller', function ($scope, $http) {
    $http.get("http://localhost:4000/logs/").then(function (response) {
        $scope.logs = response.data;
        //console.log($scope.logs);
    });
    $scope.totales = function () {
        console.log("u");

        let users = [];
        if ($scope.logs) {
            $scope.logs.forEach(log => {
                let nombre = log.name
                let cantidad = Number.parseInt(log.amount);
                let index = users.findIndex(u => u.name === log.name);
                if (index >= 0) {
                    users[index].amount += cantidad
                } else {
                    users.push(log);
                }
            });
        }
        return users;
    }
    $scope.retirar = function () {
        $http.post("http://localhost:4000/logs/", {
            name: $scope.name,
            amount: $scope.amount * -1
        }).then(function (response) {
            console.log(response);
        });
    };
    $scope.depositar = function () {
        $http.post("http://localhost:4000/logs/", {
            name: $scope.name,
            amount: $scope.amount
        }).then(function (response) {
            console.log(response);
        });
    };
    $scope.registrar = function () {
        $http.post("http://localhost:4000/people/", {
            name: $scope.name
        }).then(function (response) {
            console.log(response);
        });
        $http.post("http://localhost:4000/logs/", {
            name: $scope.name,
            amount: $scope.amount
        }).then(function (response) {
            console.log(response);
        });                   
    };

});