import './App.css';
import AllApp from './pages/allApp';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppDetails from './pages/AppDetailsPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"><AllApp /></Route>
        <Route path="/appdetail/:appId" component={AppDetails}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
