import CartContainer from '@@/react/components/containers/cart-container';
import Checkout from '@@/react/sections/checkout-page';

const CheckoutPage = () => {
	return (
		<CartContainer title='Checkout'>
			<Checkout />
		</CartContainer>
	);
};

export default CheckoutPage;
