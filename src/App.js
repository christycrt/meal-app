import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleMeal from "./pages/SingleMeal";
import Navbar from "./components/common/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/meal/:id">
            <SingleMeal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
