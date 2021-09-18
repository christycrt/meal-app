import MealCard from "./MealCard";

function Meal() {
  return (
    <section id="meal">
      <h1 className="meal-title">Meal</h1>
      <div className="row">
        <div className="col-4">
          <MealCard />
        </div>
        <div className="col-4">
          <MealCard />
        </div>
        <div className="col-4">
          <MealCard />
        </div>
      </div>
    </section>
  );
}

export default Meal;
