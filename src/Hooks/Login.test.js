import { renderHook, act } from "@testing-library/react";
import useLogin from "./Login";

const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("useLogin Hook", () => {
  let mockAuthenticate;
  let mockUpdateProfile;

  beforeEach(() => {
    mockAuthenticate = jest.fn();
    mockUpdateProfile = jest.fn();
  });

  test("calls authenticate and updates profile on success", async () => {
    mockAuthenticate.mockResolvedValue({ accessToken: "12345" });

    const { result } = renderHook(() =>
      useLogin(mockAuthenticate, mockUpdateProfile)
    );

    await act(async () => {
      await result.current.onSubmit(
        { username: "test", password: "1234" },
        { setError: jest.fn() }
      );
    });

    expect(mockAuthenticate).toHaveBeenCalledWith({
      username: "test",
      password: "1234",
    });
    expect(mockUpdateProfile).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("handles authentication failure with error", async () => {
    mockAuthenticate.mockResolvedValue(null);
    const mockSetError = jest.fn();

    const { result } = renderHook(() =>
      useLogin(mockAuthenticate, mockUpdateProfile)
    );

    await act(async () => {
      await result.current.onSubmit(
        { username: "test", password: "wrongpass" },
        { setError: mockSetError }
      );
    });

    expect(mockAuthenticate).toHaveBeenCalled();
    expect(mockSetError).toHaveBeenCalledWith("root", {
      message: "Usuario o contraseña incorrectos",
    });
    expect(mockUpdateProfile).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test("toggles loading state correctly", async () => {
    mockAuthenticate.mockResolvedValue({ accessToken: "12345" });

    const { result } = renderHook(() =>
      useLogin(mockAuthenticate, mockUpdateProfile)
    );

    await act(async () => {
      const submitPromise = result.current.onSubmit(
        { username: "test", password: "1234" },
        { setError: jest.fn() }
      );

      await submitPromise;

      expect(result.current.loading).toBe(false);
    });
  });
});
