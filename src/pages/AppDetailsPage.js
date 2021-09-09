import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './AppDetails.css'
import {zeroRightClassName,fullWidthClassName, noScrollbarsClassName} from 'react-remove-scroll-bar';

function AppDetails() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  var screenshots = [
      {
          "img":"https://user-images.githubusercontent.com/39475600/132353403-d745b57c-6eda-46cb-8317-d5c9708a5ab2.jpeg"
      },
      {
          "img":"https://user-images.githubusercontent.com/39475600/132353454-84686f8e-b45e-4002-b964-57d1831bbb26.jpeg"
      },
      {
        "img":"https://user-images.githubusercontent.com/39475600/132353318-6db2d9bc-90ee-43e3-b61b-1148d1cad3c1.jpeg"
    },
    {
        "img":"https://user-images.githubusercontent.com/39475600/132353554-09ed4f93-798e-4a13-b30e-d9977694610b.jpeg"
    },
    {
        "img":"https://user-images.githubusercontent.com/39475600/132353951-72e3f1ec-f324-4edd-b95a-8689a8279042.jpeg"
    },
    {
        "img":"https://user-images.githubusercontent.com/39475600/132354072-0ddba755-f8d0-459a-aa92-0a8ff6132423.jpeg"
    },
  ]

  return (
    <div className="main">

        <div className="upper">
          <div className="appDetails" >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VrlkpVi2RmAnzVSwYUHnS9k6TngMAkcd5w&usqp=CAU' />
          <h2>App Name</h2>
          </div>
          <button className="buttonDownload">DOWNLOAD</button>
        </div>

        <div className="screnshots">
            {
                screenshots.map((selected,index)=>{
                    return(
                        <div className="screen">
                        <img src={selected.img}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default AppDetails;
