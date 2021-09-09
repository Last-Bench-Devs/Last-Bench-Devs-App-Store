import './App.css';
import AllApp from './pages/allApp';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppDetails from './pages/AppDetailsPage';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><AllApp/></Route>
        <Route path="/appdetail"><AppDetails/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
