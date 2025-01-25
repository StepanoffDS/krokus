import styles from './profile-wrapper-container.module.scss';

interface Props {
	title: string;
	children: React.ReactNode;
	className?: string;
	text?: string | JSX.Element;
}

const ProfileWrapperContainer = ({
	className,
	title,
	text,
	children,
}: Props) => {
	return (
		<div className={`${styles['wrapper']} ${className}`}>
			<h2 className={`${styles['title']} title-2`}>{title}</h2>
			<div className={styles['content']}>
				{text && <p className='profile-desc'>{text}</p>}
				{children}
			</div>
		</div>
	);
};

export default ProfileWrapperContainer;
