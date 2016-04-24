(function () {
  'use strict';
   var alarmName = 'remindme';
   function checkAlarm(callback) {
     chrome.alarms.getAll(function(alarms) {
       var hasAlarm = alarms.some(function(a) {
         return a.name == alarmName;
       });
       var newLabel;
       var newClass;
       if (hasAlarm) {
         newLabel = 'Couper l\'alerte';
         newClass = "btn-alert";
       } else {
         newLabel = 'Prendre le prochain bus';
         newClass = "btn-primary";
       }
       document.getElementById('takeNextBus').innerText = newLabel;
       $('#takeNextBus').toggleClass(newClass);
       if (callback) callback(hasAlarm);
     })
   }
   function createAlarm() {
     chrome.alarms.create(alarmName, {
       delayInMinutes: 1, periodInMinutes: 1});
   }
   function cancelAlarm() {
     chrome.alarms.clear(alarmName);
   }
   function doToggleAlarm() {
     checkAlarm( function(hasAlarm) {
       if (hasAlarm) {
         cancelAlarm();
       } else {
         createAlarm();
       }
       checkAlarm();
     });
   }
  document.getElementById('takeNextBus').addEventListener('click', doToggleAlarm);
  checkAlarm();
})();
