import { motion } from "framer-motion";
import { Building2, Sparkles, PaintBucket, PartyPopper } from "lucide-react";
import heroBg from "@/assets/hero-cleaning.jpg";

const services = [
  { icon: Building2, label: "Office Cleaning", href: "#service-office-cleaning" },
  { icon: Sparkles, label: "Window Cleaning", href: "#service-window-cleaning" },
  { icon: PaintBucket, label: "Ceiling & Wall", href: "#service-ceiling-wall-cleaning" },
  { icon: PartyPopper, label: "Event & Party", href: "#service-event-party-cleaning" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional cleaning team in a Johannesburg office"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold font-semibold text-sm">★ 100% Black Women-Owned · 6+ Years in Gauteng ★</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Professional Commercial Cleaning{" "}
          <span className="text-primary">in Johannesburg & Gauteng</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Office, window, ceiling & event cleaning services for businesses across Gauteng. Quality you can see, service you can trust.
        </motion.p>

        {/* Service icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {services.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="glass rounded-2xl px-5 py-3 sm:px-6 sm:py-4 flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:border-primary/50 active:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="font-semibold text-foreground text-sm sm:text-base">{label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-[0_0_25px_hsl(var(--gold)/0.5)] hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
