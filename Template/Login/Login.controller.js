(function () {
    'use strict';
    angular.module('app', ['ui.router', 'Toast'])
        .controller('loginController', LoginController);
   
    LoginController.$inject = [
        '$state',
        'LoginService',
        'dropDownValues',
        '$http'
    ];
    
    
    function LoginController(state, LoginService, dropDownValues, $http) {
        this.min           = 6;
        this.max           = 6;
        this.logout        = LoginService.logout;
        
//        this.errorLogin = 'false';
		LoginService.errorLogin = 'true';
		
        this.submitLogin = submit;
        function submit() {
            LoginService.asid=this.asid;
            $http({
        	    method: 'POST',
        	    url: '/KioskApp/api/login/validate',
        	    data: {
        	    	'asid': this.asid,
        	    	'pswd' : this.password
        	    }, 
        	    headers: {
        	        'Content-type': 'application/json;charset=utf-8'
        	    }
        	}).success(resolve.bind(this),reject);
            function resolve(response, status)
            {
            	if (status === 200)
            	{
            		if(response == "yes"){
            		LoginService.adminRight = 1;
            		state.go('home');
            		LoginService.errorLogin = 'false';
            		}
            		else if(response == "no"){
                		LoginService.adminRight = 2;
                		state.go('home');
                		LoginService.errorLogin = 'false';
                		}
            	}
            	else {
                  this.errorLogin = 'true';
                  LoginService.errorLogin = 'true';
              }
            }
            function reject() {
            	console.log("Error Login Credentials");
            	this.errorLogin = 'true';
                LoginService.errorLogin = 'true';
            }
        }
    }
})();