import './App.css';
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';
import dataall from '../data/data.json'
import '../styles/allApp.css';

function AllApp() {

  return (
    <div className="App" >
      <div className="applist-header">
        <h1 className="search-header">Search for your favourite app</h1>
        <div className="search-field">
          <input type="text" className="search-input" placeholder="Search for an app" />
        </div>
      </div>
      <div className="app-list">
        {
          dataall.map((currentelem, index) => {
            return <Link to="/appdetail">
              <AppCard
                appName={currentelem.appName}
                appBanner={currentelem.appBanner}
                appIcon={currentelem.appIcon}
                appDescription={currentelem.appDescription}
              />
            </Link>
          })
        }
      </div>
      <div style={{ margin: "100px auto", textAlign: 'center', width: 'fit-content' }}>

      </div>
    </div>
  );
}

export default AllApp;