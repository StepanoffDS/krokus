import Divider from '@@/react/components/ui/divider';
import Button from '@@/react/components/ui/button';

import styles from './corporate-clients.module.scss';

interface Props {
	className?: string;
}

const CorporateClients = ({ className }: Props) => {
	return (
		<section className={className}>
			<div className='container'>
				<div className={styles['individual']}>
					<div className={styles['body']}>
						<h2 className={`title-1 ${styles['title']}`}>
							Korporatīvajiem klientiem
						</h2>
						<div className={styles['content']}>
							<div className={styles['text']}>
								<p className={styles['desc']}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
							<Button href='#!' className={styles['btn']}>
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

export default CorporateClients;
