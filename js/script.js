import {
  fadeOutLoadingScreen,
  setupSideBar,
  openSideBar,
  closeSideBar,
  displayMeals,
  displayInstructions,
  displayCategories,
  displayFilteredMeals,
  displayAreas,
  displayIngredients,
} from './domFunctions.js';

import {
  getMeals,
  getMealById,
  getMealsByName,
  getMealsByFirstLetter,
  getCategories,
  getMealsByCategory,
  getAreas,
  getMealsByArea,
  getIngredients,
  getMealsByIngredient,
} from './dataFunctions.js';

import { contact } from './contact.js';

// on Load Page
$(function () {
  // Loading Screen
  fadeOutLoadingScreen();

  const sideBar = $('.sideBar');
  const innerBar = $('.innerBar');
  const navLinks = $('.navLinks li');
  const dataContainer = $('#mealsData');
  const searchContainer = $('#searchBox');

  //  Sidebar
  let innerBarWidth = setupSideBar(sideBar, innerBar);

  $('.openCloseBtn').click(function () {
    if (sideBar.css('left') === '0px') {
      closeSideBar(sideBar, navLinks, innerBarWidth);
    } else {
      openSideBar(sideBar, navLinks);
    }
  });

  // Load meals
  async function loadMeals() {
    const meals = await getMeals();
    displayMeals(meals, dataContainer);
  }
  loadMeals();

  // Load Meal
  dataContainer.on('click', '.item .overlay h2', async function () {
    const mealId = $(this).data('id');
    const meal = await getMealById(mealId);
    displayInstructions(meal, dataContainer);
  });

  // Show Categories
  $('#categoriesBtn').on('click', async function () {
    searchContainer.html('');
    const categories = await getCategories();
    displayCategories(categories, dataContainer);
  });

  dataContainer.on('click', '.item .overlay h2', async function () {
    const category = $(this).text();
    const filteredMeals = await getMealsByCategory(category);
    displayFilteredMeals(filteredMeals, dataContainer);
  });

  // Show Areas
  $('#areaBtn').click(async function () {
    searchContainer.html('');
    const areas = await getAreas();
    displayAreas(areas, dataContainer);
  });

  dataContainer.on('click', '.area h3', async function () {
    const area = $(this).text();
    console.log(area);
    const filteredMeals = await getMealsByArea(area);
    displayFilteredMeals(filteredMeals, dataContainer);
  });

  // Show Ingredientd
  $('#ingredientsBtn').click(async function () {
    searchContainer.html('');
    const ingredients = await getIngredients();
    displayIngredients(ingredients, dataContainer);
  });

  dataContainer.on('click', '.ingredient h3', async function () {
    const ingredient = $(this).text();
    const filteredMeals = await getMealsByIngredient(ingredient);
    displayFilteredMeals(filteredMeals, dataContainer);
  });

  // Search Page
  $('#searchBtn').click(function () {
    dataContainer.html('');

    searchContainer.html(`
            <div class="row bg-dark p-4">
                <div class="col-md-6">
                    <input type="text" id="mealSearch" placeholder="Search by meal name" class="form-control bg-dark text-white">
                </div>
                <div class="col-md-6">
                    <input type="text" id="firstLetterSearch" placeholder="Search by first letter" class="form-control bg-dark text-white">
                </div>
            </div>
        `);

    $('#mealSearch').keyup(async function () {
      const meal = $(this).val();
      const meals = await getMealsByName(meal);
      displayFilteredMeals(meals, dataContainer);
    });

    $('#firstLetterSearch').keyup(async function () {
      const letter = $(this).val();
      const meals = await getMealsByFirstLetter(letter);
      displayFilteredMeals(meals, dataContainer);
    });
  });

  // Contact Page
  $('#contactBtn').click(function () {
    searchContainer.html('');
    contact();
  });
});
