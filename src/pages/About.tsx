import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedStats from "@/components/AnimatedStats";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/harofe-25-render.jpg";

const values = [
  {
    icon: Target,
    title: "מיקוד באיכות",
    description: "אנחנו לא מאמינים בבנייה בסרט נע, אלא ביצירה אישית ומוקפדת שעומדת בסטנדרטים הגבוהים ביותר.",
  },
  {
    icon: Eye,
    title: "חזון ארוך טווח",
    description: "אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו - מבחירת המיקום ועד המפרט הטכני.",
  },
  {
    icon: Heart,
    title: "יחס אישי",
    description: "כחברת בוטיק, כל לקוח מקבל יחס אישי בגובה העיניים ותשומת לב מלאה לכל פרט.",
  },
  {
    icon: Award,
    title: "מצוינות",
    description: "כל פרויקט הוא יצירה ארכיטקטונית שאנחנו גאים לחתום עליה ומייצגת את הסטנדרטים שלנו.",
  },
];

const VisionQuote = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-2" />
      <div className="relative bg-primary p-10 rounded-lg shadow-xl">
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
          <span className="text-accent-foreground text-2xl font-bold">"</span>
        </div>
        <blockquote className="text-xl font-medium text-primary-foreground leading-relaxed">
          החזון שלנו פשוט: אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו – 
          החל מבחירת המיקום המדויק, דרך תכנון הפנים החכם ועד למפרט הטכני העשיר ביותר. 
          ב'גבריאלי מגורים', השקט הנפשי שלכם הוא יסוד הבניין שלנו.
        </blockquote>
      </div>
    </div>
  );
};

const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`group bg-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-accent/30 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
          <value.icon className="h-8 w-8 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden snap-start">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              אודות
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              חברה המתמחה בייזום ובנייה למגורים, עם תפיסת עולם שונה בנוף הנדל"ן הישראלי
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 snap-start">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
                החזון שלנו
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                יש על מי לבנות.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  חברת 'גבריאלי מגורים' הוקמה מתוך תפיסת עולם שונה בנוף הנדל"ן הישראלי: 
                  אנחנו לא מאמינים בבנייה ב'סרט נע', אלא ביצירה אישית ומוקפדת.
                </p>
                <p>
                  כחברה המתמחה בייזום ובנייה למגורים, שמנו לנו למטרה להעניק חוויית מגורים 
                  שמשלבת בין סטנדרט בנייה בלתי מתפשר, איתנות פיננסית של בנקים מובילים, 
                  ויחס אישי בגובה העיניים.
                </p>
                <p>
                  עבורנו, כל פרויקט ופרויקט הוא לא עוד שורה בטבלה, אלא יצירה ארכיטקטונית 
                  שאנחנו גאים לחתום עליה.
                </p>
              </div>
            </div>
            <VisionQuote />
          </div>
        </div>
      </section>

      {/* Values Section with alternating layout */}
      <section className="py-24 bg-secondary relative overflow-hidden snap-start">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              מה מנחה אותנו
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הערכים שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              העקרונות המנחים אותנו בכל פרויקט
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <AnimatedStats />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden snap-start">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להכיר אותנו?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            צרו איתנו קשר ונשמח לספר לכם עוד על הפרויקטים שלנו
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/projects">
                לפרויקטים שלנו
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">צרו קשר</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
