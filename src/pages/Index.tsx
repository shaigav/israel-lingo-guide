import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/harofe-25-render-with-logo.jpg";
import originalHeroImage from "@/assets/harofe-25-render.jpg";
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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-[center_-50px] md:bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 md:bg-gradient-to-l md:from-background/95 md:via-background/70 md:to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex items-end md:items-center min-h-[90vh] pb-8 md:pb-0" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 2rem))' }}>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
              יש על מי לבנות.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              חברת בוטיק המתמחה בייזום ובנייה למגורים. אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו.
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Styled Header Block */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform -rotate-1" />
              <div className="relative bg-card border border-border p-8 md:p-10 rounded-lg shadow-xl text-center">
                <div className="absolute -top-5 right-1/2 translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-xl font-bold">?</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
                  למה גבריאלי מגורים?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  תפיסת עולם שונה בנוף הנדל"ן הישראלי - לא בנייה בסרט נע, אלא יצירה אישית ומוקפדת
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
                פרויקט חדש
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                הרופא 25, חיפה
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                בניין יוקרתי בן 6 קומות על קו פרשת המים של רכס הכרמל, בשכונת אחוזה היוקרתית. 
                18 יחידות דיור עם נוף מרהיב לים ולמפרץ חיפה.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  18 יחידות דיור - 3 עד 5 חדרים
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  דירות גן ופנטהאוז
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  מפרט יוקרתי מלא
                </li>
              </ul>
              <Button asChild>
                <Link to="/projects">
                  לפרטים נוספים
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={originalHeroImage} 
                alt="הרופא 25 חיפה" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={logo} 
            alt="גבריאלי מגורים" 
            className="h-20 w-auto mx-auto mb-8 bg-white p-2 rounded"
          />
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
