import Button from "@@/react/components/ui/button";
import styles from "./reviews.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

import flowers from "@@/react/components/illustrations/flowers.jpg";
import StarIcon from "@@/react/components/icons/star-icon";
import BigKIcon from "@@/react/components/icons/big-k-icon";

interface Props {
	className?: string;
}

const Reviews = ({ className }: Props) => {
	const splideOptions = {
		type: "loop",
		perPage: 1,
		pauseOnHover: false,
		pagination: true,
		arrows: false,
		// width: "100%",
		// cover: true,
		interval: 5000,
		classes: {
			pagination: `splide__pagination pagination pagination-4`,
		},
	};

	return (
		<section className={`${styles["reviews-wrapper"]} ${className}`}>
			<BigKIcon className={styles["big-icon"]} />
			<div className="container">
				<div className={styles["body"]}>
					<h2 className={`title-1 ${styles["title"]}`}>Klientu atsauksmes</h2>
					<div className={styles["reviews"]}>
						<Splide aria-label="My Favorite Images" options={splideOptions}>
							{[...Array(4)].map((_, index) => (
								<SplideSlide key={index} className={styles["slide"]}>
									<div className={styles["avatar"]}>
										<div className={styles["slide-img"]}>
											<img src={flowers} alt="review" />
										</div>
										<div className={styles["rating"]}>
											<StarIcon />5
										</div>
									</div>
									<p className={styles["slide-desc"]}>
										Absolutely wonderful flowers and delivery! Thank you! My
										sister was very pleased with this beautiful arrangement!
										I’ve been using the service for a few years now and it
										always delivers the best flowers!
									</p>
									<h6 className={styles["slide-name"]}>Alexandra Guzovsky</h6>
								</SplideSlide>
							))}
						</Splide>
					</div>
					<Button href="#!" className={styles["btn"]}>
						Atstāt atsauksmi
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
