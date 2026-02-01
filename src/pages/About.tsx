import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

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

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              אודות גבריאלי מגורים
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              חברת בוטיק המתמחה בייזום ובנייה למגורים, עם תפיסת עולם שונה בנוף הנדל"ן הישראלי
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
                החזון שלנו
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                יש על מי לבנות.
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  חברת 'גבריאלי מגורים' הוקמה מתוך תפיסת עולם שונה בנוף הנדל"ן הישראלי: 
                  אנחנו לא מאמינים בבנייה ב'סרט נע', אלא ביצירה אישית ומוקפדת.
                </p>
                <p>
                  כחברת בוטיק המתמחה בייזום ובנייה למגורים, שמנו לנו למטרה להעניק חוויית מגורים 
                  שמשלבת בין סטנדרט בנייה בלתי מתפשר, איתנות פיננסית של בנקים מובילים, 
                  ויחס אישי בגובה העיניים.
                </p>
                <p>
                  עבורנו, כל פרויקט ופרויקט הוא לא עוד שורה בטבלה, אלא יצירה ארכיטקטונית 
                  שאנחנו גאים לחתום עליה.
                </p>
              </div>
            </div>
            <div className="bg-secondary p-12 rounded-lg">
              <blockquote className="text-2xl font-medium text-foreground leading-relaxed">
                "החזון שלנו פשוט: אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו – 
                החל מבחירת המיקום המדויק, דרך תכנון הפנים החכם ועד למפרט הטכני העשיר ביותר. 
                ב'גבריאלי מגורים', השקט הנפשי שלכם הוא יסוד הבניין שלנו."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הערכים שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              העקרונות המנחים אותנו בכל פרויקט
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-8 rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
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
