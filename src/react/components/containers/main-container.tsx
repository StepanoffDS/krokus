import Cta from "@@/react/sections/home-page/cta";
import Footer from "../ui/footer";
import Header from "../ui/header";
import RunningLine from "../ui/running-line";
import { Outlet } from "react-router";

const MainContainer = () => {
	return (
		<>
			<RunningLine />
			<Header />
			<div>
				<Outlet />
			</div>
			<Cta />
			<Footer />
		</>
	);
};

export default MainContainer;
