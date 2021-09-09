import './App.css';
import AllApp from './pages/allApp';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppDetails from './pages/AppDetailsPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="root-dark">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"><AllApp /></Route>
          <Route path="/appdetail"><AppDetails /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
