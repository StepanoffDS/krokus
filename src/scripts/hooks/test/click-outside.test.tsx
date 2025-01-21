import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useClickOutside } from "../use-click-outside";

const ClickOutsideComponent = ({ onOutsideClick }) => {
	const ref = useRef(null);
	useClickOutside({ ref, handler: onOutsideClick });

	return (
		<div
			ref={ref}
			style={{ width: "200px", height: "200px", backgroundColor: "lightgray" }}>
			Click outside me!
		</div>
	);
};

describe("ClickOutsideComponent", () => {
	afterEach(cleanup);

	it("Вызов ф-ции onOutsideClick, когда происходит клик вне компонента", () => {
		const handleOutsideClick = vi.fn();
		render(<ClickOutsideComponent onOutsideClick={handleOutsideClick} />);

		fireEvent.mouseDown(document);

		expect(handleOutsideClick).toHaveBeenCalled();
	});

	it("Ф-ция onOutsideClick не вызывает, если клик был внутри компонента", () => {
		const handleOutsideClick = vi.fn();
		render(<ClickOutsideComponent onOutsideClick={handleOutsideClick} />);

		fireEvent.mouseDown(screen.getByText("Click outside me!"));

		expect(handleOutsideClick).not.toHaveBeenCalled();
	});
});
