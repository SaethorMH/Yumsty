const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const recipeURL = "https://dummyjson.com/recipes/" + id;

console.log(id);
console.log(recipeURL);

const rName = document.querySelector("#rName");
const rating = document.querySelector("#rating");
const imgContainer = document.querySelector("#imgContainer");
const instructions = document.querySelector("#instructions");
const ingredients = document.querySelector("#ingredients");

function getData() {
  fetch(recipeURL).then((res) => res.json().then((data) => show(data)));
  console.log("getter data");
}

function show(data) {
  document.title = "Yumsty - " + data.name;
  rName.innerHTML = data.name;
  rating.innerHTML = data.rating + " (" + data.reviewCount + " reviews)";
  imgContainer.innerHTML = `<img src="${data.image}" alt="Image of ${data.name}">`;

  data.instructions.forEach((inst) => {
    instructions.innerHTML += `
    <li class="instruction">${inst}</li>
    `;
  });
  let i = 0;
  data.ingredients.forEach((ing) => {
    ingredients.innerHTML += `
    
    <input type="checkbox" id="ing${i}">
    <label for="ing${i}" class="ingredient">${ing}</label>
    
    `;
    i++;
  });
}

getData();
