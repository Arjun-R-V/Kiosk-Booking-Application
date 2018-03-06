(function () {
    'use strict';
    var dropDownValues = {
        KIOSK_ASSET_BOOKING     : 'KIOSK_ASSET_BOOKING',
        CONFERENCE_ROOM         : 'CONFERENCE_ROOM',
        NORMAL_ASSET_BOOKING    : 'NORMAL_ASSET_BOOKING',
        SPECIAL_ASSET_BOOKING   : 'SPECIAL_ASSET_BOOKING',
        KIOSK1                  : 'KIOSK1',
        KIOSK2                  : 'KIOSK2',
        KIOSK3                  : 'KIOSK3',
        yes						: 'yes',
        no						: 'no'
    };
    
    var time = {
        slot1  : [{from :'09:00 hrs' , to:'09:30 hrs'},
                  {from :'09:30 hrs' , to:'10:00 hrs'},
                  {from :'10:00 hrs' , to:'10:30 hrs'},
                  {from :'10:30 hrs' , to:'11:00 hrs'},
                  {from :'11:00 hrs' , to:'11:30 hrs'},
                  {from :'11:30 hrs' , to:'12:00 hrs'},
                  {from :'12:00 hrs' , to:'12:30 hrs'},
                  {from :'12:30 hrs' , to:'13:00 hrs'},
                  {from :'13:00 hrs' , to:'13:30 hrs'}],
                
        slot2  : [{from :'13:30 hrs' , to:'14:00 hrs'},
                  {from :'14:00 hrs' , to:'14:30 hrs'},
                  {from :'14:30 hrs' , to:'15:00 hrs'},
                  {from :'15:00 hrs' , to:'15:30 hrs'},
                  {from :'15:30 hrs' , to:'16:00 hrs'},
                  {from :'16:00 hrs' , to:'16:30 hrs'},
                  {from :'16:30 hrs' , to:'17:00 hrs'},
                  {from :'17:00 hrs' , to:'17:30 hrs'},
                  {from :'17:30 hrs' , to:'18:00 hrs'}],
        
        slot3  : [{from :'18:00 hrs' , to:'18:30 hrs'},
                  {from :'18:30 hrs' , to:'19:00 hrs'},
                  {from :'19:00 hrs' , to:'19:30 hrs'},
                  {from :'19:30 hrs' , to:'20:00 hrs'},
                  {from :'20:00 hrs' , to:'20:30 hrs'},
                  {from :'20:30 hrs' , to:'21:00 hrs'}],
        
        slot4  : [{from :'11:30 hrs' , to:'12:00 hrs'},
                  {from :'12:00 hrs' , to:'12:30 hrs'},
                  {from :'12:30 hrs' , to:'13:00 hrs'},
                  {from :'13:00 hrs' , to:'13:30 hrs'}]
    };
    
    angular.module('app')
        .constant('dropDownValues', dropDownValues)
        .constant('time', time);


})();