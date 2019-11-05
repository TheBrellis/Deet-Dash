$(document).ready(function() {

    function headlines(){

        var headURL = "https://api.nytimes.com/svc/topstories/v2/national.json?api-key=F2LxVcqRTKBS9m59EXBAkna9iblwepzv"
// NYT headlines
        $.ajax({
            url: headURL,
            method: "GET"
            
        }).then(function(response) {
            $("#story1").text(response.results[0].title);
            $("#story1").attr("href", response.results[0].url)

            $("#story2").text(response.results[1].title);
            $("#story2").attr("href", response.results[1].url)

            $("#story3").text(response.results[2].title);
            $("#story3").attr("href", response.results[2].url)

            $("#story4").text(response.results[3].title);
            $("#story4").attr("href", response.results[3].url)

            $("#story5").text(response.results[4].title);
            $("#story5").attr("href", response.results[4].url)

            




            // console.log(response);
        })
        
        
    }
    headlines();
})