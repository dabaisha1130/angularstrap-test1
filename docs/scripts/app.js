
'use strict';

var myApp = angular.module('myApp', ['mgcrea.ngStrap']);


myApp
  .controller('ModalDemoCtrl', function($scope, $modal) {
    // Show a basic modal from a controller
    var myModal = $modal({title: 'My Title', content: 'My Contenthhhhhhhh', show: true});

    // Pre-fetch an external template populated with a custom scope
    var myOtherModal = $modal({scope: $scope, templateUrl: 'modal/modal.tpl.html', show: false});
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    $scope.showModal = function() {
      console.log("$scope.showModal");
      myOtherModal.$promise.then(myOtherModal.show);
    };
  })

