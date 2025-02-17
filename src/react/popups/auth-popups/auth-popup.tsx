import { useState } from 'react';
import LoginForm from '@@/react/components/forms/login-form';
import RegisterForm from '@@/react/components/forms/register-form';
import Button from '@@/react/components/ui/button';
import useGetAuthPopupState from '@@/scripts/hooks/use-get-auth-popup-state';

import PopupContainer from '../popup-container';

import styles from './auth-popups.module.scss';

type Tabs = 'login' | 'register';

const AuthPopup = () => {
	const { isOpen, setIsOpen } = useGetAuthPopupState();

	const [activeTab, setActiveTab] = useState<Tabs>('login');

	const toggleActiveTab = () => {
		setActiveTab((prevTab) => (prevTab === 'login' ? 'register' : 'login'));
	};

	return (
		<PopupContainer
			className={styles['popup-container']}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<div className={styles['popup-main']}>
				<section
					className={`${styles['popup-section']} ${
						activeTab !== 'login' && styles['popup-section--hidden']
					}`}
				>
					<LoginForm />
					<div className={styles['popup-footer']}>
						<h3 className={styles['popup-footer-title']}>
							Don’t have an acoount?
						</h3>
						<Button
							variant='outline'
							className={styles['popup-footer-btn']}
							onClick={toggleActiveTab}
						>
							Register
						</Button>
					</div>
				</section>
				<section
					className={`${styles['popup-section']} ${
						styles['popup-section--register']
					} ${activeTab !== 'register' && styles['popup-section--hidden']}`}
				>
					<RegisterForm />
					<div className={styles['popup-footer']}>
						<h3 className={styles['popup-footer-title']}>I have an account</h3>
						<Button
							variant='outline'
							className={styles['popup-footer-btn']}
							onClick={toggleActiveTab}
						>
							Login
						</Button>
					</div>
				</section>
			</div>
		</PopupContainer>
	);
};

export default AuthPopup;
