import { getTokenFromCookie} from "../common/cookies";

export async function getStageData(setStageData) {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_REST_API}stageData`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setStageData(data);
  } catch (error) {
    console.log(error);
  }
};
