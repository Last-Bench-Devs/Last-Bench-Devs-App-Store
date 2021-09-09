import './App.css';
import AllApp from './pages/allApp';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppDetails from './pages/AppDetailsPage';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state => state.theme);
  return (
    <div className={theme == 'dark' ? `root-dark` : `root-light`}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"><AllApp /></Route>
          <Route path="/appdetail/:appId"><AppDetails /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
