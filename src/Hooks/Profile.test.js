import { renderHook, act } from "@testing-library/react";
import useProfile from "./Profile";
import getUserProfile from "../Api/Profile";

jest.mock("../Api/Profile");

describe("useProfile Hook", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
  });

  test("loading state remains true during fetchProfile execution", async () => {
    localStorage.setItem("accessToken", "mockToken");

    getUserProfile.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ firstName: "John", lastName: "Doe" }), 500)
        )
    );

    const { result } = renderHook(() => useProfile());

    await act(async () => {
      const fetchPromise = result.current.fetchProfile();

      expect(result.current.loading).toBe(true);

      await fetchPromise;
    });

    expect(result.current.loading).toBe(false);
  });

  test("fetchProfile updates profile correctly when token exists", async () => {
    localStorage.setItem("accessToken", "mockToken");
    getUserProfile.mockResolvedValue({ firstName: "John", lastName: "Doe" });

    const { result } = renderHook(() => useProfile());

    await act(async () => {
      await result.current.fetchProfile();
    });

    expect(result.current.profile).toEqual({
      firstName: "John",
      lastName: "Doe",
    });
    expect(result.current.loading).toBe(false);
  });

  test("fetchProfile does not update profile when token is missing", async () => {
    const { result } = renderHook(() => useProfile());

    await act(async () => {
      await result.current.fetchProfile();
    });

    expect(result.current.profile).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  test("fetchProfile handles API failure correctly", async () => {
    localStorage.setItem("accessToken", "mockToken");
    getUserProfile.mockResolvedValue(null);

    const { result } = renderHook(() => useProfile());

    await act(async () => {
      await result.current.fetchProfile();
    });

    expect(result.current.profile).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  test("loading state updates correctly during fetchProfile execution", async () => {
    localStorage.setItem("accessToken", "mockToken");
    getUserProfile.mockResolvedValue({ firstName: "John", lastName: "Doe" });

    const { result } = renderHook(() => useProfile());

    await act(async () => {
      const fetchPromise = result.current.fetchProfile();
      expect(result.current.loading).toBe(true);
      await fetchPromise;
    });

    expect(result.current.loading).toBe(false);
  });
});
