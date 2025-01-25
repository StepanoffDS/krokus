import ListingCard from '@@/react/components/cards/listing-card';
import MainListingContainer from '@@/react/components/containers/main-listing';

interface Props {
	className?: string;
}

const MoreProducts = ({ className }: Props) => {
	return (
		<MainListingContainer
			title='Upsale products'
			qty={49}
			link='#!'
			hasDivider={false}
			className={className}
		>
			{[...Array(4)].map((_, index) => (
				<ListingCard key={index} id='1' />
			))}
		</MainListingContainer>
	);
};

export default MoreProducts;
