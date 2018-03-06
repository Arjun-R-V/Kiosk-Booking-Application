(function () {
    'use strict';
    app = angular.module('app', ['ui.router'])
    
    app.controller('assetBooking', AssetBooking);
   
    AssetBooking.$inject = [
       '$state',
       'constant',
       'dropDownValues'];
    
    function AssetBooking (state , constant, dropDownValues) {
        console.log('Console');
        this.assetTypes    = dropDownValues;
        this.bookingtype   = dropDownValues.KIOSK_ASSET_BOOKING;
        this.kioskType     = dropDownValues.NORMAL_ASSET_BOOKING;
        this.min           = 6;
        this.max           = 6;
        
        this.kioskNo = '1';
        
        this.slot1         = constant.slot1;   
        this.slot2         = constant.slot2;   
        this.slot3         = constant.slot3;   
        this.submit3       = submit3;
        this.submit2       = submit2;        
        this.submit        = submit;
        
        function submit() {
            if(this.asid === 581758 && this.password === 'admin') {
                this.showErrorMessage = false; 
            } else {
                this.showErrorMessage = true;
            }
        } 
        
        function submit2() {
            console.log("Kiosk 1 " + this.kioskSlot1);
            console.log("Kiosk 2 " + this.kioskSlot2);
            console.log("Kiosk 3 " + this.kioskSlot3);
        }
        
        function submit3() {
            console.log(this.reason); 
            console.log(this.time.toLocaleTimeString());
        }
    }
})();