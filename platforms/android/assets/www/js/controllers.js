angular.module('starter.controllers', [])

.controller('InscriptionCtrl', function($scope, $http, Inscription) {
  $scope.user = null;
  $scope.users = [];

  Inscription.all().then(function(users){
    $scope.users = users;
  });

  Inscription.getByEmail('').then(function(user){
    $scope.user = user;
  });

    $scope.inscr_error = '';
    $scope.inscr_success = '';
 
  $scope.inscrire = function () {
    Inscription.insertUser($scope.user).then(function(result){
      alert(result);
    });
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http({
        url: 'http://localhost/service_myApp/insert_db.php',
        method: "POST",
        data:  $scope.user
    }).then(function(response) {
            // success
            alert(response.message);
        }, 
        function(response) { // optional
            // failed
            alert(response.message);
        }
    );
   };
})

.controller('ConnexionCtrl', function($scope) {
})

.controller('WelcomeCtrl', function($scope) {
});	