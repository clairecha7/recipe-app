import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [recipes, setRecipes] = useState([]);

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const getData = async (query, meal) => {
    let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;
    if (meal) url += `&mealType=${meal}`;
    if (query !== "") {
      // User entered a recipe
      const result = await axios.get(url);
      // Entered invalid recipe
      if (!result.data.more) {
        toast.error(`No Food with such ${query}`);
        getData("any");
      }
      //   Entered a valid recipe
      setRecipes(result.data.hits);
    } else {
      // User didn't enter recipe
      toast.error("Please fill in the form");
    }
  };

  useEffect(() => {
    getData("any");
  }, []);

  return (
    <RecipeContext.Provider value={{ mealTypes, recipes, getData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  return useContext(RecipeContext);
};
