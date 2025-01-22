import { useState } from 'react';
import StarIcon from '../../icons/star-icon';
import styles from './star-rating.module.scss';

interface Props {
  className?: string;
}

const stars = Array(5).fill(0);

const StarRating = ({ className }: Props) => {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleFocusStar = (value: number) => {
    setHoverValue(value);
  };

  const handleMouseLeaveStar = () => {
    setHoverValue(0);
  };

  const handleClickStar = (value: number) => {
    setRating(value);
  };

  return (
    <div className={`${styles['star-rating']} ${className}`}>
      {stars.map((_, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClickStar(index + 1)}
            onMouseLeave={() => handleMouseLeaveStar}
            onMouseEnter={() => handleFocusStar(index + 1)}
          >
            <StarIcon
              fill={(hoverValue || rating) > index ? 'var(--accent)' : 'none'}
              stroke={(hoverValue || rating) > index ? 'none' : 'var(--black)'}
              size={20}
              className={styles['star']}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
