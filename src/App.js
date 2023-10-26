import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Stages from './pages/Stages';
import Locations from './pages/Locations';
import AllStages from './pages/AllStages';
import Accommodation from './pages/Accommodation'
import AboutUs from './pages/AboutUs';
import Background from './pages/Background'
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
          />
          <Route 
            exact path="/stages"
            element={<Stages />}
          />
          <Route 
            exact path="/locations"
            element={<Locations />}
          />
          <Route 
            exact path="/allstages"
            element={<AllStages />}
          />
          <Route 
            exact path="/accommodation"
            element={<Accommodation />}
          />
          <Route 
            exact path="/aboutus"
            element={<AboutUs />}
          />
          <Route 
            exact path="/background"
            element={<Background />}
          />
          <Route 
            exact path="/login"
            element={<Login />}
          />
          <Route 
            exact path="/register"
            element={<Register />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <Footer />
    </>
  );
}

export default App;
