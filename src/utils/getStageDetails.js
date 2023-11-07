export async function getStageDetails(setStageDetails,stageDetails) {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}stageDetail`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
      });
      const data = await response.json();
      var stagedet = data.stageDetails[0];
      await setStageDetails(stagedet);
    } catch (error) {
      console.log(error);
    }
  }
  ;