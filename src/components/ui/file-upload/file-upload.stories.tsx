import { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./file-upload.tsx";

const meta = {
  title: "Component/FileUpload",
  component: FileUpload,
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
