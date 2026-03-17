let skip;
let i = 0;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  skip = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1, 40);
console.log(skip);

let list4URL = `https://dummyjson.com/recipes?limit=4&skip=${skip}`;

function getHero() {
  fetch(list4URL).then((res) => res.json().then((data) => showHero(data)));
}

function showHero(data) {
  console.log("This is the hero list ", data);
  document.querySelector(".hero").innerHTML = "";
  data.recipes.forEach((recipe) => {
    i++;
    console.log("number hero:", i);

    document.querySelector(".hero").innerHTML += `
        <li data-accName="Item ${i}" class="heroContainer">
                <div class="hiContainer">
                    <img src="${recipe.image}" alt="HeroPizza">
                </div>
                <div class="htContainer">
                    <h2>${recipe.name}</h2>
                    <p>${recipe.rating}/5</p>
                    <p>Are you looking to try something ${recipe.tags[1]} tonight? <br>
                        Try our ${recipe.tags[0]} recipe!</p>
                    <button><a href="./recipe.html?id=${recipe.id}">See recipe</a></button>
                </div>
            </li>`;
  });
}

function getData() {
  fetch(recipeURL).then((res) => res.json().then((data) => show(data)));
}

getHero();
