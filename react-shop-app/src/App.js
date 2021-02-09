import './App.css';
import StoreFront from "./StoreFront.js";
import Home from "./Home.js";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


function App() {
  
  return (

    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sf">Store Front</Link>
          </li>
          <li>
            <Link to="sl">Shop List</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sf">
          <StoreFront />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
