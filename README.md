# 🥗 Recipe Sharing API🥗

## Description of the Application

This application is a Recipe Sharing System built using Node.js, Express, and MongoDB. It provides a RESTful API for creating, reading, updating, and deleting (CRUD) recipes.

## Features

1. View Recipes
2. Search Recipe based on Tag
3. Error Handling
4. Delete a Recipe
5. Create a Recipe

## Purpose

The purpose of this API is to provide a simple and efficient way to manage and search for recipes.

# ⚙ Local Setup

Follow these steps to set up the application locally:

1. **Clone the Repository**: First, clone the repository to your local machine using Git. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/NocheJezreel/RecipeSharingAPI.git
```

2. **Install Dependencies**: Navigate into the cloned repository directory and install the necessary dependencies. Run the following command in your terminal:

```bash
npm install
```
3. **Start the Server**: Now, you can start the server by running the following command in your terminal:

```bash
npm run dev
```

The server will start, and you should see a message like <span style="color:green"><strong>Listening on http://localhost:1234...</strong></span> in your terminal.

4. **Test the Application**: You can now test the application by sending requests to <span style="color:green"><strong>http://localhost:1234/api/recipes</strong></span>.

# API Endpoint Guide

This application provides several API endpoints for managing recipes:
Here's how you can use the endpoints:

## Get All Recipes

**Endpoint:** `/api/recipes`

**Method:** `GET`

**Description:** Get all recipes.

## Get a Specific Recipe by ID

**Endpoint:** `/api/recipes/:id`

**Method:** `GET`

**Description:** Get the recipe based on their ID.

**Parameters:**

- `id`: The ID of the recipe.

## Get Recipes by Name

**Endpoint:** `/api/recipes/name/:name`

**Method:** `GET`

**Description:** Get recipes based on their name.

**Parameters:**

- `name`: The name of the recipe.

## Get Recipes by Tag

**Endpoint:** `/api/recipes/tag/:tag`

**Method:** `GET`

**Description:** Get recipes based on their tags.

**Parameters:**

- `tag`: The tag of the recipe.

## Create a New Recipe

**Endpoint:** `/api/recipes`

**Method:** `POST`

**Description:** Creates a new recipe.

**Body:**

- `name`: The name of the recipe (required).
- `ingredients`: The ingredients of the recipe (required).
- `steps`: The steps of the recipe (required).
- `tag`: The tags of the recipe (optional).

## Update a Recipe

**Endpoint:** `/api/recipes/:id`

**Method:** `PUT`

**Description:** Updates the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

**Body:**

- `name`: The name of the recipe (optional).
- `ingredients`: The ingredients of the recipe (optional).
- `steps`: The steps of the recipe (optional).
- `tag`: The tags of the recipe (optional).

## Delete a Recipe

**Endpoint:** `/api/recipes/:id`

**Method:** `DELETE`

**Description:** Deletes the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

# 🌐 Prefer Not to Set Up Locally?

## Live API

The server has been deployed and is available for testing. You can interact with the API using different HTTP methods (GET, POST, PUT, DELETE).

API Base URL:

```bash
https://recipesharingapi-1ya9.onrender.com
```
## Get All Recipes

**Endpoint:** `https://recipe-sharing-api-v2.onrender.com/api/recipes`

**Method:** `GET`

**Description:** Returns all recipes.

**Example Request:**

```bash
 GET https://recipe-sharing-api-v2.onrender.com/api/recipes
```

# Dependencies

This project uses several dependencies to function correctly. Here's a brief description of each one:

## Dependencies

### Express

**Description:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Usage:** In this project, Express is used to create the server and manage the API routes.

### Joi

**Description:**  Joi is a powerful schema description language and data validator for JavaScript.

**Usage:** In this project, Joi is used to validate the data sent to the API endpoints.

## DevDependencies

### 🔄 nodemon

**Description:** This package is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

**Usage:** In this project, Nodemon is used to automatically restart the server whenever a file is changed. It's used in the `dev` script in the `package.json` file.

# Group Members

- **👤 [Jezreel Noche](https://www.facebook.com/profile.php?id=100091593908764)**
- **👤 [Darwin Melaya](https://www.facebook.com/darwin.melaya.9)**
- **👤 [Renna Mae Regio](https://www.facebook.com/rennamae.regio.7)**
- **👤 [Gilbert Ricamara](https://www.facebook.com/gilberttetsuya.ordillano)**