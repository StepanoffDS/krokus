interface Props {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

export const togglePopup = ({ setIsOpen, isOpen }: Props) => {
  setIsOpen(!isOpen);
  document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  const classListAction = !isOpen ? 'add' : 'remove';
  document.body.classList[classListAction]('overlay');
};
