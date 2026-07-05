"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STARS = [
  [50, 40], [120, 80], [200, 30], [320, 60], [410, 20],
  [530, 70], [620, 35], [750, 55], [840, 25], [950, 65],
  [1050, 40], [1100, 85], [1300, 50], [1380, 30], [1420, 70],
  [80, 120], [240, 100], [460, 110], [680, 90], [900, 115],
  [1150, 95], [1350, 105], [170, 150], [390, 140], [610, 160],
];

const STAR_SIZES = [1.2, 0.8, 1.0, 0.6, 1.0, 1.5, 0.9, 0.5, 0.8, 1.0,
  0.5, 0.9, 0.6, 1.2, 1.1, 0.6, 0.7, 1.1, 0.5, 1.5, 0.7, 1.4, 1.3, 0.5, 0.9];

const RAIN = [
  [100, 50], [200, 150], [350, 80], [500, 200], [650, 30],
  [750, 180], [900, 100], [1000, 250], [1100, 60], [1200, 300],
  [150, 320], [300, 180], [450, 280], [600, 120], [700, 350],
  [850, 200], [950, 80], [1050, 280], [1150, 150], [1300, 220],
  [80, 250], [400, 350], [720, 60], [1020, 180], [1350, 300],
  [250, 100], [550, 240], [820, 320], [1080, 400], [1400, 150],
];

const RAIN_DURATIONS = [1.2, 0.8, 1.5, 1.0, 0.9, 1.3, 0.7, 1.1, 1.4, 0.8,
  1.0, 0.6, 1.2, 0.9, 1.5, 0.7, 1.1, 0.8, 1.3, 0.9, 1.0, 0.6, 1.4, 0.7, 1.2,
  0.8, 1.1, 0.9, 1.3, 0.6];

