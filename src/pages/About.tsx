import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedStats from "@/components/AnimatedStats";
import StaggeredText from "@/components/StaggeredText";
import MagneticButton from "@/components/MagneticButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    description: "כל לקוח מקבל יחס אישי בגובה העיניים ותשומת לב מלאה לכל פרט.",
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
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="bg-primary p-12 relative">
        <div className="absolute top-6 right-6 text-6xl font-black text-accent/30 leading-none">"</div>
        <blockquote className="text-lg font-light text-primary-foreground leading-relaxed pt-8">
          החזון שלנו פשוט: אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו – 
          החל מבחירת המיקום המדויק, דרך תכנון הפנים החכם ועד למפרט הטכני העשיר ביותר. 
          ב'גבריאלי מגורים', השקט הנפשי שלכם הוא יסוד הבניין שלנו.
        </blockquote>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-card p-8 border border-border hover:border-accent/30 transition-all duration-500"
    >
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
          <value.icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">{value.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <StaggeredText 
              text="אודות" 
              as="h1"
              className="text-5xl md:text-7xl font-black text-primary-foreground mb-8 tracking-tight"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-primary-foreground/80 leading-relaxed"
            >
              חברה המתמחה בייזום ובנייה למגורים, עם תפיסת עולם שונה בנוף הנדל"ן הישראלי
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
              >
                החזון שלנו
              </motion.span>
              <StaggeredText 
                text="יש על מי לבנות." 
                as="h2"
                className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-5 text-lg text-muted-foreground leading-relaxed"
              >
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
              </motion.div>
            </div>
            <VisionQuote />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
            >
              מה מנחה אותנו
            </motion.span>
            <StaggeredText 
              text="הערכים שלנו" 
              as="h2"
              className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              העקרונות המנחים אותנו בכל פרויקט
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <AnimatedStats />

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <StaggeredText 
            text="מוכנים להכיר אותנו?" 
            as="h2"
            className="text-3xl md:text-5xl font-black mb-8 tracking-tight"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            צרו איתנו קשר ונשמח לספר לכם עוד על הפרויקטים שלנו
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Button size="lg" variant="secondary" asChild className="text-sm tracking-wider uppercase px-8">
                <Link to="/projects">
                  לפרויקטים שלנו
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm tracking-wider uppercase px-8" asChild>
                <Link to="/contact">צרו קשר</Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
