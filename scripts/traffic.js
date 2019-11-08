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
                
                initMap(lat, lng)
            }
        });
        

    };




    $(".cityAuto").on("click", function () {
        $("#map").removeClass("d-none");
        let city = $("#city-input").val();
        
        geoLocate();
        
       
    });

    // for traffic map
    var map

    function initMap(lat, lng){

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
                lat:lat,
                lng:lng
            }
            
        });
        // console.log(lat)

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
        google.maps.event.trigger(map, 'resize')

    }

 
    
    activatePlacesSearch();
    
    


});

