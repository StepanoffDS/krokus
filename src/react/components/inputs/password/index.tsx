import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../../icons/eye';
import { FormInput } from '../input';
import styles from './password-input.module.scss';

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
}

const PasswordInput = ({ className, id, placeholder }: Props) => {
  const [type, setType] = useState<'password' | 'text'>('password');

  const handleVisibility = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <div className={`${styles['password']} ${className}`}>
      <FormInput type={type} placeholder={placeholder} id={id} />
      <button
        onClick={handleVisibility}
        className={styles['password-visibility']}
      >
        {type === 'password' ? <EyeIcon /> : <EyeOffIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;
