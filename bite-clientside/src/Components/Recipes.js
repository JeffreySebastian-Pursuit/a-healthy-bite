import React from "react";
import "../styling/Recipes.css";

const Recipes = ({ category, recipes }) => {
  return (
    <div className="recipes">
      <h1>List of Recipes from category {category}</h1>
      <div className="category-summary">
        Here goes a bit of a small portion of text about a vegetarian diet and
        it's benefits. this will contain a certain number of words, but not too
        much.
      </div>

      <ul className="recipe">
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id} className="recipeList">
              <a href={`/recipes/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="food pic" />
              </a>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipes;
