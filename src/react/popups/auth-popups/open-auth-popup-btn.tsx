import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';

interface Props {
  child: JSX.Element;
}

const OpenAuthPopupBtn = ({ child }: Props) => {
  const { setIsOpen } = useComponentsStore(
    useShallow((state) => ({
      setIsOpen: state.setIsAuthPopupOpen,
    })),
  );

  return <button onClick={() => setIsOpen(true)}>{child}</button>;
};

export default OpenAuthPopupBtn;
