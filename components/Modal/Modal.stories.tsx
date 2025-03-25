import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { useState } from "react";

const meta = {
	title: "Components/Modal",
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: function ModalWithTrigger() {
		const [isOpen, setIsOpen] = useState(true);

		return (
			<div>
				<Modal
					heading={"Exciting content"}
					body={"You should send us information so we may help you!"}
					modalOpen={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			</div>
		);
	},
} satisfies Story;
