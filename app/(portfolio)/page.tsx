import Image from "next/image";

import { Inter, Space_Grotesk, Orbitron, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});



export default function Home() {
  return (
    <main
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} bg-cover bg-center text-white`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/fundo-portfolio.png')",
      }}
    >

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-10 xl:px-16">

        <div className="ax-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

          {/* FOTO */}
          <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] lg:w-[350px] lg:h-[420px] shrink-0">
            <Image
              src="/foto-portfolio.jpeg"
              alt="Foto de Pedro Garcia"
              fill
              className="rounded-2xl object-cover shadow-2xl grayscale"
            />
          </div>

          {/* TEXTO */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-(family-name:--font-space)">
              Pedro Garcia
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-(family-name:--font-inter)">
              Sou estudante de <span className="text-white font-semibold">Computação</span> e
              desenvolvedor em formação, apaixonado por <span className="text-white font-semibold">tecnologia </span>
              e pelo processo de transformar <span className="text-white font-semibold">ideias em soluções reais </span>
              por meio da programação. Tenho grande interesse em aprender continuamente e explorar novas
              ferramentas, linguagens e conceitos que ampliem minha forma de pensar e construir software.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-(family-name:--font-inter)">
              Ao longo da minha formação, venho desenvolvendo <span className="text-white font-semibold">projetos pessoais </span>
              que me permitem aplicar na prática os conhecimentos adquiridos, além de aprimorar habilidades
              como <span className="text-white font-semibold">organização de código</span>,
              <span className="text-white font-semibold"> resolução de problemas</span> e uso de
              <span className="text-white font-semibold"> boas práticas de desenvolvimento</span>.
              Gosto de encarar cada projeto como uma oportunidade de evoluir como desenvolvedor
              e entender melhor como sistemas são planejados, construídos e melhorados ao longo do tempo.
            </p>

          </div>

        </div>

        {/* STACKS */}
        <div className="max-w-6xl mx-auto w-full mt-12 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-center">

          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">Next.js</span>
          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">React</span>
          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">Python</span>
          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">SQL</span>
          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">C</span>
          <span className="bg-zinc-800 px-4 py-2 rounded-md text-sm">Git</span>

        </div>

      </section>

      {/* PROJETOS */}
      <section
        id="projects"
        className="min-h-screen px-20 flex flex-col items-center pt-12 scroll-mt-40"
        style={{ scrollMarginTop: "-20px" }}
      >
        {/* Título */}
        <h2 className="text-8xl mb-20 text-center font-bold font-(family-name:--font-orbitron)">
          Projetos
        </h2>

        {/* Card do projeto */}
        <a href="/projetos/jogo-da-forca" target="_blank" rel="noopener noreferrer">
          <div className="w-full max-w-sm min-h-[420px] bg-white rounded-3xl shadow-xl flex flex-col items-center justify-between p-8 hover:scale-105 transition cursor-pointer">

            {/* Imagem */}
            <Image
              src="/forca.png"
              alt="Jogo da Forca"
              width={280}
              height={280}
              className="mb-8 w-full max-w-[260px] h-auto"
            />

            {/* Texto */}
            <p className="text-xl text-black font-semibold">
              Jogo da forca com Next.js
            </p>

          </div>
        </a>
      </section>

      {/* CONTATO */}
      <section
        id="contact"
        className="min-h-screen px-6 md:px-10 xl:px-16 flex flex-col justify-start pt-20 lg:pt-24 scroll-mt-240"
        style={{ scrollMarginTop: "-20px" }}>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 font-(family-name:--font-space)">Contatos</h2>

        <div className="flex flex-col md:flex-row gap-16">

          {/* LADO ESQUERDO: Email e telefone */}
          <div className="flex-1 space-y-6">
            <div className="bg-zinc-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 font-(family-name:--font-space)">Fale comigo</h3>
              <p className="text-gray-300 text-lg">
                Atualmente, estou dedicado a explorar e criar projetos que unem programação e experiências interativas. Se você está desenvolvendo um software, jogo ou aplicação que se beneficiaria de uma implementação bem estruturada e pensada, entre em contato pelo email <span className="text-white font-semibold">pedrojordao2005@email.com </span>
                e conte um pouco mais sobre o seu projeto.
              </p>

              <p className="text-gray-300 text-lg mt-4">
                Telefone: <span className="text-white font-medium">+55 81 99186-9816</span>
              </p>
            </div>
          </div>

          {/* LADO DIREITO: Redes sociais */}
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-semibold font-(family-name:--font-space)">Outras formas</h3>

            <div className="grid grid-cols-2 gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/pedrogarciiaj"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="filter brightness-75 hover:brightness-100 transition"
                />
                <span className="text-xl font-semibold">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pedro-garcia-jordão/"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  className="filter brightness-75 hover:brightness-100 transition"
                />
                <span className="text-xl font-semibold">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/pedrogarciia"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition"
              >
                <Image
                  src="/icons/github.png"
                  alt="GitHub"
                  width={50}
                  height={50}
                  className="filter brightness-75 hover:brightness-100 transition"
                />
                <span className="text-xl font-semibold">GitHub</span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/garciiaj"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition"
              >
                <Image
                  src="/icons/discord.png"
                  alt="Discord"
                  width={50}
                  height={50}
                  className="filter brightness-75 hover:brightness-100 transition"
                />
                <span className="text-xl font-semibold">Discord</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
{/*npm run dev*/ }
