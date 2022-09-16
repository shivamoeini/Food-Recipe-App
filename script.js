const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById("recipe-close-btn");


// event listeners

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click',getMealRcipe)

// get meal list that matches with the intgredients
function getMealList() {
    let searchInputTex = document.getElementById('search-input').value.trim();
    // console.log(searchInputTex.length);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTex}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                   html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                  <div class="meal-img">
                  <img src="${meal.strMealThumb}" alt="food">
                  </div>
                  <div class="meal-name">
                  <h3>${meal.strMeal}</h3>
                  <a href="#" class="recipe-btn">Get Recipe</a>
                  </div>
                </div>
                
                `
                });
                mealList.classList.remove("notFound")
            }else{
                html="sorry, we didn't find any meal!"
           mealList.classList.add('notFound')
            }
            mealList.innerHTML=html;
        });
}


// get recipe of the meal
function getMealRcipe(e){
    e.preventDefault();
   if(e.target.classList.contains('recipe-btn')){
        let mealItem=e.target.parentElement.parentElement;
        console.log(mealItem);
    }
}