import API from "../Lib/Axios";
import loginUser from "./Login";

describe("Test loginUser function", () => {
  test("loginUser should return data on successful login", async () => {
    const mockResponse = {
      status: 200,
      data: {
        id: 1,
        username: "emilys",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      },
    };
    API.post.mockResolvedValue(mockResponse);

    const result = await loginUser({ username: "emilys", password: "1234" });

    expect(result).toEqual(mockResponse.data);
    expect(API.post).toHaveBeenCalledWith("/auth/login", expect.any(Object));
  });

  test("loginUser should handle errors gracefully", async () => {
    API.post.mockRejectedValue(new Error("Invalid credentials"));

    const result = await loginUser({
      username: "wrongUser",
      password: "wrongPass",
    });

    expect(result).toBe(null);
  });
});
