import ProductMain from '../sections/product-page/product-main';

interface Props {
	className?: string;
}

const ProductPage = ({ className }: Props) => {
	return <ProductMain className={className} />;
};

export default ProductPage;
