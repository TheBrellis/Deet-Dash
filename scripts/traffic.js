$(document).ready(function () {

        
    // autocomplete for city search
    function activatePlacesSearch() {
        var inputCity = document.getElementById("city-input")
        var autocomplete;
        autocomplete = new google.maps.places.Autocomplete(inputCity);
        console.log(autocomplete)
        
    }


// to get latitude and longitude for map
    function geoLocate() {
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById('city-input').value;

        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                console.log("lat in" + lat)
                initMap(lat, lng)
            }
        });
        

    };




    $(".cityAuto").on("click", function () {
        let city = $("#city-input").val();
        $("#map").removeClass("d-none");
        geoLocate();
        
       
    });

    // for traffic map
    
    function initMap(lat, lng){

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
                lat:lat,
                lng:lng
            }
            
        });
        console.log(lat)

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
        google.maps.event.trigger(map, 'resize')

    }

 
    
    activatePlacesSearch();
    
    


});

