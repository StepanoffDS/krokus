import { useCallback, useEffect } from "react";

interface Props {
	ref: React.RefObject<HTMLElement>;
	handler: () => void;
}

export const useClickOutside = ({ ref, handler }: Props) => {
	const handleClick = useCallback(
		(event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node | null)) {
				handler();
			}
		},
		[handler, ref],
	);

	useEffect(() => {
		// mousedown
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [handleClick]);
};
