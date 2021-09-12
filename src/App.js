import './App.css';
import AllApp from './pages/allApp';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppDetails from './pages/AppDetailsPage';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "animate.css"

function App() {
  const theme = useSelector(state => state.theme);
  const [isLoading, setIsLoading] = useState(true);
  window.onload = function () {
    setIsLoading(false);
  };
  return (
    isLoading ? (
      <div className="loader-wrapper" >
        <div className="loader">
          <img className="animate__animated animate__pulse animate__infinite" src="https://user-images.githubusercontent.com/39475600/132941494-98d08b72-e62e-4c06-8216-405c5d2eecc8.jpg" />
        </div>
      </div>
    ) : (
      <div className={theme == 'dark' ? `root-dark` : `root-light`}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/"><AllApp /></Route>
            <Route path="/appdetail/:appId"><AppDetails /></Route>
          </Switch>
        </BrowserRouter>
      </div>)
  );
}

export default App;
