$(document).ready(function() {

    function inspireQ() {

    var inspireURL= "https://healthruwords.p.rapidapi.com/v1/quotes/?maxR=1&size=medium";

    $.ajax({
        url: inspireURL,
        headers: {
            "x-rapidapi-host": "healthruwords.p.rapidapi.com",
            "x-rapidapi-key": "39c02f7ea2mshbfe1972ede3663bp1c055djsn2c3c6beebf38"
        },
        method: "GET",
        crossDomain: true

    }).then(function(response) {
        let picURL= response[0].media
        $("#quotePic").attr("src", picURL);
        $("#hideURL").text(picURL)
        
    });

    
    };
    
    inspireQ();

    // copy URL to clipboard
    function copy(){
        var copyURL= $("#hideURL").html();
        var tempElement = $("<input>").val(copyURL).appendTo("body").select()
        document.execCommand("copy");
        tempElement.remove();

    }

    $("#copyURL").on("click", () => {
        
       copy();
    });

    $("#nextQ").on("click", () => {
        inspireQ();
    })
});