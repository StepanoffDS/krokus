import { useEffect, useRef } from "react";
import styles from "./product-gallery.module.scss";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import flowers from "@@/react/components/illustrations/flowers.jpg";
import DiscountLabel from "@@/react/components/ui/discount-label";

interface Props {
	className?: string;
}

const ProductGallery = ({ className }: Props) => {
	const mainRef = useRef<Splide>(null);
	const thumbsRef = useRef<Splide>(null);

	useEffect(() => {
		if (mainRef.current && thumbsRef.current?.splide) {
			mainRef.current.sync(thumbsRef.current.splide);
		}
	}, []);

	const mainOptions: Options = {
		type: "loop",
		perPage: 1,
		perMove: 1,
		gap: "1rem",
		pagination: false,
		arrows: false,
	};

	const thumbsOptions: Options = {
		gap: "20px",
		cover: true,
		arrows: false,
		rewind: true,
		pagination: false,
		isNavigation: true,
		fixedHeight: 80,
		fixedWidth: 80,
	};

	const renderSlides = () => {
		return [...Array(10)].map((_, index) => (
			<SplideSlide key={index} className={styles["slide"]}>
				<img src={flowers} alt={`slide ${index}`} />
			</SplideSlide>
		));
	};

	return (
		<div className={`${styles["gallery"]} ${className}`}>
			<DiscountLabel className={styles["discount"]} />

			<Splide
				options={mainOptions}
				ref={mainRef}
				className={`${styles["slider"]} ${styles["slider--main"]}`}>
				{renderSlides()}
			</Splide>

			<Splide
				options={thumbsOptions}
				ref={thumbsRef}
				className={`${styles["slider"]} ${styles["slider--thumb"]} slider--thumb`}>
				{renderSlides()}
			</Splide>
		</div>
	);
};

export default ProductGallery;
