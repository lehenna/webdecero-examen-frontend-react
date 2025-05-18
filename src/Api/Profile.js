import API from "../Lib/Axios";

const getUserProfile = async ({ token }) => {
  try {
    const response = await API.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status < 200 || response.status >= 300) return null;
    return response.data;
  } catch (error) {
    return null;
  }
};

export default getUserProfile;
