import "react-multi-carousel/lib/styles.css";
import './AppDetails.css'

import dataall from '../data/data.json'

function AppDetails() {

  var screenshots=dataall[0].screenshots

  return (
    <div className="main">

        <div className="upper">
          <div className="appDetails" >
          <img src={dataall[0].appIcon} />
          <h2>{dataall[0].appName}</h2>
          </div>
          <button className="buttonDownload">DOWNLOAD</button>
        </div>

        <div className="screnshots">
            {
                screenshots.map((selected,index)=>{
                    return(
                        <div className="screen">
                        <img src={selected}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default AppDetails;
