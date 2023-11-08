import { writeCookie } from "../common/cookies";

export const registerUser = async (email, password) => {
    //   console.log(process.env.REACT_APP_BASE_URL);
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
      console.log(data);

      writeCookie("jwt_token", data.token, 7);
    } catch (error) {
      console.log(error);
    }
  };