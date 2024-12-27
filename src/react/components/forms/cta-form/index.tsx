import Input from "../../inputs/input";
import Radio from "../../inputs/radio";
import Button from "../../ui/button";
import styles from "./cta-form.module.scss";

interface Props {
	className?: string;
}

const CtaForm = ({ className }: Props) => {
	return (
		<div className={`${styles["form"]} ${className}`}>
			<Input placeholder="E-pasta adrese" />
			<Radio id="agree" className={styles["radio"]}>
				<span>
					Apstiprinu, ka esmu iepazinies ar <a href="#!">Privātumu Politiku</a>
				</span>
			</Radio>
			<Button type="submit" className={styles["btn"]}>
				Pierakstīties
			</Button>
		</div>
	);
};

export default CtaForm;
