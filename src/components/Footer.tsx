import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Sweet Cleaner" className="h-10 w-auto brightness-200" />
      </div>
      <p className="text-background/60 text-sm text-center">
        © {new Date().getFullYear()} Sweet Cleaner. Eco-commercial cleaning experts in Gauteng.
      </p>
      <div className="flex gap-6 text-background/60 text-sm">
        <a href="#about" className="hover:text-background transition-colors">About</a>
        <a href="#services" className="hover:text-background transition-colors">Services</a>
        <a href="#contact" className="hover:text-background transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
