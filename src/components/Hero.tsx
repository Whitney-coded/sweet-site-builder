import { motion } from "framer-motion";
import { Building2, Sparkles, PaintBucket, PartyPopper } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Building2, label: "Office Cleaning" },
  { icon: Sparkles, label: "Window Cleaning" },
  { icon: PaintBucket, label: "Ceiling & Wall" },
  { icon: PartyPopper, label: "Event & Party" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional office cleaning team" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Office Perfection{" "}
          <span className="text-primary">Starts Here</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Taste the sweetness of immaculate clean. Gauteng's trusted eco-friendly
          commercial cleaning experts.
        </motion.p>

        {/* Service icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition-transform duration-200"
            >
              <Icon className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">{label}</span>
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
