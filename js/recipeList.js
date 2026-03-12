const params = new URLSearchParams(window.location.search);

const rContainer = document.querySelector("#rContainer");
const mealTypeBox = document.querySelector("#mealType");

let mealtype = params.get("meal-type");
mealTypeBox.innerHTML = mealtype;
let listURL = "https://dummyjson.com/recipes/";
console.log(listURL + mealtype);

if (mealtype != null && mealtype != "") {
  fetch(listURL + "/meal-type/" + mealtype + "?limit=6").then((res) =>
    res.json().then((data) => {
      console.log(data);
      mealTypeBox.innerHTML = mealtype;
      showRecipes(data.recipes);
    }),
  );
} else {
  fetch(listURL + "?limit=6").then((res) =>
    res.json().then((data) => {
      console.log(data);
      mealTypeBox.innerHTML = "All Recipes";
      showRecipes(data.recipes);
    }),
  );
}

function showRecipes(recipes) {
  recipes.forEach((recipe) => {
    rContainer.innerHTML += `
<article>
<img src=${recipe.image} alt="Picture of ${recipe.name}">
<p class="rating">${recipe.rating}★ (${recipe.reviewCount} reviews)</p>
<h2>${recipe.name}</h2>
<p class="time">${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
</article>
`;
  });
}
