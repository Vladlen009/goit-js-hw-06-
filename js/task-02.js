const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients') 

const potatoes = document.createElement('li')
potatoes.textContent = ingredients[0]

const mushrooms = document.createElement('li')
mushrooms.textContent = ingredients[1]

const garlic = document.createElement('li')
garlic.textContent = ingredients[2]

const tomatos = document.createElement('li')
tomatos.textContent = ingredients[3]

const herbs = document.createElement('li')
herbs.textContent = ingredients[4]

const condiments = document.createElement('li')
condiments.textContent = ingredients[5]

list.append(potatoes,mushrooms,garlic,tomatos,herbs,condiments)


// function setListElement(array){
//     for(let item of array){
//         const li = document.createElement("li");
//         li.textContent = item;
//         li.classList.add('item');
//     }
//     list.appendChild(li);
// }

// setListElement(ingredients);
