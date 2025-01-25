import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import ProfileInfoForm from '@@/react/components/forms/profile-info-form';

interface Props {
	className?: string;
}

const ProfileInfo = ({ className }: Props) => {
	return (
		<ProfileWrapperContainer className={className} title='Personal data'>
			<ProfileInfoForm />
		</ProfileWrapperContainer>
	);
};

export default ProfileInfo;
