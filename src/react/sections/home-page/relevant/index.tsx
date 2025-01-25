import ListingCard from '@@/react/components/cards/listing-card';
import MainListingContainer from '@@/react/components/containers/main-listing';

interface Props {
	className?: string;
}

const Relevant = ({ className }: Props) => {
	return (
		<MainListingContainer
			title='Sezonas jaunumi'
			qty={49}
			className={className}
			link='#!'
		>
			{[...Array(8)].map((_, index) => (
				<ListingCard key={index} id='1' />
			))}
		</MainListingContainer>
	);
};

export default Relevant;
