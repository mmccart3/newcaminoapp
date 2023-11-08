import { getTokenFromCookie} from "../common/cookies";

export async function getLocationData (setLocationData) {
    try {
      const token = getTokenFromCookie("jwt_token");
      const response = await fetch(`${process.env.REACT_APP_REST_API}location`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
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
        const token = getTokenFromCookie("jwt_token");
        const response = await fetch(`${process.env.REACT_APP_REST_API}coords`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
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
      const token = getTokenFromCookie("jwt_token");
      const response = await fetch(`${process.env.REACT_APP_REST_API}stageData`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
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
      const token = getTokenFromCookie("jwt_token");
        const response = await fetch(`${process.env.REACT_APP_REST_API}stage`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        const myTemp = data.stageData[0].locations
        setStageLocationData(myTemp);
    } catch (error) {
        console.log(error);
    }
};
    

