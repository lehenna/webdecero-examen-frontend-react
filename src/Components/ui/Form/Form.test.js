import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form";
import Field from "./Field/Field";
import { minLength, object, pipe, string } from "valibot";

const schema = object({
  username: pipe(
    string(),
    minLength(3, "Username must be at least 3 characters")
  ),
});

describe("Form Component", () => {
  test("renders form and fields correctly", () => {
    const onSubmit = jest.fn();
    render(
      <Form schema={schema} onSubmit={onSubmit}>
        <Field name="username" render={(props) => <input {...props} />} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });

  test("validates schema and shows error messages", async () => {
    const onSubmit = jest.fn();
    render(
      <Form schema={schema} onSubmit={onSubmit}>
        <Field name="username" render={(props) => <input {...props} />} />
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.submit(screen.getByRole("form"));

    expect(
      await screen.findByText("Username must be at least 3 characters")
    ).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test("submits form with valid data", async () => {
    const onSubmit = jest.fn();

    render(
      <Form schema={schema} onSubmit={onSubmit}>
        <Field name="username" render={(props) => <input {...props} />} />
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "emilys" },
    });

    await screen.findByDisplayValue("emilys");

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const data = onSubmit.mock.calls[0][0];
    expect(data).toEqual({ username: "emilys" });
  });
});
