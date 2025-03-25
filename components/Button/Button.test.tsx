import * as React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
	it("renders Button component", () => {
		render(<Button>Click me</Button>);
	});
});
