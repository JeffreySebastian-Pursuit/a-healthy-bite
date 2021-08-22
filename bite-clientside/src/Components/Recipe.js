import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/Recipe.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import convertSummary from "../tools/convertSummary";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
        );
        setRecipe(res.data);
      } catch (error) {}
    };
    fetchRecipe();
  }, [id]);

  const { title, summary, image, sourceUrl } = recipe;

  return (
    <div>


     

      <div className="heading">
        <div className="lists">
        <h1 className="title">Title: {title}</h1>
          <p id="summary"> {convertSummary( summary)}</p>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Click for more information
          </a>
        </div>
        <img src={image} alt="vegan" className="recipeImage" />
      </div>
    </div>
  );
};

export default Recipe;

// https://api.spoonacular.com/recipes/{id}/information
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
