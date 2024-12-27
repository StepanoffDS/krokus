import Benefit01 from "@@/react/components/illustrations/benefit-01";
import styles from "./benefits.module.scss";
import Benefit02 from "@@/react/components/illustrations/benefit-02";
import Benefit03 from "@@/react/components/illustrations/benefit-03";

interface Props {
	className?: string;
}

const benefits = [
	{
		title: "Svaiguma garantija",
		description: "Mēs garantējam Jums mūsu ziedu svaigumu",
		img: <Benefit01 />,
	},
	{
		title: "Visātrākā piegāde",
		description: "Vienmēr maksimāli ātra un ērta piegāde pasūtījuma dienā",
		img: <Benefit02 />,
	},
	{
		title: "Drošs maksājums",
		description: "Jūsu dati personas ir aizsargāti",
		img: <Benefit03 />,
	},
];

const Benefits = ({ className }: Props) => {
	return (
		<section className={className}>
			<div className="container">
				<div className={styles["body"]}>
					{benefits.map((item) => (
						<div key={item.title} className={styles["benefit"]}>
							<div className={styles["benefit-img"]}>{item.img}</div>
							<h4 className={styles["benefit-title"]}>{item.title}</h4>
							<p className={styles["benefit-desc"]}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
