interface Props {
  className?: string;
}

export default function BottomBorder({ className }: Props) {
  return (
    <div
      className={`${className} absolute bg-yellow-400 h-1/3 w-full -rotate-3 -z-10`}
    />
  );
}
