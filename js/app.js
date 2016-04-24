var apiTan = "http://open.tan.fr/ewp/tempsattente.json/ANTO2";

$.getJSON( apiTan, function( data ) {
  $.each(data,(function(val, data){
    if (val == 0) {
      $( "#firstBus" ).append( data.temps );
    }else if (val <= 2 && val != 0) {
      $( "#nextBuses" ).append('<li>' + data.temps + '</li>');
    }
  }));
});
