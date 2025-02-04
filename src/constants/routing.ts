export const routes = {
	home: '/',
	profile: '/profile',
	profileInfo: '/profile/profile-info',
	profileHistory: '/profile/history',
	profileFeedbacks: '/profile/feedbacks',
	profilePhotoFeedbacks: '/profile/photo-feedbacks',
	profileSupport: '/profile/support',
	cart: '/cart',
	cartCheckout: '/cart/checkout',
	cartConfirmation: '/cart/confirmation',
	cartPayment: '/cart/payment',
	cartPaymentStatus: '/cart/payment/status',
	category: (slug: string) => `/category/${slug}`,
	product: (slug: string) => `/product/${slug}`,
};

export const profileRoutes = [
	{
		name: 'Personal data',
		link: routes.profileInfo,
	},
	{
		name: 'History',
		link: routes.profileHistory,
	},
	{
		name: 'Feedbacks',
		link: routes.profileFeedbacks,
	},
	{
		name: 'Photo feedbacks',
		link: routes.profilePhotoFeedbacks,
	},
	{
		name: 'Client support',
		link: routes.profileSupport,
	},
];
