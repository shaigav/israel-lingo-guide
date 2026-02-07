import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img src={logo} alt="גבריאלי מגורים" className="h-20 w-auto mb-6 bg-white/10 p-3 rounded-lg" />
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              חברה המתמחה בייזום ובנייה למגורים. אנחנו מתכננים ובונים דירות שהיינו רוצים לגור בהן בעצמנו.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-primary-foreground/50">ניווט</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                דף הבית
              </Link>
              <Link to="/projects" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                פרויקטים
              </Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                אודות
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                צור קשר
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-primary-foreground/50">צור קשר</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:054-6440877" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                054-6440877
              </a>
              <a href="mailto:shaigav@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                shaigav@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>הרופא 25, חיפה</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-primary-foreground/50">עקבו אחרינו</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-primary-foreground/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} גבריאלי מגורים בע"מ. כל הזכויות שמורות.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            יש על מי לבנות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
