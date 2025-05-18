import Button from "./Button";

const ButtonStory = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Reusable button based on the properties of an HTML <button>.",
      },
    },
  },
  argTypes: {
    children: { control: "text", description: "Button content" },
    type: {
      control: "text",
      description: "Button type (submit, button, reset)",
    },
    disabled: { control: "boolean", description: "Disabled state" },
    onClick: { action: "clicked", description: "Button click event" },
  },
};

export default ButtonStory;

export const Default = (args) => <Button {...args} />;
Default.args = {
  children: "Click Me",
  disabled: false,
};
