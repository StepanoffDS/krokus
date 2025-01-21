import styles from './listing-container.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const ListingContainer = ({ className, children }: Props) => {
  return (
    <div className={className}>
      <div className={styles['wrapper']}>{children}</div>
    </div>
  );
};

export default ListingContainer;
