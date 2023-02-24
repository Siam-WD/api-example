const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    // console.log(meals);
    // step 1 : need container 
    const mealsContainer = document.getElementById('container');
    
    // seaarch a click korle ager ja chilo sob empty string hobe... mane sob delete hote jabe... er por abar search er item gula notun kore show korbe
    mealsContainer.innerHTML = '';
    
    // sob meals loop kore akta akta kore dekhacche
    meals.forEach(meal => {
        
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
       
        mealsContainer.appendChild(mealDiv);

    });

};

const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    console.log(searchText)
    loadMeals(searchText);
}

// ny default all item show koranor jonne empty string diye call kora hoise
loadMeals('');