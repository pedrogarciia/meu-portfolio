import { Inter, Space_Grotesk } from "next/font/google";

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
      <nav className="fixed right-10 top-1/7 -translate-y-1/2 flex flex-col gap-4 text-sm font-medium">
        <a
          href="#about"
          className="px-4 py-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 font-bold"
        >
          Sobre mim
        </a>

        <a
          href="#projects"
          className="px-4 py-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 font-bold"
        >
          Projetos
        </a>

        <a
          href="#contact"
          className="px-4 py-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 font-bold"
        >
          Contato
        </a>
      </nav>

      {children}
    </div>
  );
}
