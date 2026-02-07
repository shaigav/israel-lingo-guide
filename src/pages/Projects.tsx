import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Home, Car, Warehouse, Wifi, Wind, ArrowLeft, X, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Layout from "@/components/layout/Layout";
import StaggeredText from "@/components/StaggeredText";
import MagneticButton from "@/components/MagneticButton";
import ParallaxImage from "@/components/ParallaxImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/harofe-25-render.jpg";
import render2 from "@/assets/harofe-25-render-2.jpg";
import render3 from "@/assets/harofe-25-render-3.jpg";
import projectVideo from "@/assets/harofe-25-video.mp4";

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
};

const galleryItems: MediaItem[] = [
  { type: 'image', src: heroImage, alt: 'הדמיית הפרויקט - מבט חזית' },
  { type: 'image', src: render2, alt: 'הדמיית הפרויקט - מבט אווירי מזרחי' },
  { type: 'image', src: render3, alt: 'הדמיית הפרויקט - מבט אווירי מערבי' },
  { type: 'video', src: projectVideo, alt: 'סרטון הדמיית הפרויקט' },
];

const specifications = [
  { icon: Wind, label: "מיזוג VRF" },
  { icon: Home, label: "מטבח משודרג" },
  { icon: Wifi, label: "בית חכם" },
  { icon: Car, label: "2 חניות" },
  { icon: Warehouse, label: "מחסן" },
];

const apartmentTypes = [
  { rooms: 3, count: 2 },
  { rooms: 4, count: 4 },
  { rooms: 5, count: 11 },
];

const GalleryItem = ({ item, index, onClick }: { item: MediaItem; index: number; onClick: () => void }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {item.type === 'image' ? (
        <div className="overflow-hidden cursor-pointer group" onClick={onClick}>
          <img 
            src={item.src} 
            alt={item.alt} 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
      ) : (
        <div 
          className="relative w-full aspect-video overflow-hidden cursor-pointer group"
          onClick={onClick}
        >
          <video 
            src={item.src} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            poster={heroImage}
            muted
          />
          <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
            <div className="w-16 h-16 border-2 border-card flex items-center justify-center">
              <Play className="h-6 w-6 text-card fill-card ml-1" />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <ParallaxImage src={heroImage} alt="הרופא 25" className="w-full h-full" speed={0.08} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 pb-16 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
          >
            פרויקט בביצוע
          </motion.span>
          <StaggeredText 
            text="הרופא 25, חיפה" 
            as="h1"
            className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight"
            delay={0.2}
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm tracking-wide">שכונת אחוזה, רמות הכרמל</span>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-16"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">אודות הפרויקט</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  הקמת בניין בן 6 קומות באגף הקידמי הכולל 2 קומות חניון וכן 4 קומות מגורים. סה"כ 18 יחידות דיור, תוך הריסת מבנה קיים בהתאם להוראות תמ"א 38/3. הפרויקט ממוקם על קו פרשת המים של רכס הכרמל, ברחוב הרופא 25 בחיפה - רחוב יוקרתי החשוף לנוף מרהיב, במיקום מרכזי בשכונת אחוזה. הבניין פונה לוואדי פתוח ונשקף ממנו נוף ים מלא, וסביבת הבניין מפותחת פיתוח מלא.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">המיקום</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  שכונת אחוזה הינה שכונה ותיקה במרכזו של רובע המגורים רמות הכרמל בחיפה, השוכן על קו פרשת המים של רכס הכרמל. רובע אחוזה נמשך לאורך גב ההר, כאשר שיפוליו הצפוניים מזרחיים צופים על מפרץ חיפה והדרומיים מערביים על מישור חוף הכרמל.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  גובהו נע בין 200 מטר מעל פני הים. ציר התחבורה המרכזי של אחוזה הוא שדרות מוריה והמשכה רחוב חורב ושדרות אבא חושי. כיכר חורב, שבלב אחוזה הוותיקה, מקשרת את עורקי התחבורה מארבעה כיוונים.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">מפה</h2>
                <div className="aspect-video bg-muted">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4721876743087!2d34.98744!3d32.78789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba2e0b0f0f0f%3A0x0!2zMzLCsDQ3JzE2LjQiTiAzNMKwNTknMTUuMCJF!5e0!3m2!1siw!2sil!4v1" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title="מיקום הפרויקט" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-secondary p-8 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">תמהיל דירות</h3>
                <div className="space-y-4">
                  {apartmentTypes.map(type => (
                    <div key={type.rooms} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{type.rooms} חדרים</span>
                      <span className="text-muted-foreground text-sm">{type.count} דירות</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-3 border-t border-foreground/20">
                    <span className="text-foreground font-bold">סה"כ</span>
                    <span className="text-foreground font-bold">18 דירות</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 tracking-wide">
                  כולל דירות גן ופנטהאוז
                </p>
              </div>

              <div className="bg-secondary p-8 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">מפרט טכני</h3>
                <div className="space-y-5">
                  {specifications.map(spec => (
                    <div key={spec.label} className="flex items-center gap-4">
                      <div className="w-8 h-8 border border-accent/30 flex items-center justify-center">
                        <spec.icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground text-sm">{spec.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                  ריצוף פורצלן מטר על מטר, רשתות, ויבנו בסטנדרט הגבוה והיוקרתי ביותר ברמת הגימור והבנייה.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-8">
                <h3 className="text-lg font-bold mb-4 tracking-tight">מעוניינים בדירה?</h3>
                <p className="text-primary-foreground/70 mb-6 text-sm">
                  השאירו פרטים ונציגנו יחזרו אליכם
                </p>
                <MagneticButton>
                  <Button variant="secondary" className="w-full text-sm tracking-wider uppercase" asChild>
                    <Link to="/contact">
                      צרו קשר
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <StaggeredText 
            text="גלריית הדמיות" 
            as="h2"
            className="text-2xl font-bold text-foreground mb-12 tracking-tight"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={index} 
                item={item} 
                index={index} 
                onClick={() => setSelectedMedia(item)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-foreground/95 border-none">
          <button 
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 left-4 z-50 p-2 bg-card/10 hover:bg-card/20 transition-colors"
          >
            <X className="h-6 w-6 text-card" />
          </button>
          {selectedMedia?.type === 'image' ? (
            <img 
              src={selectedMedia.src} 
              alt={selectedMedia.alt} 
              className="w-full h-full object-contain max-h-[90vh]"
            />
          ) : selectedMedia?.type === 'video' ? (
            <video 
              src={selectedMedia.src} 
              controls 
              autoPlay
              className="w-full h-full object-contain max-h-[90vh]"
            >
              הדפדפן שלך אינו תומך בתגית וידאו.
            </video>
          ) : null}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projects;
