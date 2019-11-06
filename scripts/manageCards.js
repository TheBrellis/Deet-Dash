$(document).ready(function() {

userInfo = {
    user: "me",
    [{
        name: "wordCard",
        status: "on"
    },
    {
        name: "weatherCard",
        status: "on"
    },
    {
        name: "jokeCard",
        status: "on"
    },
    {
        name: "inspireCard",
        status: "on"
    },
    {
        name: "headlineCard",
        status: "on"
    },
    {
        name: "recipeCard",
        status: "on"
    }
    ]
};

function toggleCards() {
// identify elements in drop down
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");

$(cards).on("click",function(event){
    event.preventDefault();


if ($(this).data("status") === "on"){
//Turning card off
    $(this).addClass("text-dark bg-light");
    $(this).data("status","off");
//Toggling card on page
    if ($(this).data("card") === "word"){
        $('#wordCard').addClass('d-none');
    }

} else {
// Turning card on
    $(this).removeClass("text-dark bg-light");
    $(this).data("status","on");
// Toggling card on page

}  


})
}
toggleCards();
});