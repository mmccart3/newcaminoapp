import { getTokenFromCookie} from "../common/cookies";

export async function getStageDetails(setStageDetails,stageDetails) {
    try {
      const token = getTokenFromCookie("jwt_token");
      if (token !== "undefined") {
        const response = await fetch(`${process.env.REACT_APP_REST_API}stageDetail`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        var stagedet = data.stageDetails[0];
        await setStageDetails(stagedet); }
      else {
        throw new Error ("token not available")
      }  
      } catch (error) {
      console.log(error);
    }
  }
  ;