(function () {
    'use strict';
    angular.module('app')
        .controller('deleteUserController', deleteUserController);
   
    deleteUserController.$inject = [
        'LoginService',
        '$state',
        '$http',
        'DeleteUserService'
    ];
    
    function deleteUserController(LoginService, state, $http, DeleteUserService) {
        
        this.logOut        = logOut;
        this.delete1       = DeleteUserService.deleteUser;
        this.asid          = LoginService.asid;
        
        if(this.asid==undefined)
    	{
    	state.go('login');
    	}
        
         if (LoginService.adminRight == 1) {
            this.adminRight = true;
        } else if (LoginService.adminRight == 2) {
            this.adminRight = false;
        }
        
        if (LoginService.errorLogin == 'true') {
            state.go('login');
        }
        function logOut() {
            LoginService.errorLogin = 'true';
            LoginService.logout = 'true';
            state.go('login');
        }
        
//        function deleteUser(){
//        	DeleteUserService.deleteUser(this.asid)
//        					.then(resolve.bind(this), reject);
//        	function resolve(response) {
////                this.delSuccess= 'true';
//        		state.reload();
//            }
//            
//            function reject() {
//            	this.delSuccess= 'true';
//                console.log('Error');
//            }
//        }
        
        DeleteUserService.getDataFromService()
                         .then(resolve.bind(this), reject);
//        $http.get('http://10.155.51.69:8080/LoginForm/get').then(resolve.bind(this), reject);
        
        function resolve(response) {
            this.userDetails = response.data;
        	
        }
        
        function reject() {
            console.log('Error');
        }
//        document.onkeydown = function(){
//      	  switch (event.keyCode){
//      	        case 116 : //F5 button
//      	            event.returnValue = false;
//      	            event.keyCode = 0;
//      	            return false;
//      	        case 82 : //R button
//      	            if (event.ctrlKey){ 
//      	                event.returnValue = false;
//      	                event.keyCode = 0;
//      	                return false;
//      	            }
//      	    }
//      	}
    }
})();