import axios from "axios";

export const signupUsers = async (body) => {
  const url = "http://localhost:4000/users";
  try {
    const userSignupData = await axios.post(url, body);

    if (!userSignupData) {
      throw new Error("User Not Found!");
    }

    return userSignupData;
  } catch (error) {
    if (error.response.status === 400) {
      window.alert("User already Exist!");
    }
  }
};

export const loginUsers = async (body) => {
  const url = "http://localhost:4000/login";
  try {
    const userSignupData = await axios.post(url, body);

    if (!userSignupData) {
      throw new Error("User Not Found!");
    }

    return userSignupData;
  } catch (error) {
    if (error.response.status === 404) {
      window.alert("Email or Password is Wrong!");
    }
  }
};

export const logoutUser = async (body) => {
  const url = "http://localhost:4000/logout";
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `${body}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const forgetPassword = async (body) => {
  const url = "http://localhost:4000/fpassword";
  try {
    const userSignupData = await axios.post(url, body);

    if (!userSignupData) {
      throw new Error("User Not Found!");
    }

    return userSignupData;
  } catch (error) {
    if (error.response.status === 404) {
      window.alert("Please Check your Email!");
    }
  }
};

export const resetUserPassword = async (body) => {
  const url = "http://localhost:4000/Rpassword";
  try {
    const userSignupData = await axios.post(url, body);

    if (!userSignupData) {
      throw new Error("User Not Found!");
    }

    return userSignupData;
  } catch (error) {
    if (error.response.status === 400) {
      window.alert("Entries are Wrong!");
    }
  }
};
