import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Shield, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedStats from "@/components/AnimatedStats";
import StaggeredText from "@/components/StaggeredText";
import MagneticButton from "@/components/MagneticButton";
import ParallaxImage from "@/components/ParallaxImage";
import StackingSection from "@/components/StackingSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroVideo from "@/assets/hero-video.mp4";
import originalHeroImage from "@/assets/harofe-25-render.jpg";
import ehud8Image from "@/assets/ehud-8-render.jpg";

const features = [
  {
    icon: Building2,
    title: "סטנדרט בנייה בלתי מתפשר",
    description: "כל פרויקט נבנה ברמת הגימור הגבוהה ביותר עם חומרי איכות מובחרים",
  },
  {
    icon: Shield,
    title: "איתנות פיננסית",
    description: "ליווי בנקאי מלא מבנקים מובילים לשקט נפשי מוחלט",
  },
  {
    icon: Users,
    title: "יחס אישי בגובה העיניים",
    description: "אנו מעניקים יחס אישי לכל לקוח ולקוח",
  },
  {
    icon: Sparkles,
    title: "מפרט טכני עשיר",
    description: "מערכות VRF, בית חכם, ריצוף פורצלן ועוד",
  },
];

const projects = [
  {
    id: "harofe-25",
    title: "הרופא 25, חיפה",
    status: "פרויקט בביצוע",
    image: originalHeroImage,
    description: "בניין יוקרתי בן 6 קומות על קו פרשת המים של רכס הכרמל, בשכונת אחוזה היוקרתית. 18 יחידות דיור עם נוף מרהיב לים ולמפרץ חיפה.",
    features: ["18 יחידות דיור - 3 עד 5 חדרים", "דירות גן ופנטהאוז", "מפרט יוקרתי מלא"],
  },
  {
    id: "ehud-8",
    title: "אהוד 8, חיפה",
    status: "פרויקט עתידי",
    image: ehud8Image,
    description: "פרויקט יוקרתי במרכז הכרמל. בנייה איכותית בסטנדרטים הגבוהים ביותר עם מפרט טכני עשיר.",
    features: ["מיקום מרכזי בכרמל", "מפרט טכני עשיר", "תכנון אדריכלי מודרני"],
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-card p-10 border border-border hover:border-accent/40 transition-all duration-500 cursor-default group"
    >
      <div className="relative mb-6">
        <div className="w-12 h-12 border border-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
          <feature.icon className="h-6 w-6 text-accent" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div className="relative overflow-hidden mb-8">
        <ParallaxImage 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[400px]"
          speed={0.1}
        />
        <span className={`absolute top-6 right-6 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase ${
          project.status === 'פרויקט בביצוע' 
            ? 'bg-accent text-accent-foreground' 
            : 'bg-card text-muted-foreground border border-border'
        }`}>
          {project.status}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{project.title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
      <ul className="space-y-3 mb-8">
        {project.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm">
            <div className="h-1.5 w-1.5 bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <MagneticButton>
        <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
          <Link to="/projects">
            לפרטים נוספים
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </MagneticButton>
    </motion.div>
  );
};

const TOTAL_SECTIONS = 5;

const Index = () => {
  useEffect(() => {
    const setAppVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--app-vh", `${vh}px`);
    };

    setAppVh();
    window.addEventListener("resize", setAppVh);
    return () => window.removeEventListener("resize", setAppVh);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <StackingSection index={0} total={TOTAL_SECTIONS} className="flex items-center bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30 md:bg-gradient-to-l md:from-background/95 md:via-background/60 md:to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[100vh] pt-20">
          <div className="max-w-2xl">
            <StaggeredText 
              text="יש על מי לבנות." 
              as="h1"
              className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-tight mb-8 tracking-tight"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
            >
              חברה המתמחה בייזום ובנייה למגורים. אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Button size="lg" asChild className="text-sm tracking-wider uppercase px-8">
                  <Link to="/projects">
                    לפרויקטים שלנו
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="outline" asChild className="text-sm tracking-wider uppercase px-8 border-foreground hover:bg-foreground hover:text-background">
                  <Link to="/contact">השאירו פרטים</Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </StackingSection>

      {/* Features Section */}
      <StackingSection index={1} total={TOTAL_SECTIONS} className="flex items-center bg-secondary">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto mb-20 text-center hidden md:block">
            <StaggeredText 
              text="למה גבריאלי מגורים?" 
              as="h2"
              className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              תפיסת עולם שונה בנוף הנדל"ן הישראלי - לא בנייה בסרט נע, אלא יצירה אישית ומוקפדת
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </StackingSection>

      {/* Animated Stats Section */}
      <StackingSection index={2} total={TOTAL_SECTIONS} className="flex items-center bg-background">
        <div className="w-full">
          <AnimatedStats />
        </div>
      </StackingSection>

      {/* Projects Section */}
      <StackingSection index={3} total={TOTAL_SECTIONS} className="flex items-center bg-background">
        <div className="container mx-auto px-4 py-32">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
            >
              הפרויקטים שלנו
            </motion.span>
            <StaggeredText 
              text="פרויקטים נבחרים" 
              as="h2"
              className="text-3xl md:text-5xl font-black text-foreground tracking-tight"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </StackingSection>

      {/* CTA Section */}
      <StackingSection index={4} total={TOTAL_SECTIONS} className="flex items-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center py-32">
          <StaggeredText 
            text="מעוניינים לשמוע עוד?" 
            as="h2"
            className="text-3xl md:text-5xl font-black mb-8 tracking-tight"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            השאירו פרטים ונציגנו יחזרו אליכם בהקדם
          </motion.p>
          <MagneticButton className="inline-block">
            <Button size="lg" variant="secondary" asChild className="text-sm tracking-wider uppercase px-10">
              <Link to="/contact">צרו קשר</Link>
            </Button>
          </MagneticButton>
        </div>
      </StackingSection>
    </Layout>
  );
};

export default Index;
