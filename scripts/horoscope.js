$(document).ready(function() {

    function horoscopes() {

        var queryURL = "https://www.horoscopes-and-astrology.com/json"
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            console.log(response)
          }
    });