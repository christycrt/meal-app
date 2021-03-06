import { Link } from "react-router-dom";

function MealCard({ item }) {
  return (
    <article id="meal-card">
      <Link to={`/meal/${item.idMeal}`}>
        <img className="meal-img" src={item.strMealThumb} alt="meal" />
        <div className="meal-detail">
          <h3>{item.strMeal}</h3>
          <h4>{item.strCategory}</h4>
          <p className="text-meal-area">{item.strArea}</p>
          {item.strTags ? <p>#{item.strTags} </p> : ""}
        </div>
      </Link>
    </article>
  );
}

export default MealCard;
