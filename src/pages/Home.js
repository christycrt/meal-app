import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Meal from "../components/Home/Meal";
import Searchbox from "../components/Home/Searchbox";
import "../styles/pages/Home.scss";
import axios from "axios";

function Home() {
  const [mealList, setMealList] = useState([]);
  const [searchMeal, setSearchMeal] = useState("");

  useEffect(() => {
    let fetchMeal = setTimeout(() => {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
        .then(function (response) {
          // handle success
          console.log(response.data.meals);
          setMealList(response.data.meals);
        });
    }, 500);
    return () => {
      clearTimeout(fetchMeal);
    };
  }, [searchMeal]);

  return (
    <div id="home">
      <Navbar />
      <Searchbox searchMeal={{ searchMeal, setSearchMeal }} />
      <Meal mealList={mealList} />
    </div>
  );
}

export default Home;
