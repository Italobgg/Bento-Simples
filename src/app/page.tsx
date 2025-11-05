import { BentoCard } from "@/src/components/BentoCard";
import { BentoGrid } from "@/src/components/BentoGrid";
import { Header } from "@/src/components/Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Header />

      <BentoGrid>
        <BentoCard
          className="
            md:col-span-2 
            bg-purple-100 text-purple-900 
            dark:bg-purple-700 dark:text-purple-100
          "
        >
          <h3 className="mb-2 text-xl font-bold">💻 Projetos</h3>
          <p className="mb-4 opacity-80">
            Meus principais trabalhos e estudos recentes.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-brand-green transition-colors 
                       hover:text-light-text dark:hover:text-brand-light"
          >
            Ver todos <HiArrowRight />
          </a>
        </BentoCard>

        <BentoCard
          className="
            bg-emerald-100 text-emerald-900 
            dark:bg-emerald-700 dark:text-emerald-100
          "
        >
          <h3 className="mb-2 text-xl font-bold">🧠 Sobre Mim</h3>
          <p className="opacity-80">
            Apaixonado por criar interfaces fluidas e acessíveis.
          </p>
        </BentoCard>

        <BentoCard
          className="
            bg-sky-100 text-sky-900 
            dark:bg-sky-700 dark:text-sky-100
          "
        >
          <h3 className="mb-2 text-xl font-bold">🌐 Redes</h3>
          <div className="flex justify-around gap-4 py-4">
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-transform hover:opacity-100 
                         hover:text-brand-green hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-transform hover:opacity-100 
                         hover:text-brand-green hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </BentoCard>

        <BentoCard
          className="
            md:col-span-2 
            bg-amber-100 text-amber-900 
            dark:bg-amber-700 dark:text-amber-100
          "
        >
          <h3 className="mb-2 text-xl font-bold">📄 Currículo</h3>
          <p className="mb-4 opacity-80">
            Veja minha trajetória profissional e habilidades detalhadas.
          </p>
          <a
            href="/curriculo-italo.pdf"
            target="_blank"
            className="flex items-center gap-2 text-brand-green transition-colors 
                       hover:text-light-text dark:hover:text-brand-light"
          >
            Baixar PDF <HiArrowRight />
          </a>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}
