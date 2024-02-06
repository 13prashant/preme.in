interface Props {
  className?: string;
}

export default function BottomBorder({ className }: Props) {
  return (
    <div
      className={`${className} absolute bg-yellow-400 dark:bg-yellow-700 h-1/3 w-full -rotate-3`}
    />
  );
}
