import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
  },
  parameters: {
    docs: {
      description: {
        component: "A reusable input component that supports forwardRef.",
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: "custom-input",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Enter password...",
};
