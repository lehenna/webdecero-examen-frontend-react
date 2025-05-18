import { minLength, object, pipe, string } from "valibot";
import Field from "./Field/Field";
import Form from "./Form";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          "A reusable form component using react-hook-form with Valibot validation.",
      },
    },
  },
};

const schema = object({
  username: pipe(
    string(),
    minLength(3, "Username must be at least 3 characters")
  ),
  password: pipe(
    string(),
    minLength(6, "Password must be at least 6 characters")
  ),
});

const Template = (args) => (
  <Form
    {...args}
    schema={schema}
    onSubmit={(data) => console.log("Submitted:", data)}
  >
    <Field name="username" render={(props) => <Input {...props} />} />
    <Field
      name="password"
      render={(props) => <Input type="password" {...props} />}
    />
    <Button type="submit">Submit</Button>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
