import React, { useEffect } from "react";
import './Stages.css';
import { IconButton } from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import Hiking from '@mui/icons-material/Hiking';
import GpsFixed from "@mui/icons-material/GpsFixed";
import ImageMapper from "react-img-mapper";
import { getCoordsData } from '../utils/getCoordsData';
import StageTable from "../components/StageTable";
import { getStageData } from "../utils/getStageData";
import { getStageDetails } from "../utils/getStageDetails";
import  {CaminoArrow} from '../images/icons/caminoArrow';
import {CaminoReverseArrow} from '../images/icons/caminoReverseArrow';

function Stages({
    priorStage,
    nextStage,
    setPriorStage,
    setNextStage,
    stageData,
    coordsData,
    setCoordsData,
    stageID,
    setStageID,
    setStageData,
    setStageDetails,
    stageDetails,
    setLocationID,
    locationID
  })
 {
    async function delay300() {
        console.log('delay300');
        await setTimeout(() => {  console.log('World!'); }, 300);
    }
    function backClickHandler () {
        setStageID(priorStage)
        localStorage.setItem('stageID', JSON.stringify(priorStage))
        const newPriorStage = stageData.stageData2[0].find(({StageID}) => StageID === priorStage)
        if (newPriorStage.priorStage === 0 ) 
            {   setPriorStage(priorStage) 
                localStorage.setItem('priorStage', JSON.stringify(priorStage))}

        else
            {   setPriorStage(newPriorStage.priorStage) 
                localStorage.setItem('priorStage', JSON.stringify(priorStage))
                setNextStage(newPriorStage.nextStage)
                localStorage.setItem('nextStage', JSON.stringify(nextStage))}
    }
    function forwardClickHandler () {
        setStageID(nextStage)
        localStorage.setItem('stageID', JSON.stringify(nextStage))
        const newNextStage = stageData.stageData2[0].find(({StageID}) => StageID === nextStage)
        if (newNextStage.nextStage === 0 ) 
            {   setNextStage(nextStage) 
                localStorage.setItem('nextStage', JSON.stringify(nextStage))}
        else
            {   setNextStage(newNextStage.nextStage) 
                localStorage.setItem('nextStage', JSON.stringify(newNextStage.nextStage))
                setPriorStage(newNextStage.priorStage)
                localStorage.setItem('priorStage', JSON.stringify(priorStage))}
    }
    useEffect(()=>{
        getCoordsData(setCoordsData);
        console.log("hello")
    },[])
      
    console.log(coordsData)
    console.log(typeof coordsData)
    console.log(stageID);
    useEffect(()=>{
        let w = window.innerWidth;
    },[window.innerWidth])
    var w = window.innerWidth;
    if (typeof coordsData == "undefined") {
        console.log("Hello");
        var filteredCoordsData =[]
        getCoordsData(setCoordsData);
    } else {
        var filteredCoordsData = coordsData.filter(function(stage){ return stage.stageID == stageID})
    }
    console.log(filteredCoordsData)
    var MAP1920 = {name:"MAP",areas: []};
    var MAP1280 = {name:"MAP",areas: []};
    var MAP1024 = {name:"MAP",areas: []};
    var MAP640 = {name:"MAP",areas: []};
    var MAP360 = {name:"MAP",areas: []};
    filteredCoordsData.map((item,index)=>{
        const array1920 =[item.TLX1920,item.TLY1920,item.BRX1920,item.BRY1920];
        const obj1920 = {
            name:"1920map",
            shape:"rect",
            coords: array1920,
            locationID: item.locationID
            };
        MAP1920.areas.push(obj1920);
        const array1280 =[item.TLX1280,item.TLY1280,item.BRX1280,item.BRY1280];
        const obj1280 = {
            name:"1280map",
            shape:"rect",
            coords: array1280,
            locationID: item.locationID
            };
        MAP1280.areas.push(obj1280);
        const array1024 =[item.TLX1024,item.TLY1024,item.BRX1024,item.BRY1024];
        const obj1024 = {
            name:"1024map",
            shape:"rect",
            coords: array1024,
            locationID: item.locationID
            };
        MAP1024.areas.push(obj1024);
        const array640 =[item.TLX640,item.TLY640,item.BRX640,item.BRY640];
        const obj640 = {
            name:"640map",
            shape:"rect",
            coords: array640,
            locationID: item.locationID
            };
        MAP640.areas.push(obj640);
        const array360 =[item.TLX360,item.TLY360,item.BRX360,item.BRY360];
        const obj360 = {
            name:"360map",
            shape:"rect",
            coords: array360,
            locationID: item.locationID
            };
        MAP360.areas.push(obj360);
    });
    var stageDetailsInfo = stageDetails.filter(item => item.ID === stageID);
    if (typeof stageDetailsInfo[0] === "undefined") {
        var elevationURL = ""
        console.log(elevationURL)
        getStageDetails(setStageDetails,stageDetails)
        kmDistance = 0;
        mileDistance = 0;
    } else {
        stageDetailsInfo = stageDetails.filter(item => item.ID === stageID);
        elevationURL = stageDetailsInfo[0].stageElevationChartURL
        console.log(stageDetailsInfo[0])
        var stageMap360URL = stageDetailsInfo[0].stageMap360URL
        var stageMap640URL = stageDetailsInfo[0].stageMap640URL
        var stageMap1024URL = stageDetailsInfo[0].stageMap1024URL
        var stageMap1280URL = stageDetailsInfo[0].stageMap1280URL
        var stageMap1920URL = stageDetailsInfo[0].stageMap1920URL
        var kmDistance = Math.round(stageDetailsInfo[0].stageDistanceInMetres / 100)/10;
        var mileDistance = Math.round(stageDetailsInfo[0].stageDistanceInMetres / 160.9)/10;
        var hours = Math.floor(stageDetailsInfo[0].stageTimeInMinutes/60);
        var minutes = stageDetailsInfo[0].stageTimeInMinutes -(hours*60);
        var startLongitude = stageDetailsInfo[0].startLongitude
        var startLatitude = stageDetailsInfo[0].startLatitude
        var finishLongitude = stageDetailsInfo[0].finishLongitude
        var finishLatitude = stageDetailsInfo[0].finishLatitude

    }
    console.log(stageMap1920URL)
    console.log(elevationURL)

    if (typeof stageData.stageData2 === "undefined") {
        var savedStageID = JSON.parse(localStorage.getItem('stageID'));
        setStageID(savedStageID)
        const savedPriorStage = JSON.parse(localStorage.getItem('priorStage'));
        setPriorStage(savedPriorStage)
        const savedNextStage = JSON.parse(localStorage.getItem('nextStage'));
        setNextStage(savedNextStage)
        getStageData(setStageData) 
        var stageInfo = [];
        var stageName = "Loading"
    } else {
        var myArray = stageData.stageData2[0];
        var stageInfo = myArray.filter(item => item.StageID === stageID);
        var stageName = stageInfo[0].stageName

    }

    return (
        <div>
            <header>
                <IconButton onClick={backClickHandler}>
                    <CaminoReverseArrow className="arrowIcon"/>
                </IconButton>
                <h1 className="stageName">{stageName}</h1>
                <IconButton onClick={forwardClickHandler}><CaminoArrow className="arrowIcon"/></IconButton>
                 
            </header>
            <hr />
            <div className="stageDetails">
                <div className="stageInfoBox">
                    <p className="titleInInfoBox">Time to complete</p>
                    <hr></hr>
                    <div className="stageDataBox">
                        <div  className="iconBox">
                        <ScheduleIcon className="infoIcon"/>
                        </div>
                        <div className="infoDetailBox" >
                            <p className="infoDetail">{hours} hrs</p>
                            <p className="infoDetail">{minutes} mins</p>
                        </div> 
                    </div>
                </div>
                <div className="stageInfoBox">
                    <p className="titleInInfoBox">Distance</p>
                    <hr></hr>
                    <div className="stageDataBox">
                        <div  className="iconBox">
                        <Hiking className="infoIcon"/>
                        </div>
                        <div className="infoDetailBox" >
                            <p className="infoDetail">{kmDistance} km</p>
                            <p className="infoDetail">{mileDistance} miles</p>
                        </div>  
                    </div>
                </div>
                
                <div className="stageInfoBox">
                    <p className="titleInInfoBox">GPS Locations</p>
                    <hr></hr>
                    <div className="stageDataBox">
                        <div  className="iconBox">
                        <GpsFixed className="infoIcon"/>
                        </div>  
                        <div className="infoDetailBox" >
                            <p className="infosubH">Start</p>
                                <a href={"https://www.google.com/maps/dir/?api=1&travelmode=walking&destination="+startLatitude+","+startLongitude} target="_blank">
                                <p className="GPSinfoDetail">{startLatitude} {startLongitude} </p>
                            </a>
                            <p className="infosubH" >Finish</p>
                                <a href={"https://www.google.com/maps/dir/?api=1&travelmode=walking&destination="+finishLatitude+","+finishLongitude} target="_blank">
                                <p className="GPSinfoDetail">{finishLatitude} {finishLongitude} </p>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
            <hr/>
            <div className="stageMap360URL">
            {(w>359 & w<640)? <ImageMapper src={stageMap360URL} map={MAP360}  onClick={area => {setLocationID(area.locationID)}}/>:<div></div>} 

              </div>
              <div className="stageMap640URL">
                {/* <div className="stageMap360URL"> */}
            {(w>639 & w<1024)? <div><ImageMapper src={stageMap640URL} map={MAP640}  onClick={area => {setLocationID(area.locationID)}}/></div>:<div></div> }
                        </div>
            <div>
            {/* <div className="stageMap640URL"> */}
            
            </div>
            <div className="stageMap1024URL">
            {/* <div className="stageMap1024URL"> */}
            {(w>1023 & w<1280)? <ImageMapper src={stageMap1024URL} map={MAP1024}  onClick={area => {setLocationID(area.locationID)}}/>:<div></div>}
            </div>
            <div className="stageMap1280URL">
            {/* <div className="stageMap1280URL"> */}
            {(w>1279 & w<1920)?<ImageMapper src={stageMap1280URL}  map={MAP1280} onClick={area => {setLocationID(area.locationID)}}/>:<div></div> }
            </div>
            <div className="stageMap1920URL">
            {/* <div className="stageMap1920URL"> */}
            {(w>1919)?<ImageMapper src={stageMap1920URL}  map={MAP1920} onClick={area => {setLocationID(area.locationID)}}/>:<div></div> }
            </div>

            {/* <img src={stageMap360URL} className="stageMap360URL" alt="stage map"/>
            <img src={stageMap640URL} className="stageMap640URL" alt="stage map"/>
            <img src={stageMap1024URL} className="stageMap1024URL" alt="stage map"/>
            <img src={stageMap1280URL} className="stageMap1280URL" alt="stage map"/>
            <img src={stageMap1920URL} className="stageMap1920URL" alt="stage map"/> */}
            <hr/>
            <img src={elevationURL} id="elevationImage" alt="elevation profile"/>
            <hr/>
            <StageTable stageData={stageInfo}/>
        </div>
    )
}


export default Stages;