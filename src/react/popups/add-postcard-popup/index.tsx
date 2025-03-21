import { useState } from 'react';
import Button from '@@/react/components/ui/button';
import { togglePopup } from '@@/scripts/helpers/toggle-popup';
import CartPopupItem from '@@/react/components/ui/cart-popup-item';
import { postcards } from '@@/constants/company-info';
import Textarea from '@@/react/components/inputs/input/textarea';
import { IPopup } from '@@/@types';
import Edit from '@@/react/components/icons/edit';

import PopupContainer from '../popup-container';

import styles from './add-postcard-popup.module.scss';
import { createPortal } from 'react-dom';

interface Props extends IPopup<boolean> {
	isEdit?: boolean;
	btnClasses?: string;
}

const AddPostcardPopup = ({
	className,
	isOpen,
	setIsOpen,
	isEdit,
	btnClasses,
}: Props) => {
	const [activePostcard, setActivePostcard] = useState(0);

	const handleClick = () => {
		togglePopup({ setIsOpen, isOpen });
	};

	return (
		<div className={className}>
			<Button variant='outline' onClick={handleClick} className={btnClasses}>
				{!isEdit && 'Add postcard'}
				{isEdit && <Edit />}
			</Button>
			{createPortal(
				<PopupContainer
					className={styles['popup-container']}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				>
					<div className={styles['popup-main']}>
						<h3 className={styles['popup-title']}>Choose a postcard for:</h3>
						<div>
							<CartPopupItem />
						</div>
						<div className={styles['postcards']}>
							{postcards.map((item) => (
								<button
									key={item.id}
									type='button'
									onClick={() => setActivePostcard(item.id)}
									className={`${styles['postcards__item']} ${
										activePostcard === item.id &&
										styles['postcards__item--active']
									}`}
								>
									<img
										className={styles['postcards__item-img']}
										src={item.img}
										alt={item.name}
									/>
									<h6 className={styles['postcards__item-title']}>
										{item.name}
									</h6>
									<p className={styles['postcards__item-price']}>
										{item.price}
									</p>
								</button>
							))}
						</div>
						{activePostcard === 5 && (
							<Textarea resize='none' rows={5} error={undefined} />
						)}
						<div className={styles['popup-buttons']}>
							<Button variant='outline' onClick={handleClick}>
								Cancel
							</Button>
							<Button onClick={handleClick}>Add postcard</Button>
						</div>
					</div>
				</PopupContainer>,
				document.body,
			)}
		</div>
	);
};

export default AddPostcardPopup;
