$(function() {
  loadMeals();
})

const loadMeals = function() {
  let parent = document.querySelector('.meals-wrapper');

  if(!parent) {
    return;
  }

  let meals;

  function selectDom(){
    meals = parent.querySelector('.meals');
  }

  function getMeals() {
    $.get({
      url: 'https://www.themealdb.com/api/json/v1/1/random.php',
      success: function(data) {
        renderMeals(data.meals);
       // $('.meals').html(data.idMeal);

       console.log(data.meals);
      }
    }
    )
  }

  function renderMeals(data) {
    $.each(data, function(i, data) {
      //console.log(i);
      $('.meals').append(`
        <li>
          <span>${data.strMeal}</span>
        </li>
      `)
    })
  }

  function init() {
    selectDom();
    getMeals();
  }

  init();

}
