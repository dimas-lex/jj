  var app = angular.module("jjApp", []);
  app.controller("mainController", ["$scope",
      function($scope) {      }
  ]);

  var body = document.getElementsByTagName('body')[0];

  setTimeout(function() {
      body.setAttribute('ng-app', 'jjApp');
      angular.bootstrap(body, ['ng', 'jjApp']);
  }, 2000);