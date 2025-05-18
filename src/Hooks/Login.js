import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

/**
 * Reusable authentication Hook.
 * Separate the redirect and profile authentication logic.
 */
const useLogin = (authenticate, updateProfile) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (data, methods) => {
      setLoading(true);

      try {
        const response = await authenticate(data);

        if (!response || !response.accessToken) {
          methods.setError("root", {
            message: "Usuario o contraseña incorrectos",
          });
          return;
        }

        localStorage.setItem("accessToken", response.accessToken);
        updateProfile();
        navigate("/");
      } catch (error) {
        methods.setError("root", {
          message: "Error de conexión. Intenta de nuevo.",
        });
      } finally {
        setLoading(false);
      }
    },
    [authenticate, navigate, updateProfile]
  );

  return { onSubmit, loading };
};

export default useLogin;
