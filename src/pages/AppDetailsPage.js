//import "react-multi-carousel/lib/styles.css";
import '../styles/AppDetails.css'
import dataall from '../data/data.json'
import { useParams } from "react-router";
import React from 'react';
import { render } from '@testing-library/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AppDetails = () => {
  const { appId } = useParams();
  // console.log(params);
  var screenshots = dataall[appId].screenshots;



  return (
    <div style={{ padding: "0 20px" }}>
      <div className="main">

        <div className="upper">
          <div className="appDetails" >
            <img src={dataall[appId].appIcon} />
            <div>
              <h2>{dataall[appId].appName}</h2>
              <p>Last Bennch Devs</p>
            </div>
          </div>
          <p className="appDetails-description">{dataall[appId].appDescription}</p>

          <Popup trigger={<button className="buttonDownload zoom">DOWNLOAD</button>} position="bottom">
            {
              dataall[appId].downloads.map((downoads, index) => {
                return <a href={downoads.link} target="_blank" className="aaaa"><div className="downloadtypes">{downoads.name}</div></a>
              })
            }
          </Popup>
        </div>


        <h2 style={{ margin: "40px 20px 0 20px" }}>Screenshots</h2>
        <div className="screnshots">
          {
            screenshots.map((selected, index) => {
              return (
                <div className="screen">
                  <img src={selected} className="zoom" />
                </div>
              )
            })
          }
        </div>
      </div >

      <div style={{ height: "100px" }}></div>
    </div>
  );
}

export default AppDetails;
