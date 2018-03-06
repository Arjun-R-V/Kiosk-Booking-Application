(function () {
    'use strict';
    angular.module('app')
        .controller('registerController', Register);
   
    Register.$inject = [
       'LoginService',
        '$state',
        'dropDownValues',
        'registerService'];
    
    function Register(LoginService, state,dropDownValues, registerService) {
    	
        this.logOut        = logOut;
//        this.register      =  DeleteUserService.register;
        this.register      = register;
        this.regSuccess    =  registerService.regSuccess;
        this.admin		   = dropDownValues;
        this.adminRightValue = dropDownValues.no;
        this.asid		   = LoginService.asid;
        this.word = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if(this.asid==undefined)  
    	{
    	state.go('login');
    	}
        
     if (LoginService.adminRight ==1) {
            this.adminRight = true;
        } else if (LoginService.adminRight == 2) {
            this.adminRight = false;
        }
        
        function logOut() {
            LoginService.errorLogin = 'true';
            LoginService.logout ='true';
            state.go('login');
        }
        if (LoginService.errorLogin == 'true') {
            state.go('login');
        }
        
        function register(formRegister) {
        	
        	registerService.register(this.asid1,this.name,this.dob,this.adminRightValue,this.email)
        					.then(resolve.bind(this),reject);
        	function resolve(response) {
        		if(response.status == 200)
        			{
        			this.regSuccess='true';
        			this.name = null;
        			this.asid1 = null;
        			this.dob = null;
        			this.email = null;
        			formRegister.name.$setPristine();
        			formRegister.name.$setUntouched();
        			formRegister.asid1.$setPristine();
        			formRegister.asid1.$setUntouched();
        			formRegister.dob.$setPristine();
        			formRegister.dob.$setUntouched();
        			formRegister.email.$setPristine();
        			formRegister.email.$setUntouched();
        			}
        		else{
        			this.regSuccess='false';
        		}
        	}
        	function reject() {
        		this.regSuccess='false';
        	}
        }
        document.onkeydown = function(){
      	  switch (event.keyCode){
      	        case 116 : //F5 button
      	            event.returnValue = false;
      	            event.keyCode = 0;
      	            return false;
      	        case 82 : //R button
      	            if (event.ctrlKey){ 
      	                event.returnValue = false;
      	                event.keyCode = 0;
      	                return false;
      	            }
      	    }
      	}
    }
})();