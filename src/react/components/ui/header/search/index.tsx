import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';
import CloseIcon2 from '@@/react/components/icons/close-icon-2';
import SearchIcon2 from '@@/react/components/icons/search-icon-2';

import styles from './search.module.scss';

interface Props {
	type: 'desktop' | 'mobile';
}

const Search = ({ type }: Props) => {
	const { setIsOpen, isOpen } = useComponentsStore(
		useShallow((state) => ({
			isOpen: state.isOpenSearch,
			setIsOpen: state.setIsOpenSearch,
		})),
	);

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<label
					htmlFor='search'
					className={`${styles['search']} ${styles[type]}`}
				>
					<div className='container'>
						<div className={styles['search-inner']}>
							<input
								name='search'
								id='search'
								placeholder='Search'
								className={styles['search-input']}
							/>
							<div className={styles['icons']}>
								<button className={styles['btn']}>
									<SearchIcon2 />
								</button>
								<button className={styles['btn']} onClick={onClose}>
									<CloseIcon2 />
								</button>
							</div>
						</div>
					</div>
				</label>
			)}
		</>
	);
};

export default Search;
