
// Available Cards
cardOptions = ["wordCard", "weatherCard","jokeCard","inspireCard","headlineCard","recipeCard"]
// Checking Local Storage for userInfo
function checkStorage(){
let userInfoJSON = localStorage.getItem('userInfo');

userInfo = {
    user: "me",
    cards: []
};

if (userInfoJSON){
    userInfo = JSON.parse(userInfoJSON);
} else {
   cardOptions.forEach(card =>{
        let thisInfo = {
            name: `${card}`,
            status: 'on'
        };
        userInfo.cards.push(thisInfo);
    });
};
};

$(document).ready(function() {
checkStorage();
});