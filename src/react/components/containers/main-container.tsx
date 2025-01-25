import { Outlet } from 'react-router';
import Cta from '@@/react/sections/home-page/cta';
import AuthPopup from '@@/react/popups/auth-popups/auth-popup';

import Footer from '../ui/footer';
import Header from '../ui/header';
import RunningLine from '../ui/running-line';

const MainContainer = () => {
	return (
		<>
			<AuthPopup />
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
