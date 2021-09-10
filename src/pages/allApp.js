import './App.css';
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';
import dataall from '../data/data.json'
import '../styles/allApp.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { shuffle } from "lodash";

function AllApp() {
  const[searchTerms,setSearchTerms]=useState('');
  const theme = useSelector(state => state.theme);
  return (
    <div className="App" >
      <div className="applist-header">
        <h1 className="search-header">Search for your favourite app</h1>
        <div className="search-field">
          <input type="text" className={`search-input ${theme === 'dark' && 'search-input-dark'}`} placeholder="Search for an app" onChange={event=>{setSearchTerms(event.target.value)}} />
        </div>
      </div>
      <div className="app-list">
        {
          shuffle(dataall).filter(
            (val)=>{
              if(searchTerms==""){
                return val;
              }else if(val.appName.toLowerCase().includes(searchTerms.toLowerCase())){
                return val;
              }
            }
          ).map((currentelem, index) => {
            return <Link to={
              `/appdetail/${currentelem.appId}`
            }>
              <AppCard
                appName={currentelem.appName}
                appBanner={currentelem.appBanner}
                appIcon={currentelem.appIcon}
                appDescription={currentelem.shortDescription}
                downloads={currentelem.downloads}
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