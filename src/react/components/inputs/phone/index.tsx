import styles from './phone.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const PhoneInputContainer = ({ children, className }: Props) => {
  return <div className={`${styles['phone']} ${className}`}>{children}</div>;
};

export default PhoneInputContainer;
