


//geolocation w DarkSky weather API 
function weather() {

  var location = document.getElementById("location");
  var apiKey = '6b419ea4e9378d0f8f98d7419154be75'; //DarkSky Key
  var url = 'https://api.forecast.io/forecast/';



  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Your latitude is ' + latitude + '° <br> Your longitude is ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html('Your current temperature: ' + data.currently.temperature + '° F');
      $('#minutely').html('Your current forecast: ' + data.minutely.summary);

    if (position.coords.latitude > 37) {
        latitudeFeedback.innerHTML = ("You're latitude indicates that you are above the 37th parallel \ In the winter, it's virtually impossible to produce vitamin D \
        from the sun if you live 37 degrees above the equator --north of Atlanta. In these areas, the sun \
        never gets high enough in the sky for its ultraviolet B rays to penetrate the atmosphere, \
        according to Harvard Womens' Health Watch. But summer is a great time to stock up on the nutrient. \
        When the sun's UV-B rays hit the skin, a reaction takes place that enables skin cells to manufacture \
        vitamin D.")
    }
      else if (position.coords.latitude < 37)  { 
        latitudeFeedback.innerHTML = ("You're latitude indicates that you are also close enough to the equator that you can get your regular dose of Vitamin D with regular sun exposure. Take advantage of the sun around midday.")
      }
      else {
        latitudeFeedback.innerHTML = ("Are you still on Earth?")
      }

      //if/else for tempfeedback
  if (data.currently.temperature < 80) {
    tempFeedback.innerHTML = ("It seems it's mild enough to go outside. Remember to take precautions and prevent sunburn and to avoid other MS related symptoms\
     when temparatures are above 80 degrees F. \
    Individuals with MS often report more symptoms at higher temperatures.")
  }

    else if (data.currently.temperature > 80) { 
    tempFeedback.innerHTML = ("The weather is a bit too hot and you may experience negative <br> symptoms if you are spending more than a few minutes outside.")
  }

    else {
    tempFeedback.innerHTML = ("The weather may not be suitable for outdoor activities. Bundle up! Brrrr")

  };
  


  
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}


 //Scroll event for Local Forecast button
 $('#forecast-button').click(function(){
    $('html, body').animate({
        scrollTop: $("#forecast").offset().top
    }, 2000);
});


 //Scroll event for Resources button
 $('#resources-button').click(function(){
  $('html, body').animate({
      scrollTop: $("#resources").offset().top
  }, 2000);
});



      /*var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

  async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"





//Solar forecast for zenith using solcast API 

//const solcast_URL = https: api.solcast.com.au/radiation/forecasts?longitude=30&latitude=-82&api_key=F4qebA-81wVfGJiJYfm_XLKHzSDgG99J&format=json';

//$('#zenith-button').click( 
//function getDataFromApi(searchTerm, callback) {
  
 // }
 // $.getJSON(solcast_URL, zenith, callback)
//});



//function suncast() {
  //var location = document.getElementById("location");
  //var apiKey = 'F4qebA-81wVfGJiJYfm_XLKHzSDgG99J'; //solcast API key
  //var url = 'https://api.solcast.com.au/radiation/forecasts?longitude=30&latitude=-82&api_key=F4qebA-81wVfGJiJYfm_XLKHzSDgG99J&format=json';
  //var data = 'zenith'

//$("#zenith-button").click(function() {
 // $.getJSON( url, function(data, status){
   // alert('zenith:' + apikey + data + "?callback=?" + status);
   // $('#zenith').html('Your current solar zenith: ' + data.zenith);
  //});
//});

//} */


weather();


