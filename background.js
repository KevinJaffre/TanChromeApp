chrome.alarms.onAlarm.addListener(function( alarm ) {
  var apiTan = "http://open.tan.fr/ewp/tempsattente.json/ANTO2";

  $.getJSON( apiTan, function( data ) {
     var nextStop = "";

     console.log(data[0]);
     nextStop = data[0].temps;
     nextStop = nextStop.split(' ');
     nextStop = parseInt(nextStop[0]);


     if(nextStop <= 5) {
       var options = {
         body: 'Prochain bus : ' + nextStop + ' minute(s)',
         icon: 'img/icon.png'
       }

       var n = new Notification('TAN', options);
       setTimeout(n.close.bind(n), 4000);
       clearInterval();
     }

   });

});
