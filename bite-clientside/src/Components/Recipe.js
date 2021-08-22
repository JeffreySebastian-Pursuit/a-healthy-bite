import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

  const { title, summary, image, sourceURL } = recipe;

  return (
    <div>
      Ingredients and directions
      <p>Title: {title}</p>
      <img src={image} alt="vegan" />
      <p>Summary: {summary}</p>
      <a href={sourceURL}>Click for more information</a>
    </div>
  );
};

export default Recipe;

// https://api.spoonacular.com/recipes/{id}/information
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
