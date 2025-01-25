import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import ClientSupportForm from '@@/react/components/forms/client-support-form';

interface Props {
	className?: string;
}

const ProfileClientSupport = ({ className }: Props) => {
	return (
		<ProfileWrapperContainer
			className={className}
			title='Client support center'
			text={
				<>
					Mūsu pakalpojumu mērķis ir apkalpot mūsu klientus augstākajā līmenī.
					Ja Jums rodas kādas problēmas vai kādi jautājumi, droši mums rakstiet!{' '}
					<br /> Mēs atbildēsim uz visiem jautājumiem maksimāli īsā laikā.
				</>
			}
		>
			<ClientSupportForm />
		</ProfileWrapperContainer>
	);
};

export default ProfileClientSupport;
