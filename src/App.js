import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
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
import { getStageData } from "./utils/getStageData";
import { getStageDetails } from './utils/getStageDetails';
import { getCoordsData } from './utils/getCoordsData';


function App() {
  const [firstName, setFirstName] = useState();
  const [locationData, setLocationData] = useState();
  const [stageData,setStageData] = useState([])
  const [stageDetails,setStageDetails] = useState([])
  const [locationID,setLocationID] =useState(0);
  const [stageID,setStageID] = useState (1);
  const [isLoadingStageData, setIsLoadingStageData] = useState(false);
  const [priorStage,setPriorStage] =useState(1);
  const [nextStage,setNextStage] =useState(2);
  const [coordsData, setCoordsData] = useState();

useEffect (()=>{
  setIsLoadingStageData(true);
  getStageData(setStageData).then((data) => {
  setIsLoadingStageData(false);
  getStageDetails(setStageDetails,stageDetails);
  getCoordsData(setCoordsData);
  }
  )},[])
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
            element={<Stages
               priorStage={priorStage} nextStage={nextStage} setPriorStage={setPriorStage} 
               setNextStage={setNextStage} stageData={stageData} coordsData={coordsData} setCoordsData={setCoordsData}
               stageID={stageID} setStageID={setStageID} setStageData={setStageData}
               setStageDetails={setStageDetails} stageDetails={stageDetails} 
               setLocationID={setLocationID} locationID={locationID}
               />}
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
            element={<Login  setFirstName={setFirstName}/>}
          />
          <Route 
            exact path="/register"
            element={<Register setFirstName={setFirstName}/>}
          />
        </Routes>
      </div>
    </BrowserRouter>

    <Footer />
    </>
  );
}

export default App;
