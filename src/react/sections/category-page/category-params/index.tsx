import FilterItemContainer from "@@/react/components/containers/filter-item-container";
import styles from "./category-params.module.scss";
import Select from "@@/react/components/inputs/select";
import FilterRadio from "@@/react/components/inputs/filter-radio";
import SelectTags from "@@/react/components/inputs/select/select-tags";
import PriceRange from "@@/react/components/forms/price-range";
import Button from "@@/react/components/ui/button";
import Load from "@@/react/components/icons/load";
import FiltersIcon from "@@/react/components/icons/filters-icon";
import { useEffect, useState } from "react";

interface Props {
	className?: string;
}

const options1 = [
	{ value: "Lētakie", label: "Lētakie vispirms" },
	{ value: "Dārgie vispirms", label: "Dārgie vispirms" },
];

const options2 = [
	{ value: "Izvēlies", label: "Izvēlies", disabled: true },
	{ value: "Sarkanās rozes", label: "Sarkanās rozes" },
	{ value: "Lilijas", label: "Lilijas" },
	{ value: "Anemones", label: "Anemones" },
];

const options3 = [
	{ value: "Izvēlies", label: "Izvēlies", disabled: true },
	{ value: "Galda kompozīcijas", label: "Galda kompozīcijas" },
	{ value: "Rotaļlietas no ziediem", label: "Rotaļlietas no ziediem" },
	{ value: "Ar augļiem", label: "Ar augļiem" },
	{ value: "Sirds", label: "Sirds" },
];

const CategoryParams = ({ className }: Props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	useEffect(() => {
		const media = window.matchMedia("(min-width: 820px)");
		const listener = () => setOpen(media.matches);
		media.addEventListener("change", listener);
		listener();
		return () => media.removeEventListener("change", listener);
	}, []);

	return (
		<details open={open} className={`${styles["wrapper"]} ${className}`}>
			<summary className={styles["header"]} onClick={handleToggle}>
				<Button variant="outline" className={styles["header-btn"]}>
					Filtri <FiltersIcon />
				</Button>
			</summary>
			<div className={styles["inner"]}>
				<section className={styles["section"]}>
					<FilterItemContainer title="Rādīt preces">
						<Select options={options1} id="filter-1" />
						<div className={styles["filter-radios"]}>
							<FilterRadio id="filter-2" text="Akcijas preces" count={8} />
							<FilterRadio id="filter-3" text="Vēl kategorija" count={0} />
						</div>
					</FilterItemContainer>
				</section>
				<section className={styles["section"]}>
					<FilterItemContainer title="Izvēlies ziedus">
						<SelectTags options={options2} id="filter-4" />
					</FilterItemContainer>
					<FilterItemContainer title="Cena">
						<PriceRange min={0} max={500} />
					</FilterItemContainer>
					<FilterItemContainer title="Kompozīcijas veids">
						<SelectTags options={options3} id="filter-5" />
					</FilterItemContainer>
					<Button className={styles["btn"]}>
						Atiestatīt filtrus
						<Load />
					</Button>
				</section>
			</div>
		</details>
	);
};

export default CategoryParams;
