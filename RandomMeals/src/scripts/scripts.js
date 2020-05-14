const loadMeals = function() {
  let parent = document.querySelector('.meals');

  if(!parent) {
    return;
  }

  let mealHeroWrapper;
  let mealsHero;
  let mealsCats;
  let mealsCat;
  let mealsCatLinks;
  let mealsCatsWrapper;
  let mealsCatsMeals;
  let mealsDetail;
  let mealLinks;
  let mealBackLinks;
  let catDetail = {};
  let mealDetail = {};

  function selectDom(){
    mealHeroWrapper = parent.querySelector('.meals__hero-wrapper');
    mealsHero = parent.querySelector('.meals__random');
    mealsCats = parent.querySelector('.meals__cats');
    mealsCat = parent.querySelector('.meals__cat');
    mealsCatsMeals = parent.querySelector('.meals__cats.-meals');
    mealsDetail = parent.querySelector('.meals__detail');
    mealsCatsWrapper = parent.querySelector('.meals__cats-wrapper');
  }

  function getMeals() {
    // Fetch API Using Promises (Chaining)
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(resp => resp.json())
      .then(data => renderMeals(data.meals))
      .catch(error => console.log(error));
  }

  function renderMeals(data) {
    mealsHero.innerHTML = `
        <div class="meals__hero" style="background-image:url(${data[0].strMealThumb})">
          <h3 class="meals__hero-title">${data[0].strMeal}</h3>
        </div>
    `;
  }

  function getCat() {

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resp => resp.json())
      .then(data => renderCat(data.categories))
      .catch(error => console.log(error));
  }

  function renderCat(data) {
    mealsCats.innerHTML = data.map(cat => {
      return `
        <div class="meals__cat">
          <div class="meals__cat-inner" style="background-image: url(${cat.strCategoryThumb})">
            <h3 class="meals__cat-title">${cat.strCategory}</h3>
          </div>
          <a data-url="https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat.strCategory}" class="meals__cat-link"><span class="sr-only">${cat.strCategory}</span></a>
        </div>
        `
    }).join('');

    getCatDetails();
  }

  function getCatDetails() {
    mealsCatLinks = parent.querySelectorAll('.meals__cat-link');
    mealsCatLinks.forEach(mealsCatLink => {
      mealsCatLink.addEventListener('click', getEachCat);
    });
  }

  function getEachCat(e) {
    let thisCat = e.target.innerText;
    let thisDataUrl = this.dataset.url;

    mealHeroWrapper.classList.add('hidden');
    mealsCats.classList.add('hidden');
    mealsCats.insertAdjacentHTML('afterend',`<div class="meal-header"><h3 class="page-heading3">${thisCat}</h3> <a id="goBackToAllCats" class="meal-back-link" role="button" title="All Categories">Go to All Categories</a></div>`);

    console.log(catDetail);

    if (catDetail[thisCat]) {
      renderEachCat(catDetail[thisCat]);
      return;
    }

    fetch(thisDataUrl)
      .then(resp => resp.json())
      .then(data => catDetail[thisCat] = data)
      .then(data => renderEachCat(data))
      .catch(error => console.log(error));

    addGoBack();
  }

  function renderEachCat(data) {
    for (let i = 0; i < data.meals.length; i++) {
      mealsCatsMeals.innerHTML += `
      <div class="meals__cat">
        <div class="meals__cat-inner" style="background-image:url(${data.meals[i].strMealThumb})">
          <h3 class="meals__cat-title">${data.meals[i].strMeal}</h3>
        </div>
        <a data-url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}" class="meals__cat-link"><span class="sr-only">${data.meals[i].strMeal}</span></a>
      </div> `;
    }

    getMealDetails();
  }

  function getMealDetails() {
    mealLinks = parent.querySelectorAll('.-meals .meals__cat-link');
    mealLinks.forEach(mealLink => {
      mealLink.addEventListener('click', getEachMeal);
    })
  }

  function getEachMeal(e) {
    let thisMeal = e.target.innerText;
    let thisDataUrl = this.dataset.url;

    mealsCatsMeals.classList.add('hidden');
    mealsCatsMeals.insertAdjacentHTML('afterend',`<div class="meals-details__data -inline"><h4 class="meals-details__subtitle">Meal</h4><span>${thisMeal}</span></div>`);
    console.log(mealDetail);

    if(mealDetail[thisMeal]) {
      renderEachMeal(mealDetail[thisMeal]);
      return;
    }

    fetch(thisDataUrl)
      .then(resp => resp.json())
      .then(data => renderEachMeal(data))
      .catch(error => console.log(error));
  }

  function renderEachMeal(data) {
    //for(let i = 0; i < data.meals[0].strIngredient)
    console.log(data);
    if(data.meals[0].strTags!= null) {
      mealsDetail.innerHTML += `
      <div class="meals-details__data -inline">
        <h4 class="meals-details__subtitle">Tags:</h4>
        <span>${data.meals[0].strTags}</span>
      </div>
      `;
    }
    mealsDetail.innerHTML += `
      <div class="meals-details__data">
        <div class="meals-detail__photo" style="background-image:url(${data.meals[0].strMealThumb});"></div>
      </div>
      <div class="meals-details__data -inline">
        <h4 class="meals-details__subtitle">Dish Area:</h4>
        <span>${data.meals[0].strArea}</span>
      </div>
      `;
    mealsDetail.innerHTML += `
      <div class="meals-details__data">
        <h4 class="meals-details__subtitle">Ingredients</h4>
        <ul class="meals-details__list-items">
    `;

    Object.keys(data.meals[0]).forEach(function(key) {
      if (key.startsWith('strIngredient')) {
        if(data.meals[0][key] != '') {
          mealsDetail.innerHTML += `
            <li>${data.meals[0][key]}</li>
          `;
        }
      }
    })

    //mealsDetail.innerHTML += `</ul></div>`;

    mealsDetail.innerHTML += `
    <div class="meals-details__data">
      <h4 class="meals-details__subtitle">Instructions</h4>
      <p class="meals-details__desc">${data.meals[0].strInstructions}</p>
    </div>
    `;
    mealsDetail.innerHTML += `
    <div class="meals-details__data">
      <h4 class="meals-details__subtitle">Measures</h4>
      <ul class="meals-details__measures">
        <li>${data.meals[0].strMeasure1}</li>
        <li>${data.meals[0].strMeasure2}</li>
        <li>${data.meals[0].strMeasure3}</li>
        <li>${data.meals[0].strMeasure4}</li>
        <li>${data.meals[0].strMeasure5}</li>
        <li>${data.meals[0].strMeasure6}</li>
        <li>${data.meals[0].strMeasure7}</li>
        <li>${data.meals[0].strMeasure8}</li>
        <li>${data.meals[0].strMeasure9}</li>
      </ul>
    </div>
    `;
  }

  function addGoBack() {
    mealBackLinks = parent.querySelectorAll('.meal-back-link');
    mealBackLinks.forEach(mealBackLink => mealBackLink.addEventListener('click', goBack));
  }

  function goBack(e) {
    e.parentDefault;
    mealsCats.classList.remove('hidden');
    parent.querySelector('.meal-header').remove();
    console.log('click');
  }

  function init() {
    selectDom();
    getMeals();
    getCat();
  }

  init();

}

window.onload = loadMeals;
