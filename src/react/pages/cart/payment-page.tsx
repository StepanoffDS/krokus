import CartContainer from '@@/react/components/containers/cart-container';
import Payment from '@@/react/sections/payment-page/payment';

const PaymentPage = () => {
	return (
		<CartContainer title='Payment'>
			<Payment />
		</CartContainer>
	);
};

export default PaymentPage;
