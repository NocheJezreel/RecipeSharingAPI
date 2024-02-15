const express = require("express"); // Importing necessary modules and setting up the express app
const app = express();
const validation = require("joi");

const { recipeslist } = require("./src/recipes.js"); // Importing recipes list from an external file

app.use(express.json()); // Middleware to parse JSON in request body

// Handling root endpoint and /api/recipes endpoint for GET requests
app.get("/", (req, res) => {
  res.send(recipeslist);
});

app.get("/api/recipes", (req, res) => {
  res.send(recipeslist);
});

// Handling GET request for a specific recipe based on ID
app.get("/api/recipes/:id", (req, res) => {
  // Validating request parameters using Joi schema
  const schema = validation.object({
    id: validation.number().integer().required(),
  });

  const { error } = schema.validate(req.params);
  if (error) return res.status(400).send(error.details[0].message);
// Finding recipe by ID
  const ID = req.params.id;
  const recipe = recipeslist.find((c) => c.id === parseInt(ID));
  if (!recipe) return res.status(404).send({ message: "Recipe cannot found." });
  res.send(recipe);
});

// Handling GET request for a specific recipe based on name
app.get("/api/recipes/name/:name", (req, res) => {
  // Validating request parameters using Joi schema
  const schema = validation.object({
    name: validation.string().required(),
  });

  const { error } = schema.validate(req.params);
  if (error) return res.status(400).send(error.details[0].message);
  // Finding recipe by name
  const name = req.params.name.toLowerCase();
  const recipe = recipeslist.find((c) => c.name.toLowerCase() === name);
  if (!recipe) return res.status(404).send({ message: "Recipe cannot found." });
  res.send(recipe);
});

// Handling POST request to create a new recipe
app.post("/api/recipes/create", (req, res) => {
  // Validating request body using Joi schema
  const schema = validation.object({
    name: validation.string().required(),
    ingredients: validation.array().items(validation.string()).required(),
    steps: validation.array().items(validation.string()).required(),
    tag: validation.string().optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Creating a new recipe and adding it to the recipes list
  const newRecipe = {
    id: recipeslist.length + 1,
    name: req.body.name,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    tag: req.body.tag,
  };

  recipeslist.push(newRecipe);
  res.send(newRecipe);
});

// Handling DELETE request to delete a recipe based on ID
app.delete("/api/recipes/delete/:id", (req, res) => {
  // Finding recipe by ID
  const ID = parseInt(req.params.id);
  const recipe = recipeslist.find((c) => c.id === ID);
  if (!recipe) return res.status(404).send({ message: "Recipe cannot found." });
  // Deleting the recipe from the list
  const index = recipeslist.indexOf(recipe);
  recipeslist.splice(index, 1);

  res.send(recipe);
});

// Handling PUT request to update a recipe based on ID
app.put("/api/recipes/update/:id", (req, res) => {
  // Finding recipe by ID
  const ID = parseInt(req.params.id);
  const recipe = recipeslist.find((c) => c.id === ID);
  if (!recipe) return res.status(404).send({ message: "Recipe cannot found." });
  // Validating request body using Joi schema
  const schema = validation.object({
    id: validation.number().integer(),
    name: validation.string().required(),
    ingredients: validation.array().items(validation.string()).required(),
    steps: validation.array().items(validation.string()).required(),
    tag: validation.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Updating the recipe with new information
  recipe.name = req.body.name;
  recipe.ingredients = req.body.ingredients;
  recipe.steps = req.body.steps;
  recipe.tag = req.body.tag;

  res.send(recipe);
});
// Handling GET request to retrieve recipes based on a specific tag
app.get("/api/recipes/tag/:tag", (req, res) =>{
  // Validating request parameters using Joi schema
  const schema =validation.object({
    tag: validation.string().required(),
  });

  const { error } =schema.validate(req.params);
  if (error) return res.status(400).send(error.details[0].message);
  // Finding recipes with the given tag
  const tag = req.params.tag.toLowerCase();
  const recipes = recipeslist.filter((c) => c.tag.toLowerCase() === tag);
  if (recipes.length === 0)
    return res
      .status(404)
      .send({ message: "No recipes found with the given tag."});
      res.send(recipes);
});
// Setting up the server to listen on the specified port
const port = process.env.PORT || 1234;
app.listen(port, () => console.log(`Listening on http://localhost:${port}...`));

