import Link from "next/link";

interface Props {
  className?: string;
  size?: "sm";
}
export default function Logo({ className, size }: Props) {
  return (
    <Link href="/" className={`${className}`}>
      <div className="relative w-fit">
        <h1
          className={`font-zeyada ${size === "sm" ? "text-3xl" : "text-6xl"}`}
        >
          Preme
        </h1>
        <div className="absolute bottom-2 bg-yellow-400 h-1/3 w-full -rotate-3 -z-10" />
      </div>
    </Link>
  );
}
