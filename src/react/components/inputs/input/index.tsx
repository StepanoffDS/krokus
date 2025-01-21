import styles from './input.module.scss';

interface Props {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'number';
  id?: string;
}

interface FormInputProps extends Props {
  label?: string;
}

export const FormInput = ({
  type = 'text',
  placeholder,
  id,
  className,
  label,
}: FormInputProps) => {
  return (
    <div className={`${styles['form-group']} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles['form-label']}>
          {label}
        </label>
      )}
      <input
        className={styles['form-input']}
        type={type}
        placeholder={placeholder}
        id={id}
      />
      <span className={styles['form-error']}></span>
    </div>
  );
};

const Input = ({ className, placeholder, type = 'text', id }: Props) => {
  return (
    <div className={`${styles['form-group']} ${className}`}>
      <input
        className={styles['form-input']}
        type={type}
        placeholder={placeholder}
        id={id}
      />
      <span className={styles['form-error']}></span>
    </div>
  );
};

export default Input;
