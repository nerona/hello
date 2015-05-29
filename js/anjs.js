/**
 * Created by yaxin on 2015/5/29.
 */
function personController($scope){
    $scope.NAME = {
        fName: "lin",
        lName: "df",
        fullName: function(){
            var x;
            x = $scope.NAME;
            return x.lName + x.fName;
        }
    };
    $scope.mySwitch = true;
    $scope.count = 0;
    $scope.full = function () {
        var x;
        x = $scope.NAME;
        return x.fName + x.lName;
    }
}

function nameController($scope){
    $scope.N = [
        {n:'Jani',c:'Norway'},
        {n:'Hege',c:'Sweden'},
        {n:'Kai', c:'denmark'}
    ];
}

function customersController($scope,$http) {
    $http.get("http://www.w3cschool.cc/try/angularjs/data/Customers_JSON.php")
        .success(function(response) {$scope.names = response;});
}