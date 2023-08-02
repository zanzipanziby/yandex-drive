import { Meta, StoryObj } from "@storybook/react";
import { FileUploader } from "./";

const meta = {
  title: "Component/FileUpload",
  component: FileUploader,
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
