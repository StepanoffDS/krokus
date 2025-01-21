interface Props {
  className?: string;
}

const ArrowMenu = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width={10}
      height={6}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.168l4 3.664 4-3.664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowMenu;
