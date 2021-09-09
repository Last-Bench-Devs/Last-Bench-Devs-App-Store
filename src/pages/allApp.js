import './App.css';
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';

function AllApp() {


  var data = [
    {
      "appName":"App Name",
      "appBanner":"https://images.squarespace-cdn.com/content/v1/5c7991fb4d546e4c2f92d01d/1611131229885-BLRX2C68D0WY5N8Z5ZCZ/Group+App+Promo+Banner.jpg?format=2500w",
      "appIcon":"https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg",
      "appDescription":"Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. ",
    },
    {
      "appName":"App Name",
      "appBanner":"https://dbwgapw6amg93.cloudfront.net/wp-content/uploads/2016/10/best_mobile_app_UI_2016_Personal_Festival.jpg",
      "appIcon":"https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg",
      "appDescription":"Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. ",
    },
    {
      "appName":"App Name",
      "appBanner":"https://blog.tubikstudio.com/wp-content/uploads/2019/03/blog_app_ui_design_tubik.png",
      "appIcon":"https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg",
      "appDescription":"Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
    }
  ]




  return (
    <div className="App" >
      <h1>Last Bench Devs App Store</h1>
      <div className="app-list">
        {
          data.map((currentelem,index)=>{
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