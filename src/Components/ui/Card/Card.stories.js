import Card from "./Card";

const CardStory = {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Reusable Card based on the properties of an HTML <div>.",
      },
    },
  },
  argTypes: {
    children: { control: "text", description: "Card content" },
    as: {
      control: "select",
      options: ["div", "article", "section"],
      description: "HTML tag used for the card",
    },
  },
};

export default CardStory;

export const Default = (args) => <Card {...args} />;
Default.args = {
  children: "I am a card",
  as: "article",
};
