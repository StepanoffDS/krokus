import { profileRoutes } from '@@/constants/routing';
import AsideContainer from '@@/react/components/containers/aside-container';
import ArrowMenu from '@@/react/components/icons/arrow-menu';
import { Link, useLocation, useNavigate } from 'react-router';
import styles from './profile-navigate.module.scss';

const ProfileNavigate = () => {
  const { pathname } = useLocation();

  return (
    <AsideContainer
      header={
        <>
          Personal data <ArrowMenu />
        </>
      }
    >
      <div className={styles['list']}>
        {profileRoutes.map((route) => (
          <Link
            key={route.link}
            to={route.link}
            className={`${styles['link']} ${
              route.link === pathname && styles['link--active']
            }`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </AsideContainer>
  );
};

export default ProfileNavigate;
