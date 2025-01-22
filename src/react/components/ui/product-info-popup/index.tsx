import styles from './product-info-popup.module.scss';

interface Props {
  className?: string;
  img: string;
  id: string;
  desc: string;
  date: string;
}

const ProductInfoPopup = ({ className, img, id, desc, date }: Props) => {
  return (
    <div className={`${styles['item']} ${className}`}>
      <img src={img} alt={desc} className={styles['item-img']} />
      <div className={styles['item-info']}>
        <h3 className={styles['item-title']}>{id}</h3>
        <p className={styles['item-desc']}>{desc}</p>
        <p className={styles['item-date']}>{date}</p>
      </div>
    </div>
  );
};

export default ProductInfoPopup;
