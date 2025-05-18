import { useCallback } from "react";
import useProfileContext from "../../Hooks/ProfileContext";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const navigate = useNavigate();
  const context = useProfileContext();
  if (!context)
    throw new Error("LogoutButton must be used within a ProfileProvider");
  const { setProfile } = context;
  const onClick = useCallback(() => {
    localStorage.removeItem("accessToken");
    setProfile(null);
    navigate("/login");
  }, [setProfile, navigate]);
  return (
    <button onClick={onClick} className="logout-button">
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
