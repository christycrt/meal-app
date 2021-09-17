import Navbar from "../components/common/Navbar";
import Meal from "../components/Home/Meal";
import Searchbox from "../components/Home/Searchbox";
import "../styles/pages/Home.scss";

function Home() {
  return (
    <div id="home">
      <Navbar />
      <Searchbox />
      <Meal />
    </div>
  );
}

export default Home;
