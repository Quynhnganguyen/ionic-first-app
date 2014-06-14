angular.module('starter.controllers', [])

.controller('InscriptionCtrl', function($scope, $http) {
	
  
  $scope.user = {
    'nom': null,
    'prenom': null,
    'adresse': null,
    'email': null,
    'password': null
  };
    $scope.inscr_error = '';
    $scope.inscr_success = '';
    
    var url = 'http://localhost/service_myApp/insert_db.php';
    var xhr = createCORSRequest('PUT', url);
    xhr.setRequestHeader(
    'X-Custom-Header', 'value');
    xhr.send();
  $scope.inscrire = function () {
    var headers = {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

             alert('http://localhost/service_myApp/insert_db.php'+ $scope.user);
    return $http({
            type: "POST",
            headers: headers,
            url: 'http://localhost/service_myApp/insert_db.php',
            data:  $scope.user 
    }).success(function (data, status, headers, config) {
        if (data.success == 1 )
            {
                $scope.inscr_success='success';
            }
            else
            {
                $scope.inscr_error='Invalid Infos ';
            }
      })
      .error(function (data, status) {
        $scope.inscr_error='Invalid Infos ';
      });
  };
})

.controller('ConnexionCtrl', function($scope) {
})

.controller('WelcomeCtrl', function($scope) {
});	