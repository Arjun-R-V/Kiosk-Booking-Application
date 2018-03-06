(function () {
    'use strict';
    angular.module('app')
        .service('HomeService', HomeService);
    HomeService.$inject = [
        '$http',
        '$state',
    ];
    
    function HomeService($http, state) {
    	
    	this.normalBooking = normalBooking;
    	this.specialBooking = specialBooking;
        this.getNormalTime = normalTime;
        this.normalBookedSlot=normalBookedSlot;
        function normalBooking(asid,kid,from,to) {
        	return $http({
        	    method: 'POST',
        	    url: '/KioskApp/api/normal/addBooking/',
        	    data: {
        	    	'asid': asid,
        	    	'kid' : kid,
        	    	'from1' : from,
        	    	'to1' : to
        	    }, 
        	    headers: {
        	        'Content-type': 'application/json;charset=utf-8'
        	    }
        	});
        }
        function specialBooking(asid,reason,from,to,kid) {
        	$http({
        	    method: 'POST',
        	    url: '/KioskApp/api/special/addSpBooking/',
        	    data: {
        	    	'asid': asid,
        	    	'reason' : reason,
        	    	'from_time' : from,
        	    	'to_time' : to,
        	    	'kid':kid
        	    }, 
        	    headers: {
        	        'Content-type': 'application/json;charset=utf-8'
        	    }
        	})
//        	state.reload();
        	
        }
        function normalTime() {
                return $http.get('/KioskApp/api/normal/getSlots');
        }
        function normalBookedSlot() {
            return $http.get('/KioskApp/api/normal/getBooking');
    }
    }
    
    
})();