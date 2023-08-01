import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>Button</>,
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: <>Button</>,
    variant: "secondary",
  },
};
