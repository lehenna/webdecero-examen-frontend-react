import API from "../Lib/Axios";

const loginUser = async ({ username, password }) => {
  try {
    const response = await API.post("/auth/login", {
      username,
      password,
      expiresInMins: 45,
    });

    if (response.status < 200 || response.status >= 300) return null;

    return response.data;
  } catch (error) {
    return null;
  }
};

export default loginUser;
