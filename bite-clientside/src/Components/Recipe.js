import {useState, useEffect} from "react";
import axios from "axios"
import {useHistory, useParams} from "react-router-dom";

const Recipe = () => {
	const [recipe, setRecipe] = useState([])

	const {id} =useParams()
	const history = useHistory()

	const getRecipeDetails = async () =>{
		debugger
		try {
			// ?apiKey=${process.env.REACT_APP_API_KEY}&diet=${category}&number=10`
			const res = await axios.get(`https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`)
			debugger		
			setRecipe(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getRecipeDetails()
	}, [])


	return <div>
		Ingredients and directions 
		<div>{recipe?
		<div>
			{recipe}
		</div>
		:null}</div>
		</div>;
};

export default Recipe;


// https://api.spoonacular.com/recipes/{id}/information
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

