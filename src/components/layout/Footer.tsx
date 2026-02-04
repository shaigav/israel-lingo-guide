import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="גבריאלי מגורים" className="h-16 w-auto mb-6 bg-white p-2 rounded" />
            <p className="text-primary-foreground/80 leading-relaxed">
              חברת בוטיק המתמחה בייזום ובנייה למגורים. אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">קישורים</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                דף הבית
              </Link>
              <Link to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                פרויקטים
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                אודות
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                צור קשר
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">צור קשר</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:054-6440877" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0" />
                054-6440877
              </a>
              <a href="mailto:shaigav@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0" />
                shaigav@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>הרופא 25, חיפה</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} גבריאלי מגורים בע"מ. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
