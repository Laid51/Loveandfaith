import { useEffect, useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function HeartRain() {
  const prefersReducedMotion = useReducedMotion();
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Generate hearts on mount
  useEffect(() => {
    if (prefersReducedMotion) return;

    const generateHearts = () => {
      const newHearts: Heart[] = [];
      const count = window.innerWidth < 768 ? 15 : 25; // Fewer on mobile

      for (let i = 0; i < count; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 16 + 8, // 8-24px
          duration: Math.random() * 10 + 15, // 15-25s
          delay: Math.random() * 10,
          opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || hearts.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: '-50px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [0, 360],
            scale: [1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <HeartIcon size={heart.size} opacity={heart.opacity} />
        </motion.div>
      ))}
    </div>
  );
}

function HeartIcon({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary"
      style={{ opacity }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
