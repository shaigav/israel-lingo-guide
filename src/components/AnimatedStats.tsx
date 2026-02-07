import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 18, label: 'יחידות דיור' },
  { value: 6, label: 'קומות' },
  { value: 100, suffix: '%', label: 'מחויבות לאיכות' },
  { value: 1, label: 'פרויקט בביצוע' },
];

const StatNumber = ({ value, suffix, label, index }: StatItem & { index: number }) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });
  
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-7xl font-extralight text-foreground mb-4 tracking-tighter">
        {count}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <div className="w-8 h-px bg-accent/40 mx-auto mb-4" />
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
            במספרים
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <StatNumber key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
