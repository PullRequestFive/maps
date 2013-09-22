var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#frontmap',
      lat: -12.043333,
      lng: -77.028333
  });

  $.getJSON("/spots.json", function(data) {
    $.each( data, function(key, spot) {
      console.log(spot);
      if (spot.long != undefined && spot.lat != undefined) {
        map.addMarker({
          lat: spot.lat,
          lng: spot.long,
          title: spot.title,
          infoWindow: { content: spot.text }
        });
      }
    });

    map.fitZoom();
  });
});
