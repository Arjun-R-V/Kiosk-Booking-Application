(function () {
    'use strict';
    angular.module('app')
        .service('ChangePasswordService', ChangePasswordService);
    ChangePasswordService.$inject = [
        '$http',
        '$state',
        '$timeout'
    ];
    
    function ChangePasswordService($http, state,timeout) {
    	this.changePassword = changePassword;   
        function changePassword (asid,newpswd) {
        	return $http({
        	    method: 'POST',
        	    url: '/KioskApp/api/login/changePassword/',
        	    data: {
        	    	'asid': asid,
        	    	'pswd': newpswd
        	    },
        	    headers: {
        	        'Content-type': 'application/json;charset=utf-8'
        	    }
        	});
//        	state.reload();
        }
    }
    
    
})();