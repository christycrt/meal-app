import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Meal from "../components/Home/Meal";
import Searchbox from "../components/Home/Searchbox";
import "../styles/pages/Home.scss";
import axios from "axios";
import Loading from "../components/common/Loading";

function Home() {
  const [mealList, setMealList] = useState([]);
  const [searchMeal, setSearchMeal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchMeal = setTimeout(() => {
      setLoading(true);
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
        )
        .then(function (response) {
          // handle success
          console.log(response.data.meals);
          setMealList(response.data.meals);
          setLoading(false);
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
      <h1 className="meal-title">Meal</h1>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Meal mealList={mealList} />
      )}
    </div>
  );
}

export default Home;
