import styles from "./discover.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "@splidejs/react-splide/css";

import flowers from "@/react/components/illustrations/flowers.jpg";

interface Props {
	className?: string;
}

const Discover = ({ className }: Props) => {
	const splideOptions = {
		type: "loop",
		perPage: 1,
		// autoplay: true,
		pauseOnHover: false,
		pagination: true,
		arrows: false,
		width: "100%",
		cover: true,
		interval: 10000,
		classes: {
			pagination: `splide__pagination pagination pagination-1`,
		},
	};

	return (
		<section className={`${styles["discover"]} ${className}`}>
			<div className={styles["content"]}>
				<h1 className={styles["title"]}>Jauni ziedi</h1>

				<h3 className={styles["subtitle"]}>Subheading</h3>

				<div className={styles["cta-btns"]}>
					<button className={styles["cta-btn"]}>CTA button 1</button>
					<button className={styles["cta-btn"]}>CTA button 2</button>
				</div>
			</div>
			<div className={styles["slider"]}>
				<Splide aria-label="My Favorite Images" options={splideOptions}>
					{[...Array(4)].map((_, index) => (
						<SplideSlide key={index} className={styles["slide"]}>
							<img src={flowers} alt="flowers" />
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	);
};

export default Discover;
