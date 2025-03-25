import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
	const mockClose = jest.fn();

	test("renders Modal", async () => {
		render(<Modal modalOpen={true} />);
		expect(screen.getByRole("dialog")).toBeInTheDocument();
	});
	test("renders modal with expected controls", () => {
		render(<Modal modalOpen={true} />);
		expect(screen.getByRole("dialog")).toBeInTheDocument();
		expect(screen.getByRole("heading")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
	});

	describe("when passed onClose handler", () => {
		test("calls onClose action when pressing the ESC key", () => {
			render(<Modal modalOpen={true} onClose={mockClose} />);
			fireEvent.keyDown(screen.getByRole("dialog"), {
				key: "Escape",
				code: "Escape",
			});
			expect(mockClose).toHaveBeenCalledTimes(1);
		});
	});
});
