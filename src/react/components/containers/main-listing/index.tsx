import Divider from "../../ui/divider";
import BtnMore from "./btn-more";
import styles from "./main-listing.module.scss";

interface Props {
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
	title: string;
	qty: number;
	link: string;
	hasDivider: boolean;
}

const MainListingContainer = ({
	className,
	children,
	title,
	qty,
	link,
	hasDivider = true,
}: Props) => {
	return (
		<section className={className}>
			<div className={`container`}>
				<div className={styles["listing"]}>
					<header className={styles["header"]}>
						<h2 className={`title-2`}>{title}</h2>
						<BtnMore link={link} qty={qty} />
					</header>
					<div className={styles["content"]}>{children}</div>
					<footer className={styles["footer"]}>
						<BtnMore
							link={link}
							qty={qty}
							className={styles["btn-more--mobile"]}
						/>
						{hasDivider && <Divider />}
					</footer>
				</div>
			</div>
		</section>
	);
};

export default MainListingContainer;
