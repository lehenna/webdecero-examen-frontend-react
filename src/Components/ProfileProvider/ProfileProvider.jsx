import { useEffect } from "react";
import ProfileContext from "../../Contexts/Profile";
import useProfile from "../../Hooks/Profile";
import { useLocation, useNavigate } from "react-router";

const ProfileProvider = ({ children }) => {
  const { loading, profile, setProfile, fetchProfile } = useProfile();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (loading) return;
    if (!profile && location.pathname !== "/login") navigate("/login");
    if (profile && location.pathname === "/login") navigate("/");
  }, [loading, profile, navigate, location]);
  return (
    <ProfileContext.Provider
      value={{ loading, profile, setProfile, fetchProfile }}
    >
      {loading ? <span className="loader-text">CARGANDO...</span> : children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
