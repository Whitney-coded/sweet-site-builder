import { motion } from "framer-motion";
import { Building2, Sparkles, PaintBucket, PartyPopper } from "lucide-react";
import heroBg from "@/assets/hero-cleaning.jpg";

const services = [
  { icon: Building2, label: "Office Cleaning" },
  { icon: Sparkles, label: "Window Cleaning" },
  { icon: PaintBucket, label: "Ceiling & Wall" },
  { icon: PartyPopper, label: "Event & Party" },
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
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/25"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm">100% Black Women-Owned · 6+ Years in Gauteng</span>
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
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass rounded-2xl px-5 py-3 sm:px-6 sm:py-4 flex items-center gap-3 hover:scale-105 transition-transform duration-200"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="font-semibold text-foreground text-sm sm:text-base">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-accent hover:shadow-xl transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
