$(document).ready(function() {

    function history() {

        var thisDate = moment().format('MM/DD')
        var queryURL = `https://numbersapi.com/${thisDate}/date`
        
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            $("#history").append(response);
        
    });

    
    };
    
    history();

    $("#nextHistory").on("click", () => {
        $("#history").empty();

        history();
    })

});