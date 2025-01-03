import { useEffect, useRef, useState } from "react";
import styles from "./running-line.module.scss";

const text = [
	"Bezmaksas piegāde pasūtījumiem virs 50 €",
	"Piegāde tai pašā dienām ja pasūtījums ir izveidots līdz plkst. 12:00",
];

const RunningLine = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMarquee, setIsMarquee] = useState(false);

	useEffect(() => {
		if (containerRef.current) {
			const containerWidth = containerRef.current.offsetWidth;
			const textWidth = containerRef.current.scrollWidth;

			setIsMarquee(textWidth > containerWidth);
		}
	}, []);

	const isLast = (index: number) => index < text.length - 1;
	const isFirst = (index: number) => index === 0;

	return (
		<div className={styles["running-line"]}>
			<div
				ref={containerRef}
				className={`${styles["marquee-container"]} ${
					isMarquee ? styles["marquee"] : styles["marquee-static"]
				}
				}`}
				style={{ "--line-speed": "0s" } as React.CSSProperties}>
				<div className={styles["marquee-content"]}>
					{text.map((item, index) => (
						<div key={item} className={styles["marquee-elem"]}>
							<p>{item}</p>
							{isLast(index) && <div className={styles["dot"]}></div>}
						</div>
					))}
					{text.map((item, index) => (
						<div key={item} className={styles["marquee-elem"]}>
							{isFirst(index) && <div className={styles["dot"]}></div>}
							<p>{item}</p>
							{isLast(index) && <div className={styles["dot"]}></div>}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RunningLine;
