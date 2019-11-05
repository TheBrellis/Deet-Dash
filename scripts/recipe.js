$(document).ready(function () {

    function recipe() {

        var recipeURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1"

        $.ajax({
            url: recipeURL,
            headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "62803d4944msh16156014a00b865p1d30d2jsn64210479db9c"
            },
            method: "GET",
            crossDomain: true

        }).then(function (response) {

            $("#recipeTitle").text(response.recipes[0].title)
            $("#recipePic").attr("src", response.recipes[0].image);
            $("#recipeLink").attr("href", response.recipes[0].sourceUrl);

            // console.log(response);

        });

    };

    recipe();

    $("#nextRecipe").on("click", () => {
        recipe();
    })
});