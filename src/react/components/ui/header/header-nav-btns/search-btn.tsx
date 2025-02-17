import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';
import SearchIcon from '@@/react/components/icons/search-icon';

import styles from './header-nav-btns.module.scss';

interface Props {
	className?: string;
}

const SearchBtn = ({ className }: Props) => {
	const { setIsOpen, isOpen } = useComponentsStore(
		useShallow((state) => ({
			isOpen: state.isOpenSearch,
			setIsOpen: state.setIsOpenSearch,
		})),
	);

	return (
		<button
			className={`${styles['header-nav-btn']} ${
				isOpen && styles['header-nav-btn--open']
			} ${className}`}
			onClick={() => setIsOpen(!isOpen)}
		>
			<SearchIcon />
		</button>
	);
};

export default SearchBtn;
