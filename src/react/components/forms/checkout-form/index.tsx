import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { regions, scheduleDeliver, tips } from '@@/constants/company-info';
import { routes } from '@@/constants/routing';
import 'react-datepicker/dist/react-datepicker.css';

import { Input, LabelInput } from '../../inputs/input';
import CheckoutContainer from '../../containers/checkout-container';
import PhoneInputContainer from '../../inputs/phone';
import Radio from '../../inputs/radio';
import Select from '../../inputs/select';
import Textarea from '../../inputs/input/textarea';
import Button from '../../ui/button';

import styles from './checkout-form.module.scss';

const CheckoutForm = () => {
	const [activeTime, setActiveTime] = useState(scheduleDeliver[0].id);
	const [tip, setTip] = useState(tips[0]);
	const [startDate, setStartDate] = useState(new Date());
	return (
		<form className={styles['form']}>
			<CheckoutContainer title='Your information:'>
				<div className={styles['section-form']}>
					<div className={styles['information-col']}>
						<LabelInput label='First name' />
						<LabelInput label='E-mail' />
						<PhoneInputContainer>
							<Select options={regions} color='black' />
							<LabelInput type='number' placeholder='Phone number' />
						</PhoneInputContainer>
					</div>
					<div>
						<Radio className={styles['radio']} type='dark'>
							<span>Pay order with a bussines account</span>
						</Radio>
					</div>
					<div className={styles['information-col']}>
						<Input placeholder='Name of Legal Entity' />
						<Input placeholder='Legal address' />
						<Input placeholder='Registration number' />
						<Input placeholder='Bank name' />
						<Input placeholder='Bank account' />
						<Input placeholder='SWIFT' />
					</div>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Recipients information'>
				<div>
					<Radio className={styles['radio']} type='dark'>
						<span>I will receive the order</span>
					</Radio>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Address of delivery'>
				<div className={styles['section-form']}>
					<Radio className={styles['radio']} type='dark'>
						<span>
							Yes, I know the full address or city or organization namer
						</span>
					</Radio>
					<div className={styles['address-col']}>
						<Input placeholder='Street, house no.' />
						<Input placeholder='Apartament, code etc. for courrier' />
					</div>
					<div className={styles['address-radios']}>
						<Radio className={styles['radio']} type='dark'>
							<span>No, I do not know</span>
						</Radio>
						<Radio className={styles['radio']} type='dark'>
							<span>Pick by myself</span>
						</Radio>
					</div>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Delivery time'>
				<div className={styles['section-form']}>
					<div>
						<DatePicker
							className='date-picker'
							selected={startDate}
							onChange={(date) => date && setStartDate(date)}
						/>
					</div>
					<div className={styles['schedule']}>
						{scheduleDeliver.map((item) => (
							<button
								type='button'
								key={item.id}
								className={`${styles['schedule__item']} ${
									item.id === activeTime && styles['schedule__item--active']
								}`}
								onClick={() => setActiveTime(item.id)}
							>
								<span className={styles['schedule__item-time']}>
									17:00 - 19:00
								</span>
								<span className={styles['schedule__item-type']}>Regular</span>
								<span className={styles['schedule__item-price']}>0,00 €</span>
							</button>
						))}
					</div>
					<div>
						<Radio className={styles['radio']} type='dark'>
							<span>Exact time delivery: 10,00 €</span>
						</Radio>
					</div>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Additional information'>
				<div>
					<Radio className={styles['radio']} type='dark'>
						<span>Notify me when delivered (FREE)</span>
					</Radio>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Tips for the florist'>
				<div className={styles['tips-tabs']}>
					{tips.map((item) => (
						<button
							type='button'
							key={item}
							className={`${styles['tips-tabs__item']} ${
								item === tip && styles['tips-tabs__item--active']
							}`}
							onClick={() => setTip(item)}
						>
							{item}
						</button>
					))}
				</div>
			</CheckoutContainer>
			<Textarea placeholder='Comments to the order' resize='none' rows={5} />
			<div className={styles['buttons']}>
				<Button href={routes.cart} variant='outline'>
					Back
				</Button>
				<Button href={routes.cartConfirmation}>
					Proceed to payment 89,99 €
				</Button>
			</div>
		</form>
	);
};

export default CheckoutForm;
