(function () {
    'use strict';
    angular.module('app')
        .controller('bookedSlotController', bookedSlotController);
   
    bookedSlotController.$inject = [
        'LoginService',
        '$state',
        '$http',
        'bookedSlotService',
        'DeleteUserService'
    ];
    
    function bookedSlotController(LoginService, state, $http, bookedSlotService , DeleteUserService) {
        
        this.logOut        = logOut;
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
        
        var i,j;
        bookedSlotService.getDataFromService()
                         .then(resolve.bind(this), reject);
        
        function resolve(response) {
        	var booked = [];
        	j=0;
//            this.bookedSlot = response.data;
//            console.log(this.bookedSlot);
            for(i=0;i<response.data.length;i++){
            	if(response.data[i].no_of_req == 2)
            		{
            		booked[j] = response.data[i];
            		j++;
            		}
            	if(response.data[i].no_of_req == 1)
        		{
        		booked[j] = {asid : response.data[i].asid , kid : response.data[i].kid , from1 : response.data[i].from1 , to1 : response.data[i].to1};
        		j++;
        		}
            }
           this.bookedSlot = booked;
        }
        
        
        function reject() {
            console.log('Error');
        }
        
    }
})();