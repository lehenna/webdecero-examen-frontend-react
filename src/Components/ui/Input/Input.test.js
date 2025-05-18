import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("renders correctly", () => {
    render(<Input placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  test("accepts standard input props", () => {
    render(<Input type="password" aria-label="Password Input" />);
    const input = screen.getByLabelText("Password Input");

    expect(input).toHaveAttribute("type", "password");
  });

  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
