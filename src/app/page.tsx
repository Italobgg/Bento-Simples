import { BentoCard } from '@/src/components/BentoCard'
import { BentoGrid } from '@/src/components/BentoGrid'
import { Header } from '@/src/components/Header'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi' // Ícone de seta

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Header />

      <BentoGrid>
        <BentoCard className="md:col-span-2">
          <h3 className="mb-2 text-xl font-bold">💻 Projetos</h3>
          <p className="mb-4 text-brand-gray">
            Meus principais trabalhos e estudos recentes.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-brand-green transition-colors hover:text-brand-light"
          >
            Ver todos <HiArrowRight />
          </a>
        </BentoCard>

        <BentoCard>
          <h3 className="mb-2 text-xl font-bold">🧠 Sobre Mim</h3>
          <p className="text-brand-gray">
            Apaixonado por criar interfaces fluidas e acessíveis.
          </p>
        </BentoCard>

        <BentoCard>
          <h3 className="mb-2 text-xl font-bold">🌐 Redes</h3>
          <div className="flex justify-around gap-4 py-4">
            <a
              href="https://github.com/Italobgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray transition-transform hover:text-brand-green hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/italobgg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray transition-transform hover:text-brand-green hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-2">
          <h3 className="mb-2 text-xl font-bold">📄 Currículo</h3>
          <p className="mb-4 text-brand-gray">
            Veja minha trajetória profissional e habilidades detalhadas.
          </p>
          <a
            href="/curriculo-italo.pdf"
            target="_blank"
            className="flex items-center gap-2 text-brand-green transition-colors hover:text-brand-light"
          >
            Baixar PDF <HiArrowRight />
          </a>
        </BentoCard>
      </BentoGrid>
    </main>
  )
}