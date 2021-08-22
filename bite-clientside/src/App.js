import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Recipes from "./Components/Recipes";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.log(process.env.REACT_APP_API_KEY)
        debugger
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${category}&number=10`
        );
        setRecipes(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipes();
  }, [category]);

  return (
    <main className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home setCategory={setCategory} />
          </Route>
          {/* Index */}
          <Route exact path="/recipes">
			 {/* mapping through the array */}
            <Recipes recipes={recipes} category={category}/>
          </Route>
          {/* Show */}
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
