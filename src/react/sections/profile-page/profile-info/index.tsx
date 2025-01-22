import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import styles from './profile-info.module.scss';
import { FormInput } from '@@/react/components/inputs/input';
import Button from '@@/react/components/ui/button';
import PhoneInput from '@@/react/components/inputs/phone';
import PasswordInput from '@@/react/components/inputs/password';

interface Props {
  className?: string;
}

const ProfileInfo = ({ className }: Props) => {
  return (
    <ProfileWrapperContainer className={className} title="Personal data">
      <form action="" className={styles['profile-form']}>
        <div className={styles['form-sections']}>
          <section className={styles['form-section']}>
            <p className={`${styles['desc']} profile-desc`}>
              You can change your personal data here
            </p>
            <FormInput
              type="text"
              placeholder="John Doe"
              id="name"
              label="Name, Surname"
            />

            <FormInput
              type="text"
              placeholder="john@doe.com"
              id="email"
              label="E-mail"
            />
            <PhoneInput id="personalNumber" />
          </section>
          <section className={styles['form-section']}>
            <p className={`${styles['desc']} profile-desc`}>Set new password</p>
            <PasswordInput id="newPassword" placeholder="New password" />
            <PasswordInput
              id="repeatNewPassword"
              placeholder="Repeat new password"
            />
            <a href="#!" className={styles['forgot-password']}>
              Aizmirsu paroli?
            </a>
          </section>
        </div>
        <div className={styles['form-actions']}>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </ProfileWrapperContainer>
  );
};

export default ProfileInfo;
