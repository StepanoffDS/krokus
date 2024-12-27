import { address, schedule, tels } from "@@/constants/company-info";
import styles from "./contacts.module.scss";
import map from "@@/react/components/illustrations/map.png";
import { formatTel } from "@@/scripts/helpers/utils";

interface Props {
	className?: string;
}

const Contacts = ({ className }: Props) => {
	return (
		<section className={className}>
			<div className="container">
				<div className={styles["body"]}>
					<div className={styles["map"]}>
						<img src={map} alt="location of the company" />
					</div>
					<div>
						<h2 className={`title-1 ${styles["title"]}`}>Mūsu veikals</h2>
						<p className={styles["address"]}>{address}</p>
						<div className={styles["schedule"]}>
							{schedule.map((item) => (
								<p key={item}>{item}</p>
							))}
						</div>
						<div className={styles["phones"]}>
							{tels.map((tel) => (
								<a
									key={`${formatTel(tel)}`}
									href={`tel:${formatTel(tel)}`}
									className={styles["phone"]}>
									{tel}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
