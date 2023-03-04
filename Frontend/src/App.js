import Aboutus from './aboutuscomponent/Aboutus';
import './App.css';
import Home from './homecomponent/Home.js'
import Service from './servicescomponents/Service';
import Ourteam from './ourteamcomponent/Ourteam';
import Blog from './blogcomponent/Blog';
import Contactus from './contactuscomponent/Contactus';
import Login from './logincomponents/Login';
import Dummy from './Dummy';
import {
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/Aboutus" element = {<Aboutus/>}/>
      <Route path = "/Service" element = {<Service/>}/>
      <Route path = "/Ourteam" element = {<Ourteam/>}/>
      <Route path = "/Blog" element = {<Blog/>}/>
      <Route path ="/Contactus" element = {<Contactus/>}/>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Dummy" element ={<Dummy/>}/>
     </Routes>
    </>
  );
}

export default App;