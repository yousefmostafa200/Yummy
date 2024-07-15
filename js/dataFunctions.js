export async function getMeals() {
  try {
    const mealsRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const mealsData = await mealsRes.json();
    return mealsData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getMealById(mealId) {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const mealData = await mealRes.json();
    return mealData.meals[0];
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getMealsByName(meal) {
  try {
    const mealSearchRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    const mealSearchData = await mealSearchRes.json();
    return mealSearchData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getMealsByFirstLetter(letter) {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const mealData = await mealRes.json();
    return mealData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getCategories() {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const mealData = await mealRes.json();
    return mealData.categories;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getMealsByCategory(category) {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const mealData = await mealRes.json();
    return mealData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getAreas() {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const mealData = await mealRes.json();
    return mealData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getMealsByArea(area) {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const mealData = await mealRes.json();
    return mealData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getIngredients() {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    const mealData = await mealRes.json();
    return mealData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export async function getMealsByIngredient(ingredient) {
  try {
    const mealRes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const mealData = await mealRes.json();
    return mealData.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}
