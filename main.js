const searchForm = document.querySelector('.search-form')
const searchItem = document.querySelector('.search-item')
const results = document.querySelector('.col-1')
const resultItem = document.querySelectorAll('.results-item')

const searchRecipe = async function(query){
    result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    return result.json()
 }
 
const displayRecipe = async function(recipe_id){
    result = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`)
    return result.json()
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
    <div class ="results-item" onclick="hello(${recipeList[i].recipe_id})">
        <div class = "result-img" >
            <img src = "${recipeList[i].image_url}">
        </div>
        <div class = "result-info">
            <p> Title: ${recipeList[i].title} </p>
            <p> Publisher: ${recipeList[i].publisher} </p>
        </div>
    </div>
    `
}
}