import React from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styling/Recipes.css";

const Recipes = ({ category, recipes }) => {
  // const [ id, setId] = useState(null)
  //   const [recipes, setRecipes] = useState([]);

  //   useEffect(() => {
  //     const fetchRecipes = async () => {
  //       try {
  //         const res = await axios.get(
  //           `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${category}&number=1`
  //         );

  //         // console.log(res.data.results);
  //         setRecipes(res.data.results);
  //         // setCategory()
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchRecipes();
  //   }, [category]);

  return (
    <div className="recipes">
      <h1>List of Recipes from category {category}</h1>
      <div className="category-summary">
        Here goes a bit of a small portion of text about a vegetarian diet and
        it's benefits. this will contain a certain number of words, but not too
        much.
      </div>

      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
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
