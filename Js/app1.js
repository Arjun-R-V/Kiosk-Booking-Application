(function(){
    'use strict';
    
     angular.module('app')
    .config (function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/login');
                $stateProvider
                    .state('/', {
                        url : '/',
                        controller : 'loginController',
                        controllerAs: 'loginCtrl',
                        templateUrl: 'Angular/Template/Login/loginTemplate.html'
                    })
                    .state('login', {
                        url: '/login',
                        controller : 'loginController',
                        controllerAs: 'loginCtrl',
                        templateUrl: 'Angular/Template/Login/loginTemplate.html'
                    })
                    .state('home', {
                        url : '/home',
                        controller : 'homeController',
                        controllerAs: 'homeCtrl',
                        templateUrl : 'Angular/Template/Home.page/Home.html'
                    })
                    .state('register', {
                        url : '/register',
                        controller : 'registerController',
                        controllerAs: 'registerCtrl',
                        templateUrl : 'Angular/Template/Register/registerTemplate.html'
                    })
                    .state('changePassword', {
                        url : '/changePassword',
                        controller : 'changePasswordController',
                        controllerAs: 'changePswdCtrl',
                        templateUrl : 'Angular/Template/Change.password/changePassword.html'
                    })
                    .state('bookedSlot', {
                        url : '/bookedSlot',
                        controller : 'bookedSlotController',
                        controllerAs: 'bookedSlotCtrl',
                        templateUrl : 'Angular/Template/Booked.slots/bookedSlot.html'
                    })
                    .state('deleteUser', {
                        url : '/deleteUser',
                        controller : 'deleteUserController',
                        controllerAs: 'delUserCtrl',
                        templateUrl: 'Angular/Template/Delete.user/delete.user.html'
                    });
        });
})();
