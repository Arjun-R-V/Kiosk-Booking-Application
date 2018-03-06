(function () {
    'use strict';
    angular.module('app')
        .controller('homeController', HomeController);
   
    HomeController.$inject = [
        '$state',
        'LoginService',
        'dropDownValues',
        'HomeService',
        'time'];
    
    function HomeController(state, LoginService, dropDownValues,HomeService,time) {
        
        this.assetTypes    = dropDownValues;
        this.bookingtype   = dropDownValues.KIOSK_ASSET_BOOKING;
        this.kioskType     = dropDownValues.NORMAL_ASSET_BOOKING;
//        this.kioskNo       = dropDownValues.KIOSK1;
        this.kioskNoSpecial = dropDownValues.KIOSK1;
        this.min           = 6;
        this.max           = 6;
        this.submitNormal  = submitNormal;
        this.submitSpecial = submitSpecial;
        this.logOut        = logOut;
        this.homeSuccess   = HomeService.homeSuccess;
        this.abc    = abc;
        function abc(value,slot) {
            console.log(slot);
            console.log(value);
            
        }
        var x,y,z=0;
        
        this.asid=LoginService.asid;
        
        
        this.slot1 = time.slot1;
        this.slot3 = time.slot1;
        this.slot2 = time.slot1;
        this.slot4 = time.slot4;
        for(x=0;x<this.slot1.length;x++)
            {
                for(y=0;y<this.slot4.length;y++)
                    {
                            if(this.slot1[x].from == this.slot4[y].from)
                           { 
//                               this.slot1.splice(x,x+1);
                               this.slot1[x].b = 'yes';
                               break;
                            }
                        else{
                            this.slot1[x].b = 'no';
                            continue;
                        }
                        
                        }
            }
          for(x=0;x<this.slot2.length;x++)
            {
                for(y=0;y<this.slot4.length;y++)
                    {
                            if(this.slot2[x].from == this.slot4[y].from)
                           { 
//                               this.slot1.splice(x,x+1);
                               this.slot2[x].b = 'yes';
                               break;
                            }
                        else{
                            this.slot2[x].b = 'no';
                            continue;
                        }
                        
                        }
            }
          for(x=0;x<this.slot3.length;x++)
            {
                for(y=0;y<this.slot4.length;y++)
                    {
                            if(this.slot3[x].from == this.slot4[y].from)
                           { 
//                               this.slot1.splice(x,x+1);
                               this.slot3[x].b = 'yes';
                               break;
                            }
                        else{
                            this.slot3[x].b = 'no';
                            continue;
                        }
                        
                        }
            }
        if (LoginService.adminRight==1) {
            this.adminRight = true;
        } else if (LoginService.adminRight == 2) {
            this.adminRight = false;
        }
        
        function logOut() {
            LoginService.errorLogin = 'true';
            state.go('login');	
        }
        
        function submitNormal() {
        	if(this.kioskNo == "KIOSK1")
        	{ HomeService.normalBooking(LoginService.asid,this.kioskNo,this.kioskSlot1.from_time,this.kioskSlot1.to_time)
              			.then(resolve.bind(this),reject);
//        	state.reload();
        	}
        	else if(this.kioskNo == "KIOSK2")
    			HomeService.normalBooking(LoginService.asid,this.kioskNo,this.kioskSlot2.from_time,this.kioskSlot2.to_time)
        				.then(resolve.bind(this),reject);
        	else if(this.kioskNo == "KIOSK3")
    			HomeService.normalBooking(LoginService.asid,this.kioskNo,this.kioskSlot3.from_time,this.kioskSlot3.to_time)
    						.then(resolve.bind(this),reject);
        		function resolve(response) {
        			if(response.status == 200)
        				{
        				this.homeSuccess=1;
        				}
        			else if (response.status == 201){
        				this.homeSuccess=2;
        			}
        			else{
        				console.log(response.status);
        				this.homeSuccess=3;
        			}
        		}
        		function reject() {
        			this.homeSuccess=3;
        		}        		
        	}
        
        function submitSpecial() {
        	
            this.fromTime = this.time1.toLocaleTimeString('en-US', { hour12: false });
            this.toTime = this.time2.toLocaleTimeString('en-US', { hour12: false });
           
            HomeService.specialBooking(LoginService.asid,this.reason,this.fromTime,this.toTime,this.kioskNoSpecial );
        }
        
        window.onbeforeunload = function(){
        	  return 'Are you sure you want to leave?';
        	};

    }
})();


