import Benefits from "../sections/home-page/benefits";
import Contacts from "../sections/home-page/contacts";
import CorporateClients from "../sections/home-page/corporate-clients";
import Discover from "../sections/home-page/discover";
import Individual from "../sections/home-page/individual";
import Popular from "../sections/home-page/popular";
import PresentationEvents from "../sections/home-page/presentation-events";
import Relevant from "../sections/home-page/relevant";
import Reviews from "../sections/home-page/reviews";

const HomePage = () => {
	return (
		<>
			<Discover />
			<Popular />
			<Relevant />
			<Individual />
			<PresentationEvents />
			<CorporateClients />
			<Contacts />
			<Reviews />
			<Benefits />
		</>
	);
};

export default HomePage;
