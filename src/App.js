var App = angular.module("App", []);

App.controller("picCtrl", [
  "$scope",
  function ($scope) {
    $scope.pic = "";
    $scope.visi = false;
    $scope.item = "";
    $scope.prev = "";
    $scope.show = function show() {
      $scope.visi = !$scope.visi;

      switch ($scope.item) {
        case "cheese":
          $scope.pic = "cheese.jpg";
          break;
        case "paprika":
          $scope.pic = "paprika.jpg";
          break;
        case "jalapeno":
          $scope.pic = "jalapeno.jpg";
          break;
        case "tomatoes":
          $scope.pic = "tomatoes.jpg";
          break;
        default:
          $scope.pic =
            "//www.gettyimages.co.uk/gi-resources/images/Embed/new/embed2.jpg";
          break;
      }
    };
  },
]);
