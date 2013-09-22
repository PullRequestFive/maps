var map;
$(document).ready(function(){
  if ($('#map').length > 0) {
    map = new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333
    });
    $('#geocoding_form').submit(function(e){
      e.preventDefault();
      GMaps.geocode({
        address: $('#address').val().trim(),
        callback: function(results, status){
          if (status=='OK'){
            var latlng = results[0].geometry.location;
            map.setCenter(latlng.lat(), latlng.lng());
            map.addMarker({
              lat: latlng.lat(),
              lng: latlng.lng()
            });

            $('#spot_lat').val(latlng.lat());
            $('#spot_long').val(latlng.lng());
          }
        }
      });
    });
  }
});
