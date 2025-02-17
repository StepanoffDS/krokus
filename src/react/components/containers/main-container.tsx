import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import { Outlet } from 'react-router';
import Cta from '@@/react/sections/home-page/cta';
import AuthPopup from '@@/react/popups/auth-popups/auth-popup';

import RunningLine from '../ui/running-line';
import Footer from '../ui/footer';
import Header from '../ui/header';

import styles from './main-container.module.scss';

const LoadLazy = () => {
	return (
		<div className={styles['loader-wrapper']}>
			<ClipLoader className={styles['loader']} speedMultiplier={0.5} />
		</div>
	);
};

const MainContainer = () => {
	return (
		<>
			<AuthPopup />
			<RunningLine />
			<Header />
			<div>
				<Suspense fallback={<LoadLazy />}>
					<Outlet />
				</Suspense>
			</div>
			<Cta />
			<Footer />
		</>
	);
};

export default MainContainer;
