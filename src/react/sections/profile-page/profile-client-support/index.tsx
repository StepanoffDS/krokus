import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import styles from './profile-client-support.module.scss';
import { FormInput } from '@@/react/components/inputs/input';
import Button from '@@/react/components/ui/button';
import PhoneInput from '@@/react/components/inputs/phone';
import Textarea from '@@/react/components/inputs/input/textarea';

interface Props {
  className?: string;
}

const ProfileClientSupport = ({ className }: Props) => {
  return (
    <ProfileWrapperContainer
      className={className}
      title="Client support center"
      text={
        <>
          Mūsu pakalpojumu mērķis ir apkalpot mūsu klientus augstākajā līmenī.
          Ja Jums rodas kādas problēmas vai kādi jautājumi, droši mums rakstiet!{' '}
          <br /> Mēs atbildēsim uz visiem jautājumiem maksimāli īsā laikā.
        </>
      }
    >
      <form action="" className={styles['profile-form']}>
        <div className={styles['form-sections']}>
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
          <PhoneInput id="clientSupport" className={styles['phone']} />
          <Textarea
            id="message"
            placeholder="Your message"
            className={styles['textarea']}
            rows={5}
          />
        </div>
        <div className={styles['form-actions']}>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </ProfileWrapperContainer>
  );
};

export default ProfileClientSupport;
