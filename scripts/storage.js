let userInfo = {
    user: "me",
    cards: []
    };

    function checkStorage() {
        let userInfoJSON = localStorage.getItem('userInfo');

        if (userInfoJSON) {
            userInfo = JSON.parse(userInfoJSON);
        } else {
            cardOptions.forEach(card => {
                let thisInfo = {
                    name: `${card}`,
                    status: 'on'
                };
                userInfo.cards.push(thisInfo);
            });
        };
        
    };


$(document).ready(function () {
    // Available Cards
    cardOptions = ["wordCard", "weatherCard", "jokeCard", "inspireCard", "headlineCard", "recipeCard", "triviaCard", "historyCard", "trafficCard"]

    // Checking Local Storage for userInfo
    

checkStorage();

});