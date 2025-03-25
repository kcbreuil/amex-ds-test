/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import classNames from "classnames";
import "./Modal.css";
import { useCallback, useEffect } from "react";

type ModalProps = {
	/**
	 * CSS class names that can be appended to the component.
	 */
	className?: string;
	/**
	 * Header for Modal
	 */
	heading?: React.ReactNode;
	/**
	 * Body of modal
	 */
	body?: React.ReactNode;
	/**
	 * Optional footer for Modal
	 */
	footer?: React.ReactNode;
	/**
	 * onClose handler for modal
	 */
	onClose?: () => void;
	/**
	 * Modal is open if true, false otherwise
	 */
	modalOpen?: boolean;
};

/**
 * Displays content to user over current page
 */
export function Modal({
	className,
	heading,
	body,
	footer,
	onClose,
	modalOpen,
	...props
}: ModalProps) {
	if (!modalOpen) return null;

	const escClose = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose?.();
			}
		},
		[onClose]
	);

	useEffect(() => {
		document.addEventListener("keydown", escClose);

		return () => {
			document.removeEventListener("keydown", escClose);
		};
	}, [escClose]);

	return (
		<div
			role="dialog"
			onClick={onClose}
			aria-label="dialog"
			className={classNames("amex-ds-modal", className)}
			{...props}>
			<div className="amex-ds-modal--content">
				<button
					aria-label="Close"
					onClick={onClose}
					className="amex-ds-modal--close-button">
					&times;
				</button>
				<div role="heading" aria-level={1} className="amex-ds-modal--header">
					{heading}
				</div>
				<div className="amex-ds-modal--body">{body}</div>
				<div className="amex-ds-modal--footer">{footer}</div>
			</div>
		</div>
	);
}
