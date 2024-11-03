import Link from "next/link";
import { BottomBorder } from "@/components/ui";

interface Props {
  text?: string;
  className?: string;
  size?: "sm";
}
export default function Logo({ text = "Prem", className, size }: Props) {
  return (
    <Link href="/" className={`${className} w-fit`}>
      <div className="relative w-fit">
        <h1
          className={`relative z-10 font-zeyada ${
            size === "sm" ? "text-3xl" : "text-6xl"
          }`}
        >
          {text}
        </h1>
        <BottomBorder className="bottom-2" />
      </div>
    </Link>
  );
}
