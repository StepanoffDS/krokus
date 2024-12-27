import styles from "./cta.module.scss";
import CtaForm from "@/react/components/forms/cta-form";

interface Props {
	className?: string;
}

const Cta = ({ className }: Props) => {
	return (
		<section className={`${styles["cta-wrapper"]} ${className}`}>
			<div className="container">
				<div className={styles["body"]}>
					<h2 className={`${styles["title"]}`}>
						Īpašie piedāvājumi un jaunumi no krokus.lv Jūsu e-pastā
					</h2>
					<CtaForm />
				</div>
			</div>
		</section>
	);
};

export default Cta;
