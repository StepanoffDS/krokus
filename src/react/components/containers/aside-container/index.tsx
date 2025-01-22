import { useEffect, useState } from 'react';
import Button from '../../ui/button';
import styles from './aside-container.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  header: React.ReactNode;
}

const AsideContainer = ({ className, children, header }: Props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 820px)');
    const listener = () => setOpen(media.matches);
    media.addEventListener('change', listener);
    listener();
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <aside className={`${styles['aside']} ${className}`}>
      <details open={open} className={styles['wrapper']}>
        <summary className={styles['header']} onClick={handleToggle}>
          <Button variant="outline" className={styles['header-btn']}>
            {header}
          </Button>
        </summary>
        <div className={styles['inner']}>{children}</div>
      </details>
    </aside>
  );
};

export default AsideContainer;
