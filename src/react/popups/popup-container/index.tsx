import { useCallback, useEffect, useRef } from 'react';
import useClickOutside from '@@/scripts/hooks/use-click-outside';
import CloseIcon from '@@/react/components/icons/close-icon';
import { togglePopup } from '@@/scripts/helpers/toggle-popup';

import styles from './popup-container.module.scss';

interface Props {
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const PopupContainer = ({ className, children, isOpen, setIsOpen }: Props) => {
	const popupRef = useRef<HTMLDivElement>(null);

	useClickOutside({
		ref: popupRef,
		handler: () => {
			if (isOpen) {
				togglePopup({
					setIsOpen,
					isOpen,
				});
			}
		},
	});

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				togglePopup({ setIsOpen, isOpen });
			}
		},
		[isOpen, setIsOpen],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, handleKeyDown]);

	return (
		<dialog
			open={isOpen}
			className={`${styles['popup']} ${className} ${
				isOpen ? styles['popup--open'] : ''
			}`}
		>
			<div className={styles['popup-content']} ref={popupRef}>
				<header className={styles['popup-header']}>
					<button onClick={() => togglePopup({ setIsOpen, isOpen })}>
						<CloseIcon />
					</button>
				</header>

				<main className={styles['popup-main']}>{children}</main>
			</div>
		</dialog>
	);
};

export default PopupContainer;
