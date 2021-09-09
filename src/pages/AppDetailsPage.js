import "react-multi-carousel/lib/styles.css";
import '../styles/AppDetails.css'

import dataall from '../data/data.json'

function AppDetails() {

  var screenshots = dataall[0].screenshots

  return (
    <div className="main">

      <div className="upper">
        <div className="appDetails" >
          <img src={dataall[0].appIcon} />
          <div>
            <h2>{dataall[0].appName}</h2>
            <p>Last Bennch Devs</p>
          </div>
        </div>
        <p className="appDetails-description">Nulla id nostrud culpa velit velit duis enim in velit ut Lorem consequat esse sunt. Tempor officia elit tempor laboris. Occaecat laboris esse et non ipsum dolor id proident. Labore pariatur sint pariatur eu in voluptate aute anim esse. Cupidatat magna ipsum elit adipisicing amet duis eu nostrud aute.</p>
        <button className="buttonDownload zoom">DOWNLOAD</button>
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
  );
}

export default AppDetails;
