"use client";

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function PortfolioNav() {
  const goToSection = (id: string, offset = 20) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    smoothScrollTo(y, 900);
  };

  return (
    <nav className="fixed right-10 top-10 flex flex-col gap-4 text-sm font-medium z-50">
      <button onClick={() => goToSection("about")} className="px-4 py-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 font-bold text-left">
        Sobre mim
      </button>

      <button onClick={() => goToSection("projects")} className="px-4 py-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 font-bold text-left">
        Projetos
      </button>

      <button onClick={() => goToSection("contact")} className="px-4 py-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 font-bold text-left">
        Contato
      </button>
    </nav>
  );
}