import React from "react";
import "../styling/Recipes.scss";

const Recipes = ({ category, recipes }) => {
  return (
    <div className="recipes">
      <h1>{category} Recipes</h1>
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
