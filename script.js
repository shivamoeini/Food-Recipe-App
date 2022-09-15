const searchBtn=document.getElementById("search-btn");
const mealList=document.getElementById("meal");
const mealDetailsContent=document.querySelector('.meal-details-content');
const recipeCloseBtn=document.getElementById("recipe-close-btn");


// event listeners

searchBtn.addEventListener('click',getMealList);

// get meal list that matches with the intgredients
function getMealList() {
    let searchInputTex=document.getElementById('search-input').value.trim();
    // console.log(searchInputTex.length);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTex}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}