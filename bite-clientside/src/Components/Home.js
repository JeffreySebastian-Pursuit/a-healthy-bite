import Recipes from "./Recipes";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Home = ({ setCategory }) => {
  const history = useHistory();
  const handleSelection = () => {
    history.push("/recipes");
  };
  return (
    <div>
      <h1 className="text-center">A HEALTHY BITE</h1>
      <h5 className="text-center">Healthy food for every mood.</h5>

      <div id="category">
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("vegan")}>
              <img
                src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
                alt="vegan"
                className="image"
              />
              <span className="caption">Vegan</span>
            </li>
          </ul>
        </div>

        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("vegetarian")}>
              <img
                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/6054/f5282d05-33f5-4c93-a08e-b000164a54db.jpg"
                alt="vegetarian"
                className="image"
              />
              <span className="caption">Vegetarian</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("protein")}>
              <img
                src="https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/Introduction-to-Protein.jpg"
                alt="protein"
                className="image"
              />
              <span className="caption">Protein</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("smoothie")}>
              <img
                src="https://www.jessicagavin.com/wp-content/uploads/2020/01/how-to-make-a-smoothie-22-1200.jpg"
                alt="smoothie"
                className="image"
              />
              <span className="caption">Smoothie</span>
            </li>
          </ul>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
