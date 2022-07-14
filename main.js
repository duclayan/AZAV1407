const searchForm = document.querySelector('.search-form')
const searchItem = document.querySelector('.search-item')
const results = document.querySelector('.col-1')
const resultRecipe = document.querySelector('.col-2')
const resultItem = document.querySelectorAll('.results-item')

const searchRecipe = async function(query){
    result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    return result.json()
 }
 
const displayRecipe = async function(recipe_id){
    result = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`)
    return result.json()
}

async function getRecipe(recipe_id){
    recipe = await displayRecipe(recipe_id)
    recipe = recipe.recipe
    console.log(recipe)

    resultRecipe.innerHTML = `
    <h1> ${recipe.title} </h1>
    <img src="${recipe.image_url}">
`
}
searchForm.onsubmit = async function getRecipeList(e){
e.preventDefault()
let recipeList = await searchRecipe(searchItem.value)
recipeList = recipeList.recipes
console.log(recipeList)

results.innerHTML = ''

for(i=0; i<recipeList.length; i++){
    recipeList
    results.innerHTML +=
    `
    <div class ="results-item" onclick="getRecipe(${recipeList[i].recipe_id})">
        <div class = "result-info">
            <p> Title: ${recipeList[i].title} </p>
            <p> Publisher: ${recipeList[i].publisher} </p>
        </div>
    </div>
    `
}
}