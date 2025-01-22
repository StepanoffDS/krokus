import { useRef, useState } from 'react';
import MenuIcon from '../../icons/menu-icon';
import styles from './mobile-menu.module.scss';
import { NAVS, tels } from '@@/constants/company-info';
import CloseIcon from '../../icons/close-icon';
import ProfileBtn from '../header/header-nav-btns/profile-btn';
import LikeBtn from '../header/header-nav-btns/like-btn';
import HeaderBin from '../header/header-bin';
import MiniLogoIcon from '../../icons/mini-logo-icon';
import { formatTel } from '@@/scripts/helpers/utils';
import HeaderLangs from '../header/header-langs';
import { useClickOutside } from '@@/scripts/hooks/use-click-outside';
import OpenAuthPopupBtn from '@@/react/popups/auth-popups/open-auth-popup-btn';

interface Props {
  className?: string;
}

const token = '';

const MobileMenu = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';

    const classListAction = !isOpen ? 'add' : 'remove';
    document.body.classList[classListAction]('overlay');
  };

  useClickOutside({
    ref: menuRef,
    handler: () => {
      if (isOpen) {
        toggleMenu();
      }
    },
  });

  return (
    <div className={className}>
      <button className={styles['menu-btn']} onClick={toggleMenu}>
        <MenuIcon />
      </button>
      <div
        className={`${styles['menu']} ${isOpen ? styles['open'] : ''}`}
        ref={menuRef}
      >
        <header className={styles['menu-header']}>
          <MiniLogoIcon />

          <div className={styles['header-btns']}>
            {token ? (
              <ProfileBtn />
            ) : (
              <OpenAuthPopupBtn child={<ProfileBtn />} />
            )}
            <LikeBtn />

            <HeaderBin />
            <button className={styles['menu-btn']} onClick={toggleMenu}>
              <CloseIcon />
            </button>
          </div>
        </header>
        <nav className={styles['nav']}>
          {NAVS[1].links.map(({ name, link }) => (
            <a key={link} href={link} className={styles['nav-link']}>
              {name}
            </a>
          ))}
        </nav>
        <footer className={styles['footer']}>
          {tels.map((tel) => (
            <a key={tel} href={formatTel(tel)} className={styles['phone']}>
              {tel}
            </a>
          ))}

          <HeaderLangs />
        </footer>
      </div>
    </div>
  );
};

export default MobileMenu;
