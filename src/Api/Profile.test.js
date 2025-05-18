import API from "../Lib/Axios";
import getUserProfile from "./Profile";

describe("Test getUserProfile function", () => {
  test("getUserProfile should return user data", async () => {
    const mockResponse = { data: { id: 1, name: "some name" } };
    API.get.mockResolvedValue(mockResponse);

    const result = await getUserProfile({ token: "123abc" });

    expect(result).toEqual(mockResponse.data);
    expect(API.get).toHaveBeenCalledWith("/auth/me", expect.any(Object));
  });
});
