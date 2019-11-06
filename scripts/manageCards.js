$(document).ready(function() {


function toggleCards() {
// identify elements in drop down
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");

//Click Events for Card elements in Modal
$(cards).on("click",function(event){
    event.preventDefault();
if ($(this).data("status") === "on"){
//Turning card off
    $(this).addClass("text-dark bg-light");
    $(this).data("status","off");   
} else {
// Turning card on
    $(this).removeClass("text-dark bg-light");
    $(this).data("status","on");
// Updating Elements in Object
}
// Loop through the children of $('#manage-buttons')
// set the index value in the object equal to the data-status of the child. 

})
}
// Click Event for Save Button in Modal
function setCards() {
    if ($(this).data("card") === "word"){
        $('#wordCard').addClass('d-none');
    }
}

toggleCards();
setCards();
});

