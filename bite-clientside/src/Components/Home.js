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
      <h1 className="Heading-Title">A HEALTHY BITE</h1>
      <h5 className="Subheading">Healthy food for every mood.</h5>

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
            <li onClick={() => setCategory("ketogenic")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDPdnWFXD3kloqBBy4nYwfFCfRfbvrUHC3w&usqp=CAU"
                alt="ketogenic"
                className="image"
              />
              <span className="caption">ketogenic</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("Pescetarian")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZvwHaQUuryT0WbnBSYTjwInC68KNTpzoWw&usqp=CAU"
                alt="pescetarian"
                className="image"
              />
              <span className="caption">Pescetarian</span>
            </li>
          </ul>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
