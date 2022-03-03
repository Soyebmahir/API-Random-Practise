const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displaySearchResult(data.meals);
        })
}
const displaySearchResult = meals => {
    // console.log(meals)
    console.log(meals.length);

    const searchResultField = document.getElementById('search-result');

    // searchResultField.innerHTML=' ';
    searchResultField.textContent = ' ';




    meals.forEach(meal => {



        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                
                <div onclick="loadMealDetails('${meal.idMeal}')" class="card h-100">
                  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                  </div>
                </div>
              
                `
        searchResultField.appendChild(div);

    });


}

const loadMealDetails = (mealID => {

    // console.log(mealID);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
})


const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
   
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Recipe Tutorial</a>
                    </div>
                
                    `
    mealDetails.appendChild(div);
}