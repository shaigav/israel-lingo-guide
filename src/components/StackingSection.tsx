import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StackingSectionProps {
  children: ReactNode;
  index: number;
  total: number;
  className?: string;
}

const StackingSection = ({ children, index, total, className = '' }: StackingSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: index < total - 1 ? scale : 1,
        opacity: index < total - 1 ? opacity : 1,
        zIndex: index + 1,
      }}
      className={`sticky top-20 min-h-[100vh] ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default StackingSection;
