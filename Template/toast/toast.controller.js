(function () {
    'use strict';
    
    angular.module('Toast')
        .controller('ToastController', ToastController);
    
    function ToastController() {
        this.message = '';
        this.showToastMessage = showToastMessage;
        this.closeToastMessage = closeToastMessage;
        
        function showToastMessage() {
            return true;
        }
        
        function closeToastMessage() {
            return false;
        }
    }
}());