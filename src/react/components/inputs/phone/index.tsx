import { regions } from '@@/constants/company-info';
import styles from './phone.module.scss';
import Select from '../select';
import { FormInput } from '../input';

interface Props {
  className?: string;
  hasLabel?: boolean;
  id: string;
}

const PhoneInput = ({ className, hasLabel = true, id }: Props) => {
  return (
    <div className={`${styles['phone']} ${className}`}>
      <Select
        id={id + 'region'}
        options={regions}
        className={styles['region']}
        color="black"
      />
      <FormInput
        type="number"
        placeholder="Phone number"
        id={id + 'phone'}
        label={hasLabel ? 'Phone number' : ''}
      />
    </div>
  );
};

export default PhoneInput;
