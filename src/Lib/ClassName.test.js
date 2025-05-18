import cn from "./ClassName";

describe("Test cn function", () => {
  test("cn should return a string", async () => {
    const result = cn("class1", "class2");

    expect(result).toEqual("class1 class2");
  });
});
