import SearchIcon from '@@/react/components/icons/search-icon';

import styles from './header-nav-btns.module.scss';

interface Props {
	className?: string;
}

const SearchBtn = ({ className }: Props) => {
	return (
		<a href='#!' className={`${styles['header-nav-btn']} ${className}`}>
			<SearchIcon />
		</a>
	);
};

export default SearchBtn;
