export async function getStageData(setStageData) {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}stageData`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setStageData(data);
  } catch (error) {
    console.log(error);
  }
}
;
