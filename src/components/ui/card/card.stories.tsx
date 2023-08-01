import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./";

const meta = {
  title: "Component/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Add</>,
  },
};
