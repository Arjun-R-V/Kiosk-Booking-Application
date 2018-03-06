(function () {
    'use strict';
    angular.module('Toast')
        .directive('aToast', Toast);
    
    function Toast() {
        return {
            restrict: 'E',
            bindToController: true,
            controller: 'ToastController',
            contollerAs: 'ToastCtrl',
            templateUrl: '',
            scope: {}
        }
    }
}());
