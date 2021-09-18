import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Meal from "../components/Home/Meal";
import Searchbox from "../components/Home/Searchbox";
import "../styles/pages/Home.scss";
import axios from "axios";

function Home() {
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    let fetchMeal = setTimeout(() => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then(function (response) {
          // handle success
          console.log(response.data.meals);
          setMealList(response.data.meals);
        });
    }, 500);
    return () => {
      clearTimeout(fetchMeal);
    };
  }, []);

  return (
    <div id="home">
      <Navbar />
      <Searchbox />
      <Meal mealList={mealList} />
    </div>
  );
}

export default Home;
