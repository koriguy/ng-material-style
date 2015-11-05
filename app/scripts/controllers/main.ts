/// <reference path="../../../reference.ts" />
'use strict';

class MainController {
  $scope: ng.IScope;
  awesomeThings: string[];
  $mdToast: any;
  showSimpleToast: any;
  showCustomToast: any;
  showActionToast: any;

  /* @ngInject */
  constructor($scope: ng.IScope, $mdToast: any) {
    this.$scope = $scope;

    this.showSimpleToast = function() {
      $mdToast.show(
        $mdToast.simple()
        .content('Simple Toast!')
        .position('top right left')
        .hideDelay(300000)
      );
    };

    this.showCustomToast = function() {
      $mdToast.show({
        controller: 'ToastCtrl',
        templateUrl: 'toast-template.html',
        // parent: $document[0].querySelector('#toastBounds'),
        hideDelay: 6000,
        // position: $scope.getToastPosition()
      });
    };

    this.showActionToast = function() {
      var toast = $mdToast.simple()
        .content('Action Toast!')
        .action('OK')
        .highlightAction(false);
        // .position($scope.getToastPosition());
      $mdToast.show(toast).then(function(response) {
        if (response == 'ok') {
          alert('You clicked \'OK\'.');
        }
      });
    };

    // clickHandler = function(thing: string) {
    //   //We are using controllerAs syntax, scope is used only for events and watches
    //   this.$scope.$emit(`The ${thing} item was clicked!`);
    // };
  }
}

  angular
    .module('ngMaterialStyleAppInternal')
    .controller('MainController', MainController);
