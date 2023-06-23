import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "400", "600"],
});

export const metadata = {
  title: "Prem Dave",
  description: "Legal insights, captivating stories, & soulful music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans`}>{children}</body>
    </html>
  );
}
