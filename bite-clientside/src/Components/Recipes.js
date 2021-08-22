import React from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Recipes = ({ recipes }) => {
  return (
    <div>
      List of Recipes
      {recipes.map((recipe) => {
        const { id, title, image } = recipe;
        return (
          <ul>
            <Link to={`/recipes/${id}`}>
              <li key={id}>
                <p>{title}</p>
                <img src={image} alt="vegan" />
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default Recipes;
