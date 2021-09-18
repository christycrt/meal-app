import MealCard from "./MealCard";

function Meal({ mealList }) {
  return (
    <section id="meal">
      <h1 className="meal-title">Meal</h1>
      <div className="row">
        {mealList.map((item, key) => {
          return (
            <div key={key} className="col-4">
              <MealCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Meal;
