import Link from "next/link";
import BottomBorder from "./common/BottomBorder";

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
        <BottomBorder className="bottom-2" />
      </div>
    </Link>
  );
}
