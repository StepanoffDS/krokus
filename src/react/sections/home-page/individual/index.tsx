import SectionHeader from "@@/react/components/ui/section-header";
import styles from "./individual.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

import flowers from "@@/react/components/illustrations/flowers.jpg";
import Divider from "@@/react/components/ui/divider";
import Button from "@@/react/components/ui/button";

interface Props {
	className?: string;
}

const Individual = ({ className }: Props) => {
	const splideOptions = {
		type: "loop",
		perPage: 1,
		autoplay: true,
		pauseOnHover: false,
		pagination: true,
		arrows: false,
		width: "100%",
		// height: "100%",
		cover: true,
		interval: 5000,
		classes: {
			pagination: `splide__pagination pagination pagination-2`,
		},
	};

	return (
		<section className={className}>
			<div className="container">
				<div className={styles["individual"]}>
					<SectionHeader title="Individuālie pušķi" />
					<div className={styles["body"]}>
						<div className={styles["slider"]}>
							<Splide aria-label="My Favorite Images" options={splideOptions}>
								{[...Array(4)].map((_, index) => (
									<SplideSlide key={index} className={styles["slide"]}>
										<img src={flowers} alt="flowers" />
									</SplideSlide>
								))}
							</Splide>
						</div>
						<div className={styles["content"]}>
							<div className={styles["text"]}>
								<p className={styles["desc"]}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<p className={styles["desc"]}>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
								</p>
							</div>
							<Button href="#!" className={styles["btn"]}>
								Sazināties tūlīt
							</Button>
						</div>
					</div>
					<Divider />
				</div>
			</div>
		</section>
	);
};

export default Individual;
