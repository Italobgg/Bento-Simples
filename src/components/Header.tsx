import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex w-full max-w-5xl items-center justify-between py-8">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.png"
          alt="Foto de Ítalo Garcia"
          width={64}
          height={64}
          className="h-16 w-16 rounded-full border-2 border-brand-green object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-brand-light">Ítalo Garcia</h1>
          <p className="text-md text-brand-gray">
            Front-End Developer | React | UX/UI
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Italobgg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gray transition-colors hover:text-brand-green"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/italobgg/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gray transition-colors hover:text-brand-green"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </header>
  );
};
