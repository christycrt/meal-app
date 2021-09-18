import MealCard from "./MealCard";

function Meal({ mealList }) {
  return (
    <section id="meal">
      {mealList ? (
        <div className="row">
          {mealList.map((item, key) => {
            return (
              <div key={key} className="col-4">
                <MealCard item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="no-match-text">no meals matched your search criteria</h2>
      )}
    </section>
  );
}

export default Meal;
