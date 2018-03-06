(function () {
    'use strict';
    angular.module('app')
        .service('DeleteUserService', DeleteUserService);
    DeleteUserService.$inject = [
        '$http',
        '$state'
    ];
    
    function DeleteUserService($http, state) {
        
        this.getDataFromService = getDataFromService;
        this.deleteUser         = deleteUser;
       
        
        function getDataFromService() {
            return $http.get('/KioskApp/api/login/get');
        }
        
        function deleteUser(value) {
        	$http({
        	    method: 'DELETE',
        	    url: '/KioskApp/api/login/delete/',
        	    data: {
        	    	'asid': value
        	    },
        	    headers: {
        	        'Content-type': 'application/json;charset=utf-8'
        	    }
        	})
        	state.reload();
        }
        
    }
    
    
})();