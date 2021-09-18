function MealCard({ item }) {
  return (
    <article id="meal-card">
      <img
        className="meal-img"
        src={item.strMealThumb}
        alt="meal"
      />
      <div className="meal-detail">
        <h3>{item.strMeal}</h3>
        <h4>{item.strCategory}</h4>
        <p className="text-meal-area">{item.strArea}</p>
        <p>#{item.strTags}</p>
      </div>
    </article>
  );
}

export default MealCard;
