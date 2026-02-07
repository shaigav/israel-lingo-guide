import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,25%,11%)] text-[hsl(220,15%,85%)]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Company Info */}
          <div className="md:order-4">
            <h3 className="text-xl font-bold text-white mb-4">גבריאלי מגורים</h3>
            <p className="text-[hsl(220,15%,65%)] leading-relaxed mb-4">
              חברת בוטיק המתמחה בייזום ובנייה למגורים, בעל סטנדרט בנייה בלתי מתפשר.
            </p>
            <p className="text-[hsl(220,15%,55%)] text-sm italic">
              יש על מי להסתמך בנדל"ן
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:order-3">
            <h3 className="text-lg font-semibold text-white mb-6">יצירת קשר</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:054-6440877" className="flex items-center gap-3 text-[hsl(220,15%,65%)] hover:text-white transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0" />
                054-6440877
              </a>
              <a href="mailto:shaigav@gmail.com" className="flex items-center gap-3 text-[hsl(220,15%,65%)] hover:text-white transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0" />
                shaigav@gmail.com
              </a>
              <div className="flex items-start gap-3 text-[hsl(220,15%,65%)]">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>רחוב הרופא 25<br />חיפה</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:order-2">
            <h3 className="text-lg font-semibold text-white mb-6">קישורים</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-[hsl(220,15%,65%)] hover:text-white transition-colors">
                דף הבית
              </Link>
              <Link to="/projects" className="text-[hsl(220,15%,65%)] hover:text-white transition-colors">
                פרויקטים
              </Link>
              <Link to="/about" className="text-[hsl(220,15%,65%)] hover:text-white transition-colors">
                אודות
              </Link>
              <Link to="/contact" className="text-[hsl(220,15%,65%)] hover:text-white transition-colors">
                צור קשר
              </Link>
            </nav>
          </div>

          {/* Logo */}
          <div className="md:order-1 flex flex-col items-center md:items-start">
            <img src={logo} alt="גבריאלי מגורים" className="h-32 w-auto mb-3" />
            <p className="text-[hsl(220,15%,55%)] text-sm italic">יש על מי לבנות.</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-[hsl(220,15%,45%)] text-sm">
          <p>© {new Date().getFullYear()} גבריאלי מגורים בע"מ. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
