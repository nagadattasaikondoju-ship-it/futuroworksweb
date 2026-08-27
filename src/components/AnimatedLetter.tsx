import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollLetterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<ScrollLetterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#737373", "#FFFFFF"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block transition-colors duration-150">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

interface ScrollTextRevealProps {
  text: string;
  className?: string;
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  className = ""
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.3"]
  });

  const characters = text.split("");
  const totalChars = characters.length;

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {characters.map((char, index) => {
        const charProgress = index / totalChars;
        const start = Math.max(0, charProgress - 0.08);
        const end = Math.min(1, charProgress + 0.04);

        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
