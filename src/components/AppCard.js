import React from 'react'
import '../styles/AppCard.css';
import androidIcon from '../images/android.png';
import iosIcon from '../images/apple.png';

function AppCard({
  appName,
  appDescription,
  appBanner,
  androidLink,
  iosLink,
  directLink,
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
          <img className="card-icon" src="https://media.discordapp.net/attachments/844194529263616042/885175042210676756/1200px-Circle-icons-download.svg.png?width=661&height=661" />
        </div>
      </div>
    </div>
  )
}

export default AppCard
