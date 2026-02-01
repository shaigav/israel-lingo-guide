import { Link } from "react-router-dom";
import { MapPin, Home, Car, Warehouse, Wifi, Wind, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/harofe-25-render.jpg";
const specifications = [{
  icon: Wind,
  label: "מיזוג VRF"
}, {
  icon: Home,
  label: "מטבח משודרג"
}, {
  icon: Wifi,
  label: "בית חכם"
}, {
  icon: Car,
  label: "2 חניות"
}, {
  icon: Warehouse,
  label: "מחסן"
}];
const apartmentTypes = [{
  rooms: 3,
  count: 2
}, {
  rooms: 4,
  count: 4
}, {
  rooms: 5,
  count: 11
}];
const Projects = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            פרויקט בביצוע
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            הרופא 25, חיפה
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>שכונת אחוזה, רמות הכרמל</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Project */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">אודות הפרויקט</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>הקמת בניין בן 6 קומות באגף הקידמי הכולל 2 קומות חניון וכן 4 קומות מגורים. סה"כ 18 יחידות דיור, תוך הריסת 
מבנה קיים בהתאם להוראות תמ"א 38/3.הפרויקט ממוקם על קו פרשת המים של רכס הכרמל, ברחוב 
הרופא 25 בחיפה - רחוב יוקרתי החשוף לנוף מרהיב, במיקום מרכזי בשכונת אחוזה.</p>
                  
                  <p>
                </p>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
              </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    שכונת אחוזה הינה שכונה ותיקה במרכזו של רובע המגורים רמות הכרמל בחיפה, 
                    השוכן על קו פרשת המים של רכס הכרמל.
                  </p>
                  <p>
                    רובע אחוזה נמשך לאורך גב ההר, כאשר שיפוליו הצפוניים מזרחיים צופים על מפרץ חיפה 
                    והדרומיים מערביים על מישור חוף הכרמל. גובהו נע בין 200 מטר מעל פני הים.
                  </p>
                  <p>
                    ציר התחבורה המרכזי של אחוזה הוא שדרות מוריה והמשכה רחוב חורב ושדרות אבא חושי. 
                    כיכר חורב, שבלב אחוזה הוותיקה, מקשרת את עורקי התחבורה מארבעה כיוונים.
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">מפה</h2>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4721876743087!2d34.98744!3d32.78789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba2e0b0f0f0f%3A0x0!2zMzLCsDQ3JzE2LjQiTiAzNMKwNTknMTUuMCJF!5e0!3m2!1siw!2sil!4v1" width="100%" height="100%" style={{
                  border: 0,
                  borderRadius: "0.5rem"
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="מיקום הפרויקט" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Apartment Types */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">תמהיל דירות</h3>
                <div className="space-y-4">
                  {apartmentTypes.map(type => <div key={type.rooms} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{type.rooms} חדרים</span>
                      <span className="text-muted-foreground">{type.count} דירות</span>
                    </div>)}
                  <div className="flex justify-between items-center py-3 border-t border-border">
                    <span className="text-foreground font-bold">סה"כ</span>
                    <span className="text-foreground font-bold">18 דירות</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  כולל דירות גן ופנטהאוז
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">מפרט טכני</h3>
                <div className="space-y-4">
                  {specifications.map(spec => <div key={spec.label} className="flex items-center gap-3">
                      <spec.icon className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">{spec.label}</span>
                    </div>)}
                </div>
                <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                  ריצוף פורצלן מטר על מטר, רשתות, ויבנו בסטנדרט הגבוה והיוקרתי ביותר ברמת הגימור והבנייה.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">מעוניינים בדירה?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  השאירו פרטים ונציגנו יחזרו אליכם
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact">
                    צרו קשר
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">גלריית הדמיות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={heroImage} alt="הדמיית הפרויקט" className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer" />
          </div>
        </div>
      </section>
    </Layout>;
};
export default Projects;