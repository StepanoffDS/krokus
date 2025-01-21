import styles from '@@/react/popups/auth-popups/auth-popups.module.scss';
import Input from '../../inputs/input';
import Button from '../../ui/button';

interface Props {
  className?: string;
}

const LoginForm = ({ className }: Props) => {
  return (
    <div className={className}>
      <form
        className={`${styles['popup-form']} ${styles['popup-form--opened']}`}
      >
        <h2 className={styles['popup-title']}>Login</h2>
        <div className={styles['popup-input']}>
          <Input placeholder="E-pasts" className={styles['input']} />
          {/* <span className={styles['input-error']}>some error</span> */}
        </div>
        <div className={styles['popup-input']}>
          <Input
            placeholder="Parole"
            type="password"
            className={styles['input']}
          />
          {/* <span className={styles['input-error']}>some error</span> */}
        </div>
        <Button type="submit" className={styles['popup-btn']}>
          Login
        </Button>
        <a href="#!" className={styles['popup-link']}>
          Aizmirsu paroli
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
