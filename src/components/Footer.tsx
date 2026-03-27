import { Facebook } from "lucide-react";

const logo = "https://res.cloudinary.com/dp3b16bvh/image/upload/v1774579652/Blue_Modern_Cleaning_Service_Logo_20260322_124334_0000_m2hs3t.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Sweet Cleaner" className="h-12 w-auto brightness-200" />
        </div>
        <div className="flex gap-6 text-background/60 text-sm">
          <a href="#about" className="hover:text-background transition-colors">About</a>
          <a href="#services" className="hover:text-background transition-colors">Services</a>
          <a href="#contact" className="hover:text-background transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/sweetcleaner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </a>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 w-full text-center">
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} Sweet Cleaner. Eco-commercial cleaning experts in Gauteng.
        </p>
        <p className="text-background/40 text-xs mt-2">
          Powered by <a href="https://snappybyte.studio" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors underline">SnappyByte Studio</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
