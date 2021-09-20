import { useEffect, useState } from "react";
import "../styles/pages/SingleMeal.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";

function SingleMeal() {
  let { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(function (response) {
        if (response.data.meals) {
          let ingredients = [];
          for (let index = 0; index < 20; index++) {
            let ingredient =
              response.data.meals[0]["strIngredient" + (index + 1)];
            if (ingredient) {
              ingredients.push(ingredient);
            }
          }
          response.data.meals[0].strIngredients = ingredients.join(", ");
          console.log(response.data.meals[0]);
          setDetail(response.data.meals[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("dsdssd");
      });
  }, [id]);

  console.log(loading);
  return (
    <section id="single-meal-section">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          {detail ? (
            <>
              <h1 className="meal-title">{detail.strMeal}</h1>
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-meal"
                    src={detail.strMealThumb}
                    alt={detail.strMeal}
                  />
                </div>
                <div className="col-7 meal-overall">
                  <div className="meal-detail">
                    <p>
                      <span>Area : </span>
                      {detail.strArea}
                    </p>
                    <p>
                      <span>Category : </span>
                      {detail.strCategory}
                    </p>
                    <p>
                      <span>Ingredients : </span>
                      {detail.strIngredients}
                    </p>
                    <p className="mb-0">
                      <span>Instruction : </span>
                      {detail.strInstructions}
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/">
                <button className="back-btn">BACK HOME</button>
              </Link>
            </>
          ) : (
            <h2 className="no-meal-text">no meal to display</h2>
          )}
        </>
      )}
    </section>
  );
}

export default SingleMeal;
