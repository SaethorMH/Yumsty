const params = new URLSearchParams(window.location.search);

const rContainer = document.querySelector("#rContainer");
const mealTypeBox = document.querySelector("#mealType");
const bContainer = document.querySelector("#buttonContainer");
const sorter = document.querySelector("#sortSelect");
let skipNr = params.get("skip");
if (skipNr == null || skipNr == "") {
  skipNr = 0;
}
let limit = params.get("limit");
let total;

let allRecipes = [];
let sortedRecipes = [];
let sort = "";

let mealtype = params.get("meal-type");
mealTypeBox.innerHTML = mealtype;
let listURL = "https://dummyjson.com/recipes/";
console.log(listURL + mealtype);

if (limit == "" || limit == null) {
  limit = 6;
}

if (mealtype != null && mealtype != "") {
  fetch(listURL + "/meal-type/" + mealtype + "?limit=" + limit + "&skip=" + skipNr + sort).then((res) =>
    res.json().then((data) => {
      // console.log(data);
      allRecipes = data;
      console.log(allRecipes);
      mealTypeBox.innerHTML = mealtype;
      document.title = "Yumsty - " + mealtype;
      total = data.total;
      console.log(total);
      makeButtons();
      pageCount();
      showRecipes(data.recipes);
    }),
  );
} else if (skipNr != null && skipNr != "") {
  fetch(listURL + "?limit=" + limit + "&skip=" + skipNr + sort).then((res) =>
    res.json().then((data) => {
      // console.log(data);
      mealTypeBox.innerHTML = "All Recipes";
      document.title = "Yumsty - All Recipes";
      total = data.total;
      console.log(total);
      makeButtons();
      pageCount();
      showRecipes(data.recipes);
    }),
  );
} else {
  fetch(listURL + "?limit=" + limit + "&skip=0" + sort).then((res) =>
    res.json().then((data) => {
      // console.log(data);
      mealTypeBox.innerHTML = "All Recipes";
      total = data.total;
      console.log(total);
      makeButtons();
      pageCount();
      showRecipes(data.recipes);
    }),
  );
}

function showRecipes(recipes) {
  recipes.forEach((recipe) => {
    rContainer.innerHTML += `
<article><a href="recipe.html?id=${recipe.id}">
<img src=${recipe.image} alt="Picture of ${recipe.name}">
</a>
<p class="rating">${recipe.rating}★ (${recipe.reviewCount} reviews)</p>
<h2>${recipe.name}</h2>
<p class="time">${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
</article>
`;
  });
}

function makeButtons() {
  if (mealtype == null || mealtype == "") {
    bContainer.innerHTML = `
<a class="pageButton" href="./recipeList.html?limit=${limit}&skip=${skipNr - limit}">Prev</a>
<a class="pageButton" href="./recipeList.html?limit=${limit}&skip=${Number(skipNr) + Number(limit)}">Next</a>`;
  } else if (skipNr > 0 && skipNr / limit + 1 != Math.ceil(total / limit)) {
    bContainer.innerHTML = `
<a class="pageButton" href="./recipeList.html?meal-type=${mealtype}&limit=${limit}&skip=${skipNr - limit}">Prev</a>
<a class="pageButton" href="./recipeList.html?meal-type=${mealtype}&limit=${limit}&skip=${Number(skipNr) + Number(limit)}">Next</a>`;
  } else if (skipNr / limit + 1 == Math.ceil(total / limit)) {
    bContainer.innerHTML = `
<a class="pageButton" href="./recipeList.html?meal-type=${mealtype}&limit=${limit}&skip=${skipNr - limit}">Prev</a>`;
  } else {
    bContainer.innerHTML = `
    <a class="pageButton" href="./recipeList.html?meal-type=${mealtype}&limit=${limit}&skip=${Number(skipNr) + Number(limit)}">Next</a>`;
  }
}

function pageCount() {
  document.querySelector("#pageCounter").innerHTML = `Page ${skipNr / limit + 1} of ${Math.ceil(total / limit)}`;
}

sorter.addEventListener("change", changeSort);

function changeSort() {
  const sortValue = sorter.value; // e.g. "&sortBy=rating&order=asc"
  const base = mealtype ? `${listURL}meal-type/${mealtype}?limit=${limit}&skip=${skipNr}${sortValue}` : `${listURL}?limit=${limit}&skip=${skipNr}${sortValue}`;

  rContainer.innerHTML = ""; // clear before re-render
  fetch(base)
    .then((res) => res.json())
    .then((data) => showRecipes(data.recipes));
}
