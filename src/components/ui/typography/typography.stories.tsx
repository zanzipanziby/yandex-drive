import { Typography } from "./typography.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
