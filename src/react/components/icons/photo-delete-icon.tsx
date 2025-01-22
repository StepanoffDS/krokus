interface Props {
  className?: string;
}

const PhotoDeleteIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 1L.5 12m11 0L.5 1"
        stroke="#251F1F"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PhotoDeleteIcon;
