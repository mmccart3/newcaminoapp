import React from "react";
import { useState } from "react";
import './Stages.css';
import StageTable from "../components/StageTable";
import { getStageData } from "../utils/getStageData";
import Button from '@mui/material/Button';
import { CaminoArrow } from '../images/icons/caminoArrow';
import { CaminoReverseArrow } from '../images/icons/caminoReverseArrow';
import { IconContext } from 'react-icons';
import IconButton from "@mui/material/IconButton";
import ScheduleIcon from '@mui/icons-material/Schedule';
import Hiking from '@mui/icons-material/Hiking';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { getStageDetails } from "../utils/getStageDetails";
import { GpsFixed } from "@mui/icons-material";



function Stages ({priorStage, nextStage, setPriorStage, setNextStage, stageData, stageID, setStageID, setStageData, setStageDetails, stageDetails}) {
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
  
    var stageDetailsInfo = stageDetails.filter(item => item.ID === stageID);
    if (typeof stageDetailsInfo[0] === "undefined") {
        var elevationURL = ""
        getStageDetails(setStageDetails,stageDetails)
        kmDistance = 0;
        mileDistance = 0;
    } else {
        stageDetailsInfo = stageDetails.filter(item => item.ID === stageID);
        elevationURL = stageDetailsInfo[0].stageElevationChartURL
        var kmDistance = Math.round(stageDetailsInfo[0].stageDistanceInMetres / 100)/10;
        var mileDistance = Math.round(stageDetailsInfo[0].stageDistanceInMetres / 160.9)/10;
        var hours = Math.floor(stageDetailsInfo[0].stageTimeInMinutes/60);
        var minutes = stageDetailsInfo[0].stageTimeInMinutes -(hours*60);
        var longitude = stageDetailsInfo[0].longitude
        var latitude = stageDetailsInfo[0].latitude

    }

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
                    <p className="titleInInfoBox">GPS Start Location</p>
                    <hr></hr>
                    <div className="stageDataBox">
                        <div  className="iconBox">
                        <GpsFixed className="infoIcon"/>
                        </div>  
                        <div className="infoDetailBox" >
                            <p className="infoDetail">{latitude} </p>
                            <p className="infoDetail">{longitude} </p>
                        </div>  
                    </div>

                </div>
            </div>
            <hr/>
            <img src={elevationURL} id="elevationImage" alt="elevation profile"/>
            <hr/>
            <StageTable stageData={stageInfo}/>
        </div>
    )
}

export default Stages;