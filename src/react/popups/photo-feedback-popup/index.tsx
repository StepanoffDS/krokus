import { togglePopup } from '@@/scripts/helpers/toggle-popup';
import PhotoFeedbackForm from '@@/react/components/forms/photo-feedback-form';
import product from '@@/react/components/illustrations/product.png';
import Button from '@@/react/components/ui/button';
import ProductInfoPopup from '@@/react/components/ui/product-info-popup';

import PopupContainer from '../popup-container';

import styles from './photo-feedback-popup.module.scss';

interface Props {
	id: number;
	className?: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const PhotoFeedbackPopup = ({ id, className, isOpen, setIsOpen }: Props) => {
	const handleClick = () => {
		togglePopup({ setIsOpen, isOpen });
	};

	return (
		<div className={className}>
			<Button onClick={handleClick}>Leave</Button>
			<PopupContainer
				className={styles['popup-container']}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<div className={styles['popup-main']}>
					<section className={`${styles['popup-section']}`}>
						<ProductInfoPopup
							img={product}
							id={980778980}
							desc='Red roses big bouquet'
							date='23.04.2024'
						/>
					</section>
					<section className={`${styles['popup-section']}`}>
						<h3 className={styles['form-title']}>Photo Feedback</h3>
						<PhotoFeedbackForm id={id} />
					</section>
				</div>
			</PopupContainer>
		</div>
	);
};

export default PhotoFeedbackPopup;
