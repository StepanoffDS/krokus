import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.scss';
import HomePage from './react/pages/home-page.tsx';
import CategoryPage from './react/pages/category-page.tsx';
import MainContainer from './react/components/containers/main-container.tsx';
import ProductPage from './react/pages/product-page.tsx';
import ProfileContainer from './react/components/containers/profile-container/index.tsx';
import { routes } from './constants/routing.ts';
import ProfileInfoPage from './react/pages/profile/profile-info-page.tsx';
import ProfileHistoryPage from './react/pages/profile/profile-history-page.tsx';
import ProfileFeedbacksPage from './react/pages/profile/profile-feedbacks-page.tsx';
import ProfilePhotoFeedbacksPage from './react/pages/profile/profile-photo-feedbacks-page.tsx';
import ProfileClientSupportPage from './react/pages/profile/profile-client-support-page.tsx';
import CartPage from './react/pages/cart/cart-page.tsx';
import PaymentPage from './react/pages/cart/payment-page.tsx';
import CheckoutPage from './react/pages/cart/checkout-page.tsx';
import ConfirmationPage from './react/pages/cart/confirmation-page.tsx';
import ScrollToTop from './react/components/ui/scroll-to-top/index.tsx';
import PaymentStatusPage from './react/pages/cart/payment-status-page.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route element={<MainContainer />}>
					<Route index element={<HomePage />} />

					<Route path='/category/:slug' element={<CategoryPage />} />
					<Route path='/product/:slug' element={<ProductPage />} />

					{/* CART */}
					<Route path={routes.cart}>
						<Route index element={<CartPage />} />
						<Route path={routes.cartCheckout} element={<CheckoutPage />} />
						<Route
							path={routes.cartConfirmation}
							element={<ConfirmationPage />}
						/>
						<Route path={routes.cartPayment} element={<PaymentPage />} />
						<Route
							path={routes.cartPaymentStatus}
							element={<PaymentStatusPage />}
						/>
					</Route>

					{/* PROFILE */}
					<Route path={routes.profile} element={<ProfileContainer />}>
						<Route
							path={routes.profile}
							element={<Navigate to={routes.profileInfo} replace />}
						/>
						<Route path={routes.profileInfo} element={<ProfileInfoPage />} />
						<Route
							path={routes.profileHistory}
							element={<ProfileHistoryPage />}
						/>
						<Route
							path={routes.profileFeedbacks}
							element={<ProfileFeedbacksPage />}
						/>
						<Route
							path={routes.profilePhotoFeedbacks}
							element={<ProfilePhotoFeedbacksPage />}
						/>
						<Route
							path={routes.profileSupport}
							element={<ProfileClientSupportPage />}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
