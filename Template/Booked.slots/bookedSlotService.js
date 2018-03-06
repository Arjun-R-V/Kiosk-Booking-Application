(function () {
    'use strict';
    angular.module('app')
        .service('bookedSlotService', bookedSlotService);
    bookedSlotService.$inject = [
        '$http'
    ];
    
    function bookedSlotService($http) {
        
        this.getDataFromService = getDataFromService;

        function getDataFromService() {
            return $http.get('/KioskApp/api/normal/getBooking');
        }
    }
    
    
})();