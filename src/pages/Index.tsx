import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedStats from "@/components/AnimatedStats";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import heroVideo from "@/assets/hero-video.mp4";
import originalHeroImage from "@/assets/harofe-25-render.jpg";
import ehud8Image from "@/assets/ehud-8-render.jpg";
import logo from "@/assets/logo.jpg";

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
    description: "כחברת בוטיק, אנו מעניקים יחס אישי לכל לקוח ולקוח",
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
    <div 
      ref={ref}
      className={`bg-card p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default group ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-accent/20 rounded-full animate-icon-pulse-ring" />
        <feature.icon className="h-10 w-10 text-accent animate-icon-float transition-transform duration-300 group-hover:scale-110 relative z-10" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`group transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg mb-6 shadow-md hover:shadow-xl transition-shadow duration-500">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
          project.status === 'פרויקט בביצוע' 
            ? 'bg-accent text-accent-foreground' 
            : 'bg-muted text-muted-foreground'
        }`}>
          {project.status}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
      <ul className="space-y-2 mb-6">
        {project.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="group/btn hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300">
        <Link to="/projects">
          לפרטים נוספים
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

const Index = () => {
  const parallaxOffset = useParallax(0.3);

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
      <section
        className="relative min-h-[90vh] flex items-center snap-start"
        style={{ minHeight: "calc(var(--app-vh, 1vh) * 90)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ transform: `translateY(${parallaxOffset * 0.4}px) scale(1.1)` }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 md:bg-gradient-to-l md:from-background/95 md:via-background/70 md:to-transparent" />
        </div>
        
        <div
          className="container mx-auto px-4 relative z-10 flex items-center md:items-center min-h-[90vh] pb-0 md:pb-0"
          style={{
            minHeight: "calc(var(--app-vh, 1vh) * 90)",
            paddingBottom: "max(0px, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="max-w-2xl translate-y-4 md:translate-y-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
              יש על מי לבנות.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              חברה המתמחה בייזום ובנייה למגורים. אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild>
                <Link to="/projects">
                  לפרויקטים שלנו
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">השאירו פרטים</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary snap-start">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-16 text-center hidden md:block">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              למה גבריאלי מגורים?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              תפיסת עולם שונה בנוף הנדל"ן הישראלי - לא בנייה בסרט נע, אלא יצירה אישית ומוקפדת
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Projects Section */}
      <section className="py-24 snap-start">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              הפרויקטים שלנו
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              פרויקטים נבחרים
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground snap-start">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מעוניינים לשמוע עוד?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            השאירו פרטים ונציגנו יחזרו אליכם בהקדם
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">צרו קשר</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
