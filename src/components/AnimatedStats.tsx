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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatNumber key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
