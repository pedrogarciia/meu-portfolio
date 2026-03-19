import { Inter, Space_Grotesk } from "next/font/google";
import PortfolioNav from "./PortfolioNav";

export const metadata = {
  title: "Portfólio",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <PortfolioNav />
      {children}
    </div>
  );
}
