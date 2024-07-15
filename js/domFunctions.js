export function fadeOutLoadingScreen() {
  $('.loadingScreen').fadeOut(700, function () {
    $('body').css('overflow', 'auto');
  });
}

export function setupSideBar(sideBar, innerBar) {
  let innerBarWidth = innerBar.innerWidth();
  sideBar.css('left', -innerBarWidth);
  return innerBarWidth;
}

export function openSideBar(sideBar, navLinks) {
  sideBar.animate({ left: 0 }, 500);
  $('.openCloseBtn i').attr('class', 'fa-solid fa-xmark fa-2x');

  for (let i = 0; i < navLinks.length; i++) {
    const delay = 100 * i;
    navLinks.eq(i).delay(delay).animate({ top: 0 }, 500);
  }
}

export function closeSideBar(sideBar, navLinks, innerBarWidth) {
  sideBar.animate({ left: -innerBarWidth }, 500);
  $('.openCloseBtn i').attr('class', 'fa-solid fa-bars fa-2x');
  navLinks.animate({ top: '300px' }, 500);
}

export function displayMeals(meals, dataContainer) {
  let mealsData = ``;
  for (let i = 0; i < meals.length; i++) {
    let imgSrc = meals[i].strMealThumb;
    let mealName = meals[i].strMeal;
    let mealId = meals[i].idMeal;
    mealsData += `
        <div class="col-md-4 col-lg-3">
            <div class="item">
                <img src="${imgSrc}" loading="lazy" class="w-100" alt="${mealName}">
                <div class="overlay"><h2 data-id="${mealId}">${mealName}</h2></div>
            </div>
        </div>`;
  }
  dataContainer.html(`${mealsData}`);
}

export function displayInstructions(meal, dataContainer) {
  $('#mealsData').html('');
  let Ingredients = ``;
  for (let i = 0; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      Ingredients += `<li class="alert alert-info m-2 p-1">${
        meal[`strMeasure${i}`]
      } ${meal[`strIngredient${i}`]}</li>`;
    }
  }

  let mealTags = meal.strTags ? meal.strTags.split(',') : [];
  let tags = mealTags
    .map((tag) => `<li class="alert alert-danger m-2 p-1">${tag}</li>`)
    .join('');

  let mealInfo = ` 
        <div class="col-lg-4">
            <img src="${meal.strMealThumb}" class="rounded-2 w-100 mb-3" alt=""/>
            <h2>${meal.strMeal}</h2>
        </div>
        <div class="col-lg-8">
            <h2 class="fw-bold">Instructions</h2>
            <p>${meal.strInstructions}</p>
            <h3><span class="fw-bold">Area: </span>${meal.strArea}</h3>
            <h3><span class="fw-bold">Category: </span>${meal.strCategory}</h3>
            <h3><span class="fw-bold">Ingredients:</span></h3>
            <ul class="list-unstyled d-flex flex-wrap g-3">
                ${Ingredients}
            </ul>
            <h3><span class="fw-bold">Tags:</span></h3>
            <ul class="list-unstyled d-flex flex-wrap g-3">
                ${tags}
            </ul>
            <a href="${meal.strSource}" class="btn btn-success" target="_blank">Source</a>
            <a href="${meal.strYoutube}" class="btn btn-danger" target="_blank">Youtube</a>
        </div>`;

  dataContainer.html(`${mealInfo}`);
}

export function displayCategories(categories, dataContainer) {
  let categoryData = categories
    .map(
      (category) => `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
                <img src="${category.strCategoryThumb}" class="w-100" loading="lazy" alt="${category.strCategory}">
                <div class="overlay"><h2>${category.strCategory}</h2></div>
            </div>
        </div>`
    )
    .join('');
  dataContainer.html(`${categoryData}`);
}

export function displayFilteredMeals(filteredMeals, dataContainer) {
  let mealsData = filteredMeals
    .map(
      (meal) => `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
                <img src="${meal.strMealThumb}" class="w-100" loading="lazy" alt="${meal.strMeal}">
                <div class="overlay"><h2 data-id="${meal.idMeal}">${meal.strMeal}</h2></div>
            </div>
        </div>`
    )
    .join('');
  dataContainer.html(`${mealsData}`);
}

export function displayAreas(areas, dataContainer) {
  let areaInfo = areas
    .map(
      (area) => `
        <div class="col-sm-6 col-md-4 col-lg-3 text-center area ">
            <i class="fa-solid fa-house fa-4x mb-2"></i>
            <h3>${area.strArea}</h3>
        </div>`
    )
    .join('');
  dataContainer.html(`${areaInfo}`);
}

export function displayIngredients(ingredients, dataContainer) {
  let ingredientsInfo = ingredients
    .slice(0, 20)
    .map(
      (ingredient) => `
        <div class="col-sm-6 col-md-4 col-lg-3 text-center ingredient">
            <i class="fa-solid fa-bowl-rice fa-4x"></i>
            <h3>${ingredient.strIngredient}</h3>
        </div>`
    )
    .join('');
  dataContainer.html(`${ingredientsInfo}`);
}
