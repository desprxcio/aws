
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Login from "./components/login"
import Register from './components/register';
import Dashboard from './components/dashboard';
import NavBar from './components/header';
import allCards from './components/allCards'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <NavBar isOpen={isOpen}/>
        <Routes>
          <Route path = {'/'} element = {<Login setIsOpen={setIsOpen}/>}/>
          <Route path = {'/register'} element = {<Register/>}/>
          <Route path = {'/dashboard'} element = {<Dashboard setIsOpen={setIsOpen}/>}/>
          <Route path = {'/allCards'} element = {<allCards setIsOpen={setIsOpen}/>}/>
        </Routes>
    </div>
  );
}

export default App;