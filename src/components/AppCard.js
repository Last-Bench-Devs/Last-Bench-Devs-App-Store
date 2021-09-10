import React from 'react'
import '../styles/AppCard.css';
import androidIcon from '../images/android.png';
import iosIcon from '../images/apple.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function AppCard({
  appName,
  appDescription,
  appBanner,
  downloads,
  appIcon
}) {
  return (
    <div className="card-container zoom">
      <img className="card-banner" src={appBanner} />
      <div className="gradient-top">
        <img src={appIcon} />
        <div>
          <h2 className="app-name">
            {appName}
          </h2>
          <p className="app-author">Last Bench Devs</p>
        </div>
      </div>
      <div className="gradient-bottom">
        <p>{appDescription}</p>
        <div className="card-toolbar">
          {/* <a>
            <img className="card-icon" src={androidIcon} />
          </a>
          <a>
            <img className="card-icon" src={iosIcon} />
          </a> */}
          <Popup trigger={<img className="card-icon" src="https://media.discordapp.net/attachments/844194529263616042/885175042210676756/1200px-Circle-icons-download.svg.png?width=661&height=661" />} position="bottom">
          {
            downloads.map((downoads,index)=>{
              return <a href={downoads.link} target="_blank"><div>{downoads.name}</div></a>
            })
          }
        </Popup>
          
        </div>
      </div>
    </div>
  )
}

export default AppCard
