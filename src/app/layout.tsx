import { Poppins, Zeyada } from "next/font/google";
import Providers from "./providers";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "400", "600", "700", "800"],
});

const zeyada = Zeyada({
  subsets: ["latin"],
  variable: "--font-zeyada",
  weight: "400",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${zeyada.variable} flex flex-col h-screen`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
