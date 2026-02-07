import { useCountUp } from '@/hooks/useCountUp';

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

const StatNumber = ({ value, suffix, label }: StatItem) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });
  
  return (
    <div ref={ref} className="relative text-center group">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
      
      <div className="pt-6 pb-4">
        <div className="text-5xl md:text-6xl font-light text-foreground mb-3 tracking-tight">
          {count}
          {suffix && <span className="text-accent">{suffix}</span>}
        </div>
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
          {label}
        </div>
      </div>
      
      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            במספרים
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatNumber key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
