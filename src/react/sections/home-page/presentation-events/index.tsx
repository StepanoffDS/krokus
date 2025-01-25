import SectionHeader from '@@/react/components/ui/section-header';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import flowers from '@@/react/components/illustrations/flowers.jpg';
import Divider from '@@/react/components/ui/divider';
import Button from '@@/react/components/ui/button';

import styles from './presentation-events.module.scss';

interface Props {
	className?: string;
}

const PresentationEvents = ({ className }: Props) => {
	const splideOptions = {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		pauseOnHover: false,
		pagination: true,
		arrows: false,
		width: '100%',
		// cover: true,
		interval: 5000,
		classes: {
			pagination: `splide__pagination pagination pagination-3 ${styles['pagination']}`,
		},
	};

	return (
		<section className={className}>
			<div className='container'>
				<div className={styles['presentation-events']}>
					<SectionHeader title='Pasākumu noformēšana' />
					<div className={styles['body']}>
						<div className={styles['text']}>
							<p className={styles['desc']}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<Button href='#!' className={styles['btn']}>
							Sazināties tūlīt
						</Button>
						<div className={styles['slider']}>
							<Splide aria-label='My Favorite Images' options={splideOptions}>
								{[...Array(4)].map((_, index) => (
									<SplideSlide key={index} className={styles['slide']}>
										<img src={flowers} alt='flowers' />
									</SplideSlide>
								))}
							</Splide>
						</div>
					</div>
					<Divider className={styles['footer']} />
				</div>
			</div>
		</section>
	);
};

export default PresentationEvents;
