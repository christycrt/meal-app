function Searchbox({ searchMeal }) {
  return (
    <section className="search-section">
      <form className="search-box">
        <input
          placeholder="Search for a Meal..."
          value={searchMeal.searchMeal}
          onChange={(e) => {
            searchMeal.setSearchMeal(e.target.value);
          }}
        />
      </form>
    </section>
  );
}

export default Searchbox;
