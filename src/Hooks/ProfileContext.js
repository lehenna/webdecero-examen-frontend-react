import { useContext } from "react";
import ProfileContext from "../Contexts/Profile";

const useProfileContext = () => {
  return useContext(ProfileContext);
};

export default useProfileContext;
