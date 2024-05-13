import { recipeJSON } from '../db/recipe.js'
let data = recipeJSON
console.log(data);

let recipe;

export const homepage = (req, res) => {
  res.render("index", { recipe });
}

export const recipeRequest = (req, res) => {
 try {
  if (req.body["choice"] == "chicken") {

    res.render("index.ejs", { recipe:  data[0] })
    
  }

  if (req.body["choice"] == "beef") {
    res.render("index.ejs", { recipe:  data[1] })
    
  }

  if (req.body["choice"] == "fish") {
    res.render("index.ejs", { recipe:  data[2] })
    
  }
 } catch (error) {
  console.log(error.message);
 }
}