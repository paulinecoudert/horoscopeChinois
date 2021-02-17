import {
  Route, BrowserRouter, Switch, Link,
} from 'react-router-dom';

import Home from './views/Home';
import Liste from './views/Liste';
import Fiche from './views/Fiche';
import Voyage from './views/Voyage';
import './LittleItaly.css';
import Topic from './views/Topic';

const LittleItaly = () => (
  <div>
    <BrowserRouter>
      <header className="menu">
        <Link to="/Home" className="red"> Home </Link> |
        <Link to="/Liste"> Liste </Link> |
        <Link to="/Fiche"> Fiche </Link>  |
        <Link to="/Voyage"> Voyage </Link> |
        <Link to="/Topic"> Topic </Link>
      </header>
      <Switch>

        <Route path="/Topic/:ville">
          <Topic />
        </Route>

        <Route path="/Liste">
          <Liste />
        </Route>

        <Route path="/Fiche">
          <Fiche />
        </Route>

        <Route path="/Voyage">
          <Voyage />
        </Route>

        <Route path="/Home">
          <Home />
        </Route>

      </Switch>

      <footer className="bg-blue-800 text-white">
        copyright @toto
      </footer>
    </BrowserRouter>
  </div>
);

export default LittleItaly;
