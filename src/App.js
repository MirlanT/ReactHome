import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Profiles from './components/Profiles/Profiles'
import {Route, Routes } from "react-router-dom";

const App = (props) =>{
  
  return(
      <div className='App'>
        <Header />
        <Navbar />
        <div className="app_route">
          <Routes>
            <Route exact path="/Profiles" element={<Main data={props.data} addPost={props.addPost} del={props.del}/>} />
            <Route exact path="/Messages" element={<Profiles name={props.messages.names} message={props.messages.messages}/>} />
          </Routes>
        </div>
      </div>
  )
}

export default App;
