import CartContainer from '@@/react/components/containers/cart-container';
import Aquabox from '@@/react/sections/cart-page/aquabox';
import CartListing from '@@/react/sections/cart-page/cart-listing';

const CartPage = () => {
	return (
		<CartContainer title='Your cart'>
			<CartListing />
			<Aquabox />
		</CartContainer>
	);
};

export default CartPage;
