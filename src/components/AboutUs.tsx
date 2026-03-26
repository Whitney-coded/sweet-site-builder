import { motion } from "framer-motion";
import { Leaf, Users, Award, Target } from "lucide-react";

const highlights = [
  { icon: Leaf, label: "Eco-Friendly", value: "100% plant-based products" },
  { icon: Users, label: "Expert Team", value: "Trained & vetted professionals" },
  { icon: Award, label: "Experience", value: "10+ years in Gauteng" },
  { icon: Target, label: "Clients Served", value: "500+ happy businesses" },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Gauteng's Trusted <span className="text-primary">Cleaning Partner</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sweet Cleaner was founded with a simple mission: to deliver spotless, eco-friendly commercial cleaning across Johannesburg and greater Gauteng. We believe a clean workspace isn't a luxury — it's a necessity for productivity, health, and professional image.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our trained team uses only plant-based, non-toxic cleaning products that are safe for your staff, clients, and the environment. From daily office maintenance to specialised window and ceiling cleaning, we handle it all with precision and care.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{label}</h3>
                <p className="text-sm text-muted-foreground">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
