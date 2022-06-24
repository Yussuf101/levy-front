import Nav from "./Componets/nav";
import Footer from "./Componets/Footer";
import SignUp from "./Componets/Register/SignUp";
import Home from "./Componets/Home";
import Login from "./Componets/logins/Login";
import LevyCalaculator from "./Componets/LevyCalculator";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import "./App.css";
import { useState } from "react";




function App() {
  const [auth, setAuth] = useState({
    auth_status: false,
    username:"",
    email: "",
    token: "",
  });
  
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/LevyCalculator" element={<LevyCalaculator/>}/>
          <Route path="/Login" element={<Login auth={auth} setAuth={setAuth} />} />
          <Route path="/SignUp" element={<SignUp auth={auth} setAuth={setAuth} />}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
