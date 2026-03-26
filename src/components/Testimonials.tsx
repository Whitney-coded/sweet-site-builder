import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Windows have never looked this good! Sweet Cleaner transformed our office building.",
    name: "Thandi M.",
    role: "Office Manager, Sandton",
    stars: 5,
  },
  {
    quote: "Professional, punctual, and eco-conscious. Our retail space sparkles after every visit.",
    name: "David K.",
    role: "Retail Owner, Rosebank",
    stars: 5,
  },
  {
    quote: "The ceiling and wall cleaning was outstanding. Dust-free vents and fresh walls — amazing.",
    name: "Sipho N.",
    role: "Factory Supervisor, Midrand",
    stars: 5,
  },
  {
    quote: "We switched to Sweet Cleaner for the eco products and stayed for the incredible service.",
    name: "Lerato P.",
    role: "HR Director, Fourways",
    stars: 5,
  },
  {
    quote: "Flexible scheduling means zero disruption. Our staff don't even notice the cleaners were in!",
    name: "James R.",
    role: "Operations Manager, Centurion",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
