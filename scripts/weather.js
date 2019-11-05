$(document).ready(function() {
    var city = "Boston"
    function dailyWeather(){
        
        var currentURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e4c0273e5ea54d9af35c603a4dae870e`
      // for daily weather
        $.ajax({
            url: currentURL,
            method: "GET",
        }).then(function(response) {
           var dayIcon = response.weather[0].icon;
           var dayIconURL = `http://openweathermap.org/img/wn/${dayIcon}.png`
            $("#city").text(response.name);
            $("#weatherIcon").attr("src", dayIconURL);
            $("#temp").text(response.main.temp + "\xB0F");
            $("#humidity").text("Humidity: " + response.main.humidity + "%");
            $("#wind").text("Wind Speed: " + response.wind.speed + "MPH");
            $("#hiLo").text("Hi: " + response.main.temp_max + " / Lo: " + response.main.temp_min)
    
        // console.log(response);
        // console.log(currentURL);
        });
        
    }
    dailyWeather();

    // drop down box for new city
    $("#citySearch").on("click", () => {
        city = $("#newCity").val();
        dailyWeather();
        $("#newCity").val("")

        // console.log(city)
    })
})