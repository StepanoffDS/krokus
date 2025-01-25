import ListingCard from '@@/react/components/cards/listing-card';
import MainListingContainer from '@@/react/components/containers/main-listing';

interface Props {
	className?: string;
}

const Popular = ({ className }: Props) => {
	return (
		<MainListingContainer
			title='Populārākie pušķi'
			qty={18}
			link='#!'
			className={className}
		>
			{[...Array(8)].map((_, index) => (
				<ListingCard key={index} id='1' />
			))}
		</MainListingContainer>
	);
};

export default Popular;
