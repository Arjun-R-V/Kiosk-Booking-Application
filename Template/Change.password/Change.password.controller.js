(function () {
    'use strict';
    angular.module('app')
        .controller('changePasswordController', ChangePasswordController);
    
    ChangePasswordController.$inject = [
        '$state',
        'LoginService',
        'ChangePasswordService',
        'DeleteUserService'];
    
    function ChangePasswordController(state, LoginService,ChangePasswordService,DeleteUserService) {
        
        
        this.min           = 6;
        this.max           = 6;
        this.asid          = LoginService.asid;
        this.logOut        = logOut;
        this.submitChangePassword     = changePassword;
        
        if(this.asid==undefined)
    	{
    	state.go('login');
    	}
        
        if (LoginService.adminRight == 1) {
            this.adminRight = true;
        } else if (LoginService.adminRight == 2) {
            this.adminRight = false;
        }
        
        function changePassword(changePassword) {
        	DeleteUserService.getDataFromService()
        	.then(resolve.bind(this), reject);

        	function resolve(response) {
        		var userDetails = response.data;
        		for (var i=0; i< response.data.length; i++)
        			{
        			if(response.data[i].asid === this.asid)
        				if(response.data[i].pswd === this.password)
        					ChangePasswordService.changePassword(this.asid,this.newpassword)
        										 .then(resolve.bind(this),reject);
        				else{
        					this.pswdSuccess='false';
                    	}
        			function resolve(response) {
                		if(response.status == 200)
                			{
                			console.log(response.status);
                			this.pswdSuccess='true';
                			this.newpassword= null;
                        	this.password = null;
                        	changePassword.oldPassword.$setPristine();
                        	changePassword.oldPassword.$setUntouched();
                        	changePassword.newpassword.$setPristine();
                        	changePassword.newpassword.$setUntouched();
                			}
                		else{
                			console.log(response.status);
                			this.pswdSuccess='false';
                		}
                	}
                	function reject() {
                		this.pswdSuccess='false';
                	}
                	
        			}
        		
        	}

        	function reject() {
        		console.log('Error');
        	}
        }
        function logOut() {
            LoginService.errorLogin = 'true';
            LoginService.logout = 'true';
            state.go('login');
        }
        if (LoginService.errorLogin == 'true') {
            state.go('login');
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