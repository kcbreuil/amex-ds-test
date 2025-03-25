import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: <span>Click me</span>,
	},
};
