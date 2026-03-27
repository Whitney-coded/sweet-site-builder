import { motion } from "framer-motion";
import { ShieldCheck, Users, CalendarClock, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe & Certified Products",
    description: "We use only certified, plant-based cleaning products that are safe for your team and the environment.",
  },
  {
    icon: Users,
    title: "Trained Commercial Team",
    description: "Our vetted professionals undergo rigorous training in commercial cleaning standards and safety protocols.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description: "After-hours, weekends, or during business hours — we work around your schedule for zero disruption.",
  },
  {
    icon: BarChart3,
    title: "Proven Before/After Results",
    description: "We document every job with before and after photos so you can see the Sweet Cleaner difference.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">The Sweet Difference</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="text-center p-8 rounded-3xl bg-secondary/50 hover:bg-primary/5 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
