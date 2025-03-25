import * as React from "react";
import "./Button.css";

export type ButtonProps = {
	/**
	 * CSS class names that can be appended to the component.
	 */
	children?: React.ReactNode;
	/**
	 * CSS class names that can be appended to the component.
	 */
	onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
	<button className="amex-ds-button" onClick={onClick}>
		{children}
	</button>
);

export default Button;
