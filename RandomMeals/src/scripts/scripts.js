$(function() {
  loadMeals();
})

const loadMeals = function() {
  let parent = document.querySelector('.meals');

  if(!parent) {
    return;
  }

  let mealsRandom;

  function selectDom(){
    mealsRandom = parent.querySelector('.meals__random');
  }

  function getMeals() {
    $.get({
      url: 'https://www.themealdb.com/api/json/v1/1/random.php',
      success: function(data) {
        renderMeals(data.meals);
       console.log(data.meals);
      }
    }
    )
  }

  function renderMeals(data) {
    $.each(data, function(i, data) {
      //console.log(i);
      $('.meals__random').append(`
        <div class="meals__hero" style="background-image:url(${data.strMealThumb})">
          <h3 class="meals__hero-title">${data.strMeal}</h3>
        </div>
      `)
    })
  }

  function init() {
    selectDom();
    getMeals();
  }

  init();

}