export default function CityScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050505" />
            <stop offset="100%" stopColor="#0F0F0F" />
          </linearGradient>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EDEBE4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EDEBE4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EDEBE4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EDEBE4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1440" height="600" fill="url(#skyGrad)" />

        {/* Moon */}
        <circle cx="1200" cy="80" r="40" fill="url(#moonGlow)" />
        <circle cx="1200" cy="80" r="18" fill="#EDEBE4" opacity="0.15" />
        <circle cx="1210" cy="75" r="14" fill="#0a0a0a" opacity="0.8" />

        {/* Stars */}
<style>{`
  @keyframes twinkle { 0%,100%{opacity:0.1} 50%{opacity:0.6} }
  ${STARS.map((_, i) => `.star-${i}{animation:twinkle ${2 + (i % 3)}s infinite ${(i % 5) * 0.6}s}`).join('\n')}
`}</style>
{STARS.map(([cx, cy], i) => (
  <circle
    key={i}
    cx={cx}
    cy={cy}
    r={STAR_SIZES[i]}
    fill="#EDEBE4"
    className={`star-${i}`}
  />
))}

        {/* Moving clouds */}
        <motion.g animate={{ x: [0, 200] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} opacity="0.04">
          <ellipse cx="200" cy="100" rx="120" ry="30" fill="#EDEBE4" />
          <ellipse cx="250" cy="90" rx="80" ry="25" fill="#EDEBE4" />
        </motion.g>
        <motion.g animate={{ x: [0, -200] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} opacity="0.03">
          <ellipse cx="800" cy="130" rx="150" ry="35" fill="#EDEBE4" />
          <ellipse cx="860" cy="115" rx="100" ry="28" fill="#EDEBE4" />
        </motion.g>

        {/* Far background buildings */}
        <rect x="0" y="380" width="50" height="220" fill="#111" />
        <rect x="55" y="350" width="40" height="250" fill="#0f0f0f" />
        <rect x="100" y="370" width="60" height="230" fill="#111" />
        <rect x="165" y="340" width="45" height="260" fill="#0f0f0f" />
        <rect x="215" y="360" width="55" height="240" fill="#111" />
        <rect x="275" y="330" width="50" height="270" fill="#0f0f0f" />
        <rect x="900" y="350" width="55" height="250" fill="#111" />
        <rect x="960" y="330" width="45" height="270" fill="#0f0f0f" />
        <rect x="1010" y="360" width="60" height="240" fill="#111" />
        <rect x="1075" y="340" width="50" height="260" fill="#0f0f0f" />
        <rect x="1130" y="370" width="55" height="230" fill="#111" />
        <rect x="1190" y="345" width="60" height="255" fill="#0f0f0f" />
        <rect x="1255" y="355" width="50" height="245" fill="#111" />
        <rect x="1310" y="335" width="60" height="265" fill="#0f0f0f" />
        <rect x="1375" y="360" width="65" height="240" fill="#111" />

        {/* Main buildings — left */}
        <rect x="0" y="300" width="90" height="300" fill="#1a1a1a" />
        <rect x="95" y="260" width="70" height="340" fill="#1C1C1C" />
        <rect x="170" y="280" width="110" height="320" fill="#1a1a1a" />
        <rect x="285" y="240" width="85" height="360" fill="#1C1C1C" />
        <rect x="375" y="270" width="95" height="330" fill="#1a1a1a" />
        <rect x="475" y="250" width="70" height="350" fill="#1C1C1C" />

        {/* Rooftop details */}
        <rect x="30" y="293" width="6" height="20" fill="#222" />
        <rect x="45" y="285" width="4" height="28" fill="#222" />
        <rect x="130" y="250" width="8" height="22" fill="#222" />
        <rect x="185" y="258" width="20" height="14" fill="#222" />
        <rect x="182" y="272" width="26" height="4" fill="#1a1a1a" />
        <rect x="190" y="244" width="3" height="14" fill="#222" />
        <rect x="320" y="225" width="2" height="18" fill="#333" />
        <rect x="315" y="225" width="12" height="2" fill="#333" />
        <ellipse cx="410" cy="265" rx="10" ry="5" fill="#222" />
        <rect x="409" y="265" width="2" height="8" fill="#222" />

        {/* Center tall building */}
        <rect x="550" y="200" width="120" height="400" fill="#1C1C1C" />
        <rect x="675" y="230" width="90" height="370" fill="#1a1a1a" />
        <motion.circle cx="610" cy="198" r="3" fill="#EDEBE4"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Right cluster */}
        <rect x="770" y="250" width="95" height="350" fill="#1C1C1C" />
        <rect x="870" y="220" width="80" height="380" fill="#1a1a1a" />
        <rect x="955" y="260" width="100" height="340" fill="#1C1C1C" />
        <rect x="1060" y="240" width="85" height="360" fill="#1a1a1a" />
        <rect x="1150" y="260" width="95" height="340" fill="#1C1C1C" />
        <rect x="1250" y="230" width="75" height="370" fill="#1a1a1a" />
        <rect x="1330" y="255" width="110" height="345" fill="#1C1C1C" />
        <rect x="800" y="232" width="22" height="16" fill="#222" />
        <rect x="797" y="248" width="28" height="4" fill="#1a1a1a" />
        <rect x="808" y="218" width="3" height="14" fill="#222" />

        {/* Windows — left */}
        {[0, 95, 170, 285, 375, 475].map((bx, bi) => (
          <g key={`wl-${bi}`}>
            {[0, 1, 2, 3, 4].map((row) =>
              [0, 1, 2].map((col) => (
                <rect key={`${row}-${col}`}
                  x={bx + 10 + col * 22} y={320 + row * 28}
                  width="10" height="14" fill="#EDEBE4"
                  opacity={(row + col + bi) % 3 === 0 ? 0.12 : 0.03}
                />
              ))
            )}
          </g>
        ))}

        {/* Windows — center */}
        {[0, 1, 2, 3, 4, 5, 6].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect key={`wc-${row}-${col}`}
              x={560 + col * 26} y={220 + row * 28}
              width="12" height="16" fill="#EDEBE4"
              opacity={(row + col) % 2 === 0 ? 0.1 : 0.02}
            />
          ))
        )}

        {/* Windows — right */}
        {[770, 870, 955, 1060, 1150, 1250, 1330].map((bx, bi) => (
          <g key={`wr-${bi}`}>
            {[0, 1, 2, 3, 4].map((row) =>
              [0, 1, 2].map((col) => (
                <rect key={`${row}-${col}`}
                  x={bx + 10 + col * 24} y={300 + row * 28}
                  width="10" height="14" fill="#EDEBE4"
                  opacity={(row + col + bi) % 3 === 0 ? 0.1 : 0.02}
                />
              ))
            )}
          </g>
        ))}

        {/* Ground */}
        <rect x="0" y="510" width="1440" height="90" fill="#0d0d0d" />
        <rect x="0" y="508" width="1440" height="3" fill="#2a2a2a" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <rect key={`road-${i}`} x={i * 120} y="540" width="60" height="3" fill="#2a2a2a" opacity="0.5" />
        ))}
        <rect x="0" y="510" width="1440" height="4" fill="#1a1a1a" />

        {/* Street lights */}
        {[80, 250, 420, 590, 760, 930, 1100, 1270, 1420].map((x, i) => (
          <g key={`lamp-${i}`}>
            <rect x={x} y="450" width="4" height="62" fill="#2a2a2a" />
            <rect x={x - 18} y="448" width="42" height="4" fill="#2a2a2a" />
            <circle cx={x + 14} cy="448" r="5" fill="#EDEBE4" opacity="0.5" />
            <ellipse cx={x + 14} cy="460" rx="25" ry="20" fill="url(#lampGlow)" />
          </g>
        ))}

        {/* Rain */}
        {RAIN.map(([x, y], i) => (
          <motion.line key={`rain-${i}`}
            x1={x} y1={y} x2={x + 5} y2={y + 15}
            stroke="#EDEBE4" strokeWidth="0.5" opacity="0.04"
            animate={{ y1: [-20, 600], y2: [-5, 615], opacity: [0, 0.06, 0] }}
            transition={{ duration: RAIN_DURATIONS[i], repeat: Infinity, delay: (i % 7) * 0.4, ease: "linear" }}
          />
        ))}

        {/* Walking character */}
        <motion.g
          animate={{ x: [-80, 1520] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <ellipse cx="5" cy="524" rx="8" ry="2" fill="#000" opacity="0.4" />
          <rect x="1" y="500" width="8" height="18" rx="2" fill="#EDEBE4" opacity="0.85" />
          <circle cx="5" cy="496" r="5" fill="#EDEBE4" opacity="0.85" />
          <motion.line x1="1" y1="504" x2="-4" y2="512"
            stroke="#EDEBE4" strokeWidth="2" strokeLinecap="round" opacity="0.85"
            animate={{ x2: [-4, 2, -4], y2: [512, 510, 512] }}
            transition={{ duration: 0.45, repeat: Infinity, ease: "linear" }}
          />
          <motion.line x1="9" y1="504" x2="14" y2="512"
            stroke="#EDEBE4" strokeWidth="2" strokeLinecap="round" opacity="0.85"
            animate={{ x2: [14, 8, 14], y2: [512, 510, 512] }}
            transition={{ duration: 0.45, repeat: Infinity, ease: "linear", delay: 0.225 }}
          />
          <motion.line x1="3" y1="518" x2="-1" y2="526"
            stroke="#EDEBE4" strokeWidth="2.5" strokeLinecap="round" opacity="0.85"
            animate={{ x2: [-1, 5, -1], y2: [526, 524, 526] }}
            transition={{ duration: 0.45, repeat: Infinity, ease: "linear" }}
          />
          <motion.line x1="7" y1="518" x2="11" y2="526"
            stroke="#EDEBE4" strokeWidth="2.5" strokeLinecap="round" opacity="0.85"
            animate={{ x2: [11, 5, 11], y2: [526, 524, 526] }}
            transition={{ duration: 0.45, repeat: Infinity, ease: "linear", delay: 0.225 }}
          />
        </motion.g>

      </svg>
    </div>
  );
}