import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { checkoutSchema, CheckoutSchemaType } from '@@/constants/forms';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { regions, scheduleDeliver, tips } from '@@/constants/company-info';
import { routes } from '@@/constants/routing';
import 'react-datepicker/dist/react-datepicker.css';
import useDraggable from '@@/scripts/hooks/use-draggable';

import { Input, LabelInput } from '../../inputs/input';
import CheckoutContainer from '../../containers/checkout-container';
import PhoneInputContainer from '../../inputs/phone';
import Radio from '../../inputs/radio';
import Select from '../../inputs/select';
import Textarea from '../../inputs/input/textarea';
import Button from '../../ui/button';

import styles from './checkout-form.module.scss';

const CheckoutForm = () => {
	const navigate = useNavigate();

	const scheduleRef = useRef<HTMLDivElement>(null);
	const { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } =
		useDraggable(scheduleRef);

	const [isExactTime, setIsExactTime] = useState(false);
	const [activeTime, setActiveTime] = useState('');
	const [tip, setTip] = useState(tips[0]);

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<CheckoutSchemaType>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: {
			firstName: '',
			region: regions[0].value,
			time: activeTime,
			tips: tip,
			comment: '',
		},
	});

	const checkoutSubmit = async (data: CheckoutSchemaType) => {
		try {
			console.log(data);
			await navigate(routes.cartConfirmation);
		} catch (error) {
			console.error(error);
		}
	};

	const toggleTime = (time: string) => {
		if (time === activeTime) {
			setActiveTime('');
		} else {
			setActiveTime(time);
			setValue('time', time);
			setIsExactTime(false);
		}
	};

	const toggleExactTime = () => {
		setIsExactTime((prev) => !prev);

		if (!isExactTime) {
			setActiveTime('');
		}
	};

	const toggleTip = (item: string) => {
		setTip(item);
		setValue('tips', item);
	};

	return (
		<form className={styles['form']} onSubmit={handleSubmit(checkoutSubmit)}>
			<CheckoutContainer title='Your information:'>
				<div className={styles['section-form']}>
					<div className={styles['information-col']}>
						<Controller
							control={control}
							name='firstName'
							render={({ field }) => (
								<LabelInput
									label='First name'
									error={errors.firstName as FieldError}
									{...field}
								/>
							)}
						/>
						<Controller
							control={control}
							name='email'
							render={({ field }) => (
								<LabelInput
									label='E-mail'
									error={errors.email as FieldError}
									{...field}
								/>
							)}
						/>

						<PhoneInputContainer>
							<Controller
								control={control}
								name='region'
								render={({ field }) => (
									<Select options={regions} color='black' {...field} />
								)}
							/>

							<Controller
								control={control}
								name='phone'
								render={({ field }) => (
									<LabelInput
										type='number'
										placeholder='Phone number'
										error={errors.phone as FieldError}
										{...field}
									/>
								)}
							/>
						</PhoneInputContainer>
					</div>
					<div>
						<Controller
							control={control}
							name='isBusinessAccount'
							render={({ field }) => (
								<Radio
									className={styles['radio']}
									type='dark'
									error={errors.isBusinessAccount as FieldError}
									{...field}
									value={field.value ? 'true' : 'false'}
								>
									<span>Pay order with a bussines account</span>
								</Radio>
							)}
						/>
					</div>
					{watch('isBusinessAccount') && (
						<div className={styles['information-col']}>
							<Controller
								control={control}
								name='legalEntity'
								render={({ field }) => (
									<Input
										placeholder='Name of Legal Entity'
										error={errors.legalEntity as FieldError}
										{...field}
									/>
								)}
							/>
							<Controller
								control={control}
								name='legalAddress'
								render={({ field }) => (
									<Input
										placeholder='Legal address'
										error={errors.legalEntity as FieldError}
										{...field}
									/>
								)}
							/>
							<Controller
								control={control}
								name='regNumber'
								render={({ field }) => (
									<Input
										placeholder='Registration number'
										error={errors.legalEntity as FieldError}
										{...field}
									/>
								)}
							/>
							<Controller
								control={control}
								name='bankName'
								render={({ field }) => (
									<Input
										placeholder='Bank name'
										error={errors.legalEntity as FieldError}
										{...field}
									/>
								)}
							/>
							<Controller
								control={control}
								name='bankAccount'
								render={({ field }) => (
									<Input
										placeholder='Bank account'
										error={errors.legalEntity as FieldError}
										{...field}
									/>
								)}
							/>
							<Controller
								control={control}
								name='swift'
								render={({ field }) => (
									<Input
										placeholder='SWIFT'
										error={errors.legalEntity as FieldError}
										{...field}
									/>
								)}
							/>
						</div>
					)}
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Recipients information'>
				<div>
					<Controller
						control={control}
						name='willIReceive'
						render={({ field }) => (
							<Radio
								className={styles['radio']}
								type='dark'
								error={errors.willIReceive as FieldError}
								{...field}
								value={field.value ? 'true' : 'false'}
							>
								<span>I will receive the order</span>
							</Radio>
						)}
					/>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Address of delivery'>
				<div className={styles['section-form']}>
					<Controller
						control={control}
						name='typeDeliver'
						render={({ field }) => (
							<>
								<Radio
									className={styles['radio']}
									type='dark'
									error={errors.typeDeliver as FieldError}
									// {...field}
									typeInput='radio'
									value='fullAddress'
									onChange={field.onChange}
									name='typeDeliver'
								>
									<span>
										Yes, I know the full address or city or organization namer
									</span>
								</Radio>
								{watch('typeDeliver') === 'fullAddress' && (
									<div className={styles['address-col']}>
										<Controller
											control={control}
											name='fullAddress'
											render={({ field }) => (
												<Input
													placeholder='Street, house no.'
													error={errors.fullAddress as FieldError}
													{...field}
												/>
											)}
										/>
										<Controller
											control={control}
											name='apartamentNum'
											render={({ field }) => (
												<Input
													placeholder='Apartament, code etc. for courier'
													error={errors.apartamentNum as FieldError}
													{...field}
												/>
											)}
										/>
									</div>
								)}
								<Radio
									className={styles['radio']}
									type='dark'
									error={errors.typeDeliver as FieldError}
									value='unknownAddress'
									onChange={field.onChange}
									typeInput='radio'
									name='typeDeliver'
								>
									<span>No, I do not know</span>
								</Radio>
								<Radio
									className={styles['radio']}
									type='dark'
									error={errors.typeDeliver as FieldError}
									onChange={field.onChange}
									value='pickByMyself'
									typeInput='radio'
									name='typeDeliver'
								>
									<span>Pick by myself</span>
								</Radio>
							</>
						)}
					/>
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Delivery time'>
				<div className={styles['section-form']}>
					<div>
						<Controller
							control={control}
							name='date'
							render={({ field }) => (
								<DatePicker
									className={`date-picker ${errors.date && 'date-error'}`}
									selected={field.value}
									onChange={(date) => field.onChange(date)}
									dateFormat='dd/MM/yyyy'
									todayButton='Today'
									placeholderText='Choose a date'
								/>
							)}
						/>
					</div>
					<div
						className={styles['schedule']}
						ref={scheduleRef}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseLeave}
					>
						{scheduleDeliver.map((item) => (
							<button
								type='button'
								key={item.id}
								className={`${styles['schedule__item']} ${
									item.time === activeTime && styles['schedule__item--active']
								}`}
								onClick={() => toggleTime(item.time)}
							>
								<span className={styles['schedule__item-time']}>
									{item.time}
								</span>
								<span className={styles['schedule__item-type']}>Regular</span>
								<span className={styles['schedule__item-price']}>0,00 €</span>
							</button>
						))}
					</div>
					{errors.time && (
						<span className='error-text'>{errors.time.message}</span>
					)}
					<div>
						<Radio
							className={styles['radio']}
							type='dark'
							checked={isExactTime}
							onChange={() => toggleExactTime()}
						>
							<span>Exact time delivery: 10,00 €</span>
						</Radio>
					</div>
					{isExactTime && (
						<Controller
							control={control}
							name='time'
							render={({ field }) => (
								<Input
									className='input-time'
									type='time'
									error={errors.time as FieldError}
									{...field}
								/>
							)}
						/>
					)}
				</div>
			</CheckoutContainer>
			<CheckoutContainer title='Additional information'>
				<div>
					<Controller
						control={control}
						name='notifyCustomerAboutDeliver'
						render={({ field }) => (
							<Radio
								className={styles['radio']}
								type='dark'
								error={errors.notifyCustomerAboutDeliver as FieldError}
								{...field}
								value={field.value ? 'true' : 'false'}
							>
								<span>Notify me when delivered (FREE)</span>
							</Radio>
						)}
					/>
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
							onClick={() => toggleTip(item)}
						>
							{item}
						</button>
					))}
				</div>
			</CheckoutContainer>
			<Controller
				control={control}
				name='comment'
				render={({ field }) => (
					<Textarea
						placeholder='Comments to the order'
						resize='none'
						rows={5}
						error={errors.comment as FieldError}
						{...field}
					/>
				)}
			/>

			<div className={styles['buttons']}>
				<Button href={routes.cart} variant='outline'>
					Back
				</Button>
				<Button type='submit'>Proceed to payment 89,99 €</Button>
			</div>
		</form>
	);
};

export default CheckoutForm;
