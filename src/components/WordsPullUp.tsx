import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  wordClassName?: string;
  showAsterisk?: boolean;
  delay?: number;
  stagger?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = "",
  wordClassName = "",
  showAsterisk = false,
  delay = 0,
  stagger = 0.08
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <span key={i} className="inline-block overflow-hidden py-1">
            <motion.span
              className={`inline-block relative ${wordClassName}`}
              initial={{ y: 35, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 35, opacity: 0 }}
              transition={{
                duration: 0.65,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {word}
              {showAsterisk && isLastWord && (
                <span className="absolute top-[0.1em] -right-[0.35em] text-[0.4em] font-serif italic text-[#FFFF00] leading-none select-none">
                  *
                </span>
              )}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </div>
  );
};
