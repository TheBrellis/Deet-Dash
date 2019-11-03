$(document).ready(function() {


function toggleCards() {
// identify elements in drop down
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");

$(cards).on("click",function(event){
    event.preventDefault();
    if ($(this).data("status") === "on"){
        $(this).addClass("text-muted bg-light");
        $(this).data("status","off");
    } else {
        $(this).removeClass("text-muted bg-light");
        $(this).data("status","on");
    }
})
}
toggleCards();
});