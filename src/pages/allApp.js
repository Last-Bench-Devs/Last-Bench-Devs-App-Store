import './App.css';
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';
import dataall from '../data/data.json'

function AllApp() {

  return (
    <div className="App" >
      <h1>Last Bench Devs App Store</h1>
      <div className="app-list">
        {
          dataall.map((currentelem,index)=>{
            return <Link to="/appdetail">
                <AppCard
                        appName={currentelem.name}
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