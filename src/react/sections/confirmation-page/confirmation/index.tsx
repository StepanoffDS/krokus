import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import product from '@@/react/components/illustrations/product.png';
import ConfirmationProductCard from '@@/react/components/cards/confirmation-product-card';
import CartProductContainer from '@@/react/components/containers/cart-product-container';
import Radio from '@@/react/components/inputs/radio';
import Button from '@@/react/components/ui/button';
import { routes } from '@@/constants/routing';

import styles from './confirmation.module.scss';

const schema = z.object({
	isAccess: z
		.boolean()
		.refine((value) => value === true)
		.default(false),
});

type ConfirmationTypes = z.infer<typeof schema>;

const Confirmation = () => {
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ConfirmationTypes>({
		resolver: zodResolver(schema),
	});

	const confirmationSubmit = async (data: ConfirmationTypes) => {
		try {
			console.log(data);
			await navigate(routes.cartPayment);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles['confirmation']}>
			<CartProductContainer>
				<ConfirmationProductCard
					title='Product name goes here'
					img={product}
					isMain={true}
					pcs={50}
				/>
				<ConfirmationProductCard
					title='Love you, my dear! Wishing you all the best this day and happy valentine!'
					img={product}
				/>
				<ConfirmationProductCard title='Aquabox' img={product} pcs={1} />
			</CartProductContainer>
			<CartProductContainer>
				<ConfirmationProductCard
					title='Product name goes here'
					img={product}
					isMain={true}
					pcs={50}
				/>
				<ConfirmationProductCard title='Aquabox' img={product} pcs={1} />
			</CartProductContainer>
			<form
				className={styles['radio-section']}
				onSubmit={handleSubmit(confirmationSubmit)}
			>
				<Controller
					control={control}
					name='isAccess'
					render={({ field }) => (
						<Radio
							type='dark'
							{...field}
							error={errors.isAccess}
							value={field.value ? 'true' : 'false'}
						>
							<span className={styles['radio-text']}>
								I have read and agree with the <a href='#!'>delivery rules</a>{' '}
								and <a href='#!'>quality assurance</a>
							</span>
						</Radio>
					)}
				/>
				<Button type='submit' className={styles['btn']}>
					Proceed to checkout 89,99 €
				</Button>
			</form>
		</div>
	);
};

export default Confirmation;
