$(document).ready(function() {


function toggleCards() {
// identify elements in drop down
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");

$(cards).on("click",function(event){
    event.preventDefault();


if ($(this).data("status") === "on"){
//Turning card off
    $(this).addClass("text-muted bg-light");
    $(this).data("status","off");
//Toggling card on page
    if ($(this).data("card") === "word"){
        $('#wordCard').addClass('d-none');
    }

    if ($(this).data("card") === "weather"){
        $('#weatherCard').addClass('d-none');
    }

    if ($(this).data("card") === "joke"){
        $('#jokeCard').addClass('d-none');
    }

    if ($(this).data("card") === "inspire"){
        $('#inspireCard').addClass('d-none');
    }

    if ($(this).data("card") === "headline"){
        $('#headlineCard').addClass('d-none');
    }

    if ($(this).data("card") === "recipe"){
        $('#recipeCard').addClass('d-none');
    }


} else {
// Turning card on
    $(this).removeClass("text-muted bg-light");
    $(this).data("status","on");
// Toggling card on page
    if ($(this).data("card") === "word"){
        $('#wordCard').removeClass('d-none');
    }

    if ($(this).data("card") === "weather"){
        $('#weatherCard').removeClass('d-none');
    }

    if ($(this).data("card") === "joke"){
        $('#jokeCard').removeClass('d-none');
    }

    if ($(this).data("card") === "inspire"){
        $('#inspireCard').removeClass('d-none');
    }

    if ($(this).data("card") === "headline"){
        $('#headlineCard').removeClass('d-none');
    }

    if ($(this).data("card") === "recipe"){
        $('#recipeCard').removeClass('d-none');
    }


}  


})
}
toggleCards();
});