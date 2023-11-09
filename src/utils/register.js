import { writeCookie } from "../common/cookies";

export const registerUser = async (email, password,firstName, lastName, setFirstName) => {
    //   console.log(process.env.REACT_APP_BASE_URL);
    try {
      console.log(email, password, firstName, lastName)
      const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        }),
      });
  
      const data = await response.json();
      console.log(data);
      setFirstName(data.user.firstName);
      writeCookie("jwt_token", data.token, 7);
    } catch (error) {
      console.log(error);
    }
  };