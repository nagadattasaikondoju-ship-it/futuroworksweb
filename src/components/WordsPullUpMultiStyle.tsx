import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delay?: number;
  stagger?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  containerClassName = "",
  delay = 0,
  stagger = 0.07
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Flatten segments into an array of words with their corresponding class names
  const wordsWithStyles = segments.flatMap((segment) => {
    const segmentWords = segment.text.split(" ").filter(w => w.length > 0);
    return segmentWords.map((word) => ({
      word,
      className: segment.className || ""
    }));
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap items-center justify-center ${containerClassName}`}>
      {wordsWithStyles.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden py-1">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {item.word}
          </motion.span>
          {index < wordsWithStyles.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </div>
  );
};
