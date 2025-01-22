import { useLocation } from 'react-router';
import styles from './header-nav-btns.module.scss';
import ProfileIcon from '@@/react/components/icons/profile-icon';

interface Props {
  className?: string;
}

const ProfileBtn = ({ className }: Props) => {
  const { pathname } = useLocation();

  return (
    <a
      href="#!"
      className={`${styles['header-nav-btn']} ${
        pathname.startsWith('/profile') ? styles['header-nav-btn--accent'] : ''
      } ${className}`}
    >
      <ProfileIcon />
    </a>
  );
};

export default ProfileBtn;
