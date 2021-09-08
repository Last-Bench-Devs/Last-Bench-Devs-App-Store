import './App.css';
import AppCard from './components/AppCard';

function App() {
  return (
    <div className="App" >
      <h1>Last Bench Devs App Store</h1>
      <div className="app-list">
        <AppCard
          appName="App Name"
          appBanner="https://media.discordapp.net/attachments/844194529263616042/885171770129276928/sponline_phone15_generated.jpg?width=1101&height=661"
          appIcon="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          appDescription="Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
        />
        <AppCard
          appName="App Name"
          appBanner="https://dbwgapw6amg93.cloudfront.net/wp-content/uploads/2016/10/best_mobile_app_UI_2016_Personal_Festival.jpg"
          appIcon="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          appDescription="Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
        />
        <AppCard
          appName="App Name"
          appBanner="https://blog.tubikstudio.com/wp-content/uploads/2019/03/blog_app_ui_design_tubik.png"
          appIcon="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          appDescription="Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
        />

        <AppCard
          appName="App Name"
          appBanner="https://blog.tubikstudio.com/wp-content/uploads/2019/03/blog_app_ui_design_tubik.png"
          appIcon="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          appDescription="Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
        />
        <AppCard
          appName="App Name"
          appBanner="https://media.discordapp.net/attachments/844194529263616042/885171770129276928/sponline_phone15_generated.jpg?width=1101&height=661"
          appIcon="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          appDescription="Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
        />
        <AppCard
          appName="App Name"
          appBanner="https://dbwgapw6amg93.cloudfront.net/wp-content/uploads/2016/10/best_mobile_app_UI_2016_Personal_Festival.jpg"
          appIcon="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          appDescription="Ipsum magna Lorem Lorem velit labore amet laborum incididunt laborum do do. labore amet laborum incididunt laborum do do. "
        />
      </div>
      <div style={{ margin: "100px auto", textAlign: 'center', width: 'fit-content' }}>

      </div>
    </div>
  );
}

export default App;
