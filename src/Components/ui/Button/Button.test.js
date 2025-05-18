import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  test("calls onClick handler when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("allows ref forwarding", () => {
    const ref = { current: null };
    render(<Button ref={ref}>With Ref</Button>);

    expect(ref.current).not.toBeNull();
    expect(ref.current.nodeName).toBe("BUTTON");
  });
});
