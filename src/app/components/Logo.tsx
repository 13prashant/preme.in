import Link from "next/link";
import BottomBorder from "./common/BottomBorder";

interface Props {
  text?: string;
  className?: string;
  size?: "sm";
}
export default function Logo({ text = "Preme", className, size }: Props) {
  return (
    <Link href="/" className={`${className} w-fit`}>
      <div className="relative w-fit">
        <h1
          className={`font-zeyada ${size === "sm" ? "text-3xl" : "text-6xl"}`}
        >
          {text}
        </h1>
        <BottomBorder className="bottom-2" />
      </div>
    </Link>
  );
}
