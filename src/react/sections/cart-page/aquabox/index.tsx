import Button from '@@/react/components/ui/button';
import aquabox1 from '@@/react/components/illustrations/aquabox/aquabox-1.png';
import aquabox2 from '@@/react/components/illustrations/aquabox/aquabox-2.png';
import aquabox3 from '@@/react/components/illustrations/aquabox/aquabox-3.png';
import aquabox4 from '@@/react/components/illustrations/aquabox/aquabox-4.png';

import styles from './aquabox.module.scss';

const Aquabox = () => {
	return (
		<div className={styles['aquabox']}>
			<div className={styles['aquabox-collage']}>
				<img src={aquabox1} alt='aquabox1' />
				<img src={aquabox2} alt='aquabox2' />
				<img src={aquabox3} alt='aquabox3' />
				<img src={aquabox4} alt='aquabox4' />
			</div>
			<div className={styles['aquabox-content']}>
				<h3 className={styles['aquabox-title']}>
					Premium transport packaging with aquabox 8,00 €
				</h3>
				<p className={styles['aquabox-text']}>
					To make flower delivery even more reliable, we recommend to choose
					branded packaging for your bouquet. It includes a disposable vase with
					special water and a protective bag.
				</p>
				<Button variant='outline'>Add aquabox</Button>
			</div>
		</div>
	);
};

export default Aquabox;
