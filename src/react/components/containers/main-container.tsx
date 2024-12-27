import Cta from "@@/react/sections/home-page/cta";
import Footer from "../ui/footer";
import Header from "../ui/header";
import RunningLine from "../ui/running-line";

const MainContainer = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	return (
		<>
			<RunningLine />
			<Header />
			{children}
			<Cta />
			<Footer />
		</>
	);
};

export default MainContainer;
