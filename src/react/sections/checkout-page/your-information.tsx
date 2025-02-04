import CheckoutContainer from '@@/react/components/containers/checkout-container';
import CheckoutForm from '@@/react/components/forms/checkout-form';

const YourInformation = () => {
	return (
		<CheckoutContainer title='Your information:'>
			<CheckoutForm />
		</CheckoutContainer>
	);
};

export default YourInformation;
