let ratingURL = "https://dummyjson.com/recipes?sortBy=rating&order=desc";
let fastURL = "https://dummyjson.com/recipes?sortBy=cookTimeMinutes&order=asc";
let italianURL = "https://dummyjson.com/recipes/tag/italian";

let rContainer = document.querySelector("#ratingContainer");
let fContainer = document.querySelector("#fastContainer");
let iContainer = document.querySelector("#italianContainer");

fetch(ratingURL).then((res) =>
  res.json().then((data) => {
    // console.log(data);
    total = data.total;
    console.log(total);

    //pageCount();
    showRating(data.recipes);
  }),
);
fetch(fastURL).then((res) =>
  res.json().then((data) => {
    // console.log(data);
    total = data.total;
    console.log(total);

    //pageCount();
    showFast(data.recipes);
  }),
);
fetch(italianURL).then((res) =>
  res.json().then((data) => {
    // console.log(data);
    total = data.total;
    console.log(total);

    //pageCount();
    showItalian(data.recipes);
  }),
);
function showRating(recipes) {
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
function showFast(recipes) {
  recipes.forEach((recipe) => {
    fContainer.innerHTML += `
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
function showItalian(recipes) {
  recipes.forEach((recipe) => {
    iContainer.innerHTML += `
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
