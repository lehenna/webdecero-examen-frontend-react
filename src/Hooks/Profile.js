import { useCallback, useEffect, useState } from "react";
import getUserProfile from "../Api/Profile";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setLoading(false);
      return;
    }
    const response = await getUserProfile({ token });
    if (!response) {
      setLoading(false);
      return;
    }
    setProfile(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    loading,
    profile,
    setProfile,
    fetchProfile,
  };
};

export default useProfile;
