import { fireEvent, render, screen } from "@testing-library/react";
import Field from "./Field";
import Form from "../Form";
import { email, object, pipe, string } from "valibot";

const schema = object({
  email: pipe(string(), email("Invalid email address")),
});

const Wrapper = ({ children }) => {
  return (
    <Form onSubmit={jest.mock} schema={schema}>
      {children}
    </Form>
  );
};

describe("Field Component", () => {
  test("renders field with correct props", () => {
    render(
      <Wrapper>
        <Field
          name="username"
          render={(props) => <input placeholder="Username" {...props} />}
        />
      </Wrapper>
    );

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });

  test("shows validation error", async () => {
    render(
      <Wrapper>
        <Field
          name="email"
          render={(props) => <input type="email" {...props} />}
        />
      </Wrapper>
    );

    fireEvent.submit(screen.getByRole("form"));

    expect(await screen.findByText(/invalid/i)).toBeInTheDocument();
  });
});
