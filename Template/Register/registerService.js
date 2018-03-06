(function () {
    'use strict';
    angular.module('app')
        .service('registerService', registerService);
    registerService.$inject = [
        '$http'
    ];
    
    function registerService($http) {
    	
    	this.register            = register;
    	
    	function register(asid,name,dob,adminRight,email) {
            return $http.post('/KioskApp/api/login/insert/', {'asid' : asid , 'name' : name , 'dob' : dob , 'adminRight' : adminRight , 'email' : email });
//            	 
//            function resolve(response) {
//            	if(response.status == 200) {
//            		return {
//            			type: true
//            		};
//            		
//            		}
//            	else
//            		this.regSuccess='false';
//            	
//            }
//            function reject() {
//            	this.regSuccess = 'false';
//            	
//            }
//            return {
//            	events : this.register
//            };
        }
    }
})();