
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Login from "./components/login"
import Register from './components/register';
import Dashboard from './components/dashboard';
import NavBar from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "./components/game";
import AllCards from "./components/allCards";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <NavBar isOpen={isOpen}/>
        <Routes>
          <Route path = {'/'} element = {<Login setIsOpen={setIsOpen}/>}/>
          <Route path = {'/register'} element = {<Register/>}/>
          <Route path = {'/dashboard'} element = {<Dashboard setIsOpen={setIsOpen}/>}/>
          <Route path = {'/game'} element = {<Game/>}/>
          <Route path = {'/allCards'} element = {<AllCards/>}/>
        </Routes>
    </div>
  );
}

export default App;