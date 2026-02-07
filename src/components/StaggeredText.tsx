import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StaggeredTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

const StaggeredText = ({ text, className = '', as: Tag = 'h2', delay = 0 }: StaggeredTextProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const words = text.split(' ');

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block ml-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
};

export default StaggeredText;
