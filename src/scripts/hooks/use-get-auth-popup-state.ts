import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';

function useGetAuthPopupState() {
  const { isOpen, setIsOpen } = useComponentsStore(
    useShallow((state) => ({
      isOpen: state.isAuthPopupOpen,
      setIsOpen: state.setIsAuthPopupOpen,
    })),
  );

  return { isOpen, setIsOpen };
}

export default useGetAuthPopupState;
