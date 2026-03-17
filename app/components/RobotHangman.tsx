type RobotHangmanProps = {
  errors: number;
};

export default function RobotHangman({ errors }: RobotHangmanProps) {
  const isDead = errors >= 6;

  return (
    <div className="flex items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20">
      <svg
        width="260"
        height="320"
        viewBox="0 0 260 320"
        className="overflow-visible"
      >
        {/* brilho de fundo */}
        <circle
          cx="130"
          cy="140"
          r="90"
          className={`transition-all duration-500 ${
            isDead ? "fill-red-500/10" : "fill-cyan-400/10"
          }`}
        />

        {/* antena */}
        {errors < 5 && (
          <>
            <line
              x1="130"
              y1="38"
              x2="130"
              y2="18"
              stroke="rgb(212 212 216)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="130"
              cy="12"
              r="6"
              className="fill-cyan-400 transition-all duration-500"
            />
          </>
        )}

        {/* cabeça */}
        <rect
          x="85"
          y="40"
          width="90"
          height="70"
          rx="16"
          className={`transition-all duration-500 ${
            isDead ? "fill-zinc-800" : "fill-zinc-700"
          }`}
        />

        {/* olhos */}
        {isDead ? (
          <>
            <line
              x1="106"
              y1="62"
              x2="120"
              y2="76"
              stroke="rgb(239 68 68)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="120"
              y1="62"
              x2="106"
              y2="76"
              stroke="rgb(239 68 68)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="140"
              y1="62"
              x2="154"
              y2="76"
              stroke="rgb(239 68 68)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="154"
              y1="62"
              x2="140"
              y2="76"
              stroke="rgb(239 68 68)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <circle cx="113" cy="69" r="7" className="fill-cyan-400" />
            <circle cx="147" cy="69" r="7" className="fill-cyan-400" />
          </>
        )}

        {/* boca */}
        <rect
          x="112"
          y="86"
          width="36"
          height="6"
          rx="3"
          className={`${isDead ? "fill-red-500" : "fill-zinc-300"}`}
        />

        {/* pescoço */}
        <rect x="121" y="110" width="18" height="16" rx="4" className="fill-zinc-500" />

        {/* corpo */}
        <rect
          x="95"
          y="126"
          width="70"
          height="82"
          rx="14"
          className={`transition-all duration-500 ${
            isDead ? "fill-zinc-800" : "fill-zinc-800"
          }`}
        />

        {/* painel no peito */}
        <rect
          x="110"
          y="142"
          width="40"
          height="18"
          rx="6"
          className={`${isDead ? "fill-red-500/40" : "fill-cyan-400/30"}`}
        />

        <circle
          cx="118"
          cy="180"
          r="5"
          className={`${isDead ? "fill-red-500/60" : "fill-cyan-400"}`}
        />
        <circle
          cx="130"
          cy="180"
          r="5"
          className={`${isDead ? "fill-red-500/40" : "fill-zinc-500"}`}
        />
        <circle
          cx="142"
          cy="180"
          r="5"
          className={`${isDead ? "fill-red-500/20" : "fill-zinc-500"}`}
        />

        {/* braço esquerdo - some no erro 3 */}
        {errors < 3 && (
          <>
            <line
              x1="95"
              y1="145"
              x2="58"
              y2="175"
              stroke="rgb(161 161 170)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="53" cy="180" r="9" className="fill-zinc-500" />
          </>
        )}

        {/* braço direito - some no erro 4 */}
        {errors < 4 && (
          <>
            <line
              x1="165"
              y1="145"
              x2="202"
              y2="175"
              stroke="rgb(161 161 170)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="207" cy="180" r="9" className="fill-zinc-500" />
          </>
        )}

        {/* perna esquerda - some no erro 1 */}
        {errors < 1 && (
          <line
            x1="115"
            y1="208"
            x2="96"
            y2="255"
            stroke="rgb(161 161 170)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        )}

        {/* perna direita - some no erro 2 */}
        {errors < 2 && (
          <line
            x1="145"
            y1="208"
            x2="164"
            y2="255"
            stroke="rgb(161 161 170)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        )}

        {/* base dos pés */}
        {errors < 1 && (
          <line
            x1="84"
            y1="258"
            x2="106"
            y2="258"
            stroke="rgb(113 113 122)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        )}

        {errors < 2 && (
          <line
            x1="154"
            y1="258"
            x2="176"
            y2="258"
            stroke="rgb(113 113 122)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        )}

        {/* efeito de morte */}
        {isDead && (
          <>
            <line
              x1="90"
              y1="45"
              x2="175"
              y2="108"
              stroke="rgb(239 68 68)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
            <line
              x1="175"
              y1="45"
              x2="90"
              y2="108"
              stroke="rgb(239 68 68)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
          </>
        )}
      </svg>
    </div>
  );
}