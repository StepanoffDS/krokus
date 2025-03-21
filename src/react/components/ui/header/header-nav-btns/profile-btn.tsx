import { useLocation } from 'react-router';
import ProfileIcon from '@@/react/components/icons/profile-icon';

import styles from './header-nav-btns.module.scss';

interface Props {
	className?: string;
}

const ProfileBtn = ({ className }: Props) => {
	const { pathname } = useLocation();

	return (
		<a
			href='#!'
			className={`${styles['header-nav-btn']} ${
				pathname.startsWith('/profile') ? styles['header-nav-btn--accent'] : ''
			} ${className}`}
		>
			<ProfileIcon />
		</a>
	);
};

export default ProfileBtn;
