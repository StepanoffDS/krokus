import styles from './input.module.scss';

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  rows?: number;
}

const Textarea = ({ className, ...props }: Props) => {
  return (
    <textarea
      id={props.id}
      className={`${styles['form-input']} ${className}`}
      rows={props.rows}
      {...props}
    />
  );
};

export default Textarea;
