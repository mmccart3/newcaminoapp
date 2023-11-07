// import { setPreviousData } from "./setPreviousData";

export async function getLocationData (setLocationData) {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}location`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
      });
      const data = await response.json();
      setLocationData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
};
  
export async function getCoordsData (setCoordsData)  {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}coords`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
      });
      const data = await response.json();
      setCoordsData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
};
  
export async function getStageBasicData (setStageBasicData) {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}stageData`, {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
        });
        const data = await response.json();
        const myTemp = data.stageData
        setStageBasicData(myTemp);
    } catch (error) {
        console.log(error);
    }
};
  
export async function getStageLocationData (setStageLocationData) {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}stage`, {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
        });
        const data = await response.json();
        const myTemp = data.stageData[0].locations
        setStageLocationData(myTemp);
    } catch (error) {
        console.log(error);
    }
};
    

