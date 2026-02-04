import { useEffect, useState } from 'react';
import './HeartRain.css';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const HeartRain = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate 50 hearts with random properties for intense rain
    const generatedHearts: Heart[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      animationDuration: 8 + Math.random() * 6, // 8-14 seconds
      animationDelay: Math.random() * 8, // 0-8 seconds delay
      size: 20 + Math.random() * 15, // 20-35px
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="heart-rain-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HeartRain;
