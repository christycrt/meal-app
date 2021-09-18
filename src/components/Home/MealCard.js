function MealCard() {
  return (
    <article id="meal-card">
      <img
        className="meal-img"
        src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"
        alt="meal"
      />
      <div className="meal-detail">
        <h3>Chivito uruguayo</h3>
        <h4>Category</h4>
        <p>Area</p>
        <p>Tag</p>
      </div>
    </article>
  );
}

export default MealCard;
