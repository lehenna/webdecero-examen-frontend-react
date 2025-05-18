import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("renders Card with correct children", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  test("applies correct class names", () => {
    render(<Card className="custom-class">Styled Card</Card>);
    const card = screen.getByText("Styled Card");

    expect(card).toHaveClass("card");
    expect(card).toHaveClass("custom-class");
  });

  test("renders as a different HTML element", () => {
    render(<Card as="section">Section Card</Card>);
    const card = screen.getByText("Section Card");

    expect(card.tagName.toLowerCase()).toBe("section");
  });

  test("allows ref forwarding", () => {
    const ref = { current: null };
    render(<Card ref={ref}>With Ref</Card>);

    expect(ref.current).not.toBeNull();
    expect(ref.current.nodeName).toBe("DIV");
  });

  test("accepts standard HTML attributes", () => {
    render(
      <Card data-testid="card-component" aria-label="Accessible Card">
        Accessible
      </Card>
    );
    const card = screen.getByTestId("card-component");

    expect(card).toHaveAttribute("aria-label", "Accessible Card");
  });
});
