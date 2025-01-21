import styles from '@@/react/popups/auth-popups/auth-popups.module.scss';
import Input from '../../inputs/input';
import Button from '../../ui/button';
import PhoneInput from '../../inputs/phone';
import PasswordInput from '../../inputs/password';

interface Props {
  className?: string;
}

const RegisterForm = ({ className }: Props) => {
  return (
    <div className={className}>
      <form
        className={`${styles['popup-form']} ${styles['popup-form--opened']}`}
      >
        <h2 className={styles['popup-title']}>Register</h2>
        <div className={styles['popup-input']}>
          <Input
            placeholder="Name, Surname"
            type="text"
            className={styles['input']}
          />
          {/* <span className={styles['input-error']}>some error</span> */}
        </div>
        <div className={styles['popup-input']}>
          <Input placeholder="E-pasts" className={styles['input']} />
        </div>
        <div className={styles['popup-input']}>
          <PhoneInput hasLabel={false} />
        </div>
        <div className={styles['popup-input']}>
          <PasswordInput id="password" placeholder="Password" />
        </div>
        <div className={styles['popup-input']}>
          <PasswordInput id="repeatPassword" placeholder="Repeat password" />
        </div>
        <Button type="submit" className={styles['popup-btn']}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
