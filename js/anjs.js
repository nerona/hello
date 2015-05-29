/**
 * Created by yaxin on 2015/5/29.
 */
var app = angular.module("app1",[]);
app.controller("personController",function($scope){
    $scope.NAME = {
        fName: "lin",
        lName: "df",
        fullName: function(){
            var x;
            x = $scope.NAME;
            return x.lName + x.fName;
        }
    };
    $scope.N = [
        {n:'Jani',c:'Norway'},
        {n:'Hege',c:'Sweden'},
        {n:'Kai', c:'denmark'}
    ];
    $scope.mySwitch = true;
    $scope.count = 0;
    $scope.myVar = false;
    $scope.a = 4;
    $scope.b = 5;
    $scope.u = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
    $scope.toggle = function (){
        $scope.myVar = !$scope.myVar;
    };
    $scope.full = function () {
        var x;
        x = $scope.NAME;
        return x.fName + x.lName;
    }
    $scope.reset = function() {
        $scope.user = angular.copy($scope.NAME);
    };
    $scope.reset();
});
app.controller("userController",function($scope){
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = [
        {id:1, fName:'Hege',  lName:"Pege" },
        {id:2, fName:'Kim',   lName:"Pim" },
        {id:3, fName:'Sal',   lName:"Smith" },
        {id:4, fName:'Jack',  lName:"Jones" },
        {id:5, fName:'John',  lName:"Doe" },
        {id:6, fName:'Peter', lName:"Pan" }
    ];
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;

    $scope.editUser = function(id) {
        if (id == 'new') {
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
        } else {
            $scope.edit = false;
            $scope.fName = $scope.users[id-1].fName;
            $scope.lName = $scope.users[id-1].lName;
        }
    };

    $scope.$watch('passw1',function() {$scope.test();});
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});

    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
            !$scope.lName.length ||
            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
});

var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl",function($scope){
    $scope.message = '';
    $scope.save = function(){
        $scope.message = '';
    };
    $scope.clear = function() {
        $scope.message = "";
    }
    $scope.left = function(){
        return 100 - $scope.message.length;
    };
});