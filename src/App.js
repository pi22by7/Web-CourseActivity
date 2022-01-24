"use strict";

angular.module("App", ["ngMaterial"]).controller("picCtrl", [
  "$scope",
  "Menus",
  function display($scope, Global) {
    $scope.global = Global;
    $scope.image = {
      food: "favicon.png",
    };
  },
]);
