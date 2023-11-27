import { getTokenFromCookie} from "../common/cookies";

export async function getCoordsData(setCoordsData) {
    try {
      const token = getTokenFromCookie("jwt_token");
      if (token !== "undefined") {
        const response = await fetch(`${process.env.REACT_APP_REST_API}coords`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(data);
        var coordsData = data.coordData;
        await setCoordsData(coordsData); }
      else {
        throw new Error ("token not available")
      }  
      } catch (error) {
      console.log(error);
    }
  }
  ;