import { homepage, recipeRequest } from "../controllers/controller.js";



export const route = (app) =>{
  try {
    app.get("/", homepage);

    app.post("/recipe", recipeRequest)

  } catch (error) {
    console.log(error.message);
  }
}
