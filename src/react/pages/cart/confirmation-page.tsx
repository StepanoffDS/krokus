import CartContainer from '@@/react/components/containers/cart-container';
import Confirmation from '@@/react/sections/confirmation-page/confirmation';

const ConfirmationPage = () => {
	return (
		<CartContainer title='Confirmation of the order'>
			<Confirmation />
		</CartContainer>
	);
};

export default ConfirmationPage;
