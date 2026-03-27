import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Target, Eye, Rocket } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Safe Products", value: "Certified plant-based products" },
  { icon: Users, label: "Black Women-Owned", value: "100% empowered leadership" },
  { icon: Award, label: "Experience", value: "6+ years in Gauteng" },
  { icon: Target, label: "Clients Served", value: "50+ happy businesses" },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Gauteng's Trusted <span className="text-primary">Cleaning Partner</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sweet Cleaner, founded by <strong className="text-foreground">Defney Chauke</strong>, is a proudly <strong className="text-foreground">100% black women-owned</strong> commercial cleaning company based in Johannesburg, Gauteng. For over <strong className="text-foreground">6 years</strong>, we have delivered spotless, professional cleaning solutions to offices, retail spaces, factories, and event venues across Gauteng.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe a clean workspace isn't a luxury — it's a necessity for productivity, health, and professional image. Our trained team uses only plant-based, non-toxic cleaning products that are safe for your staff, clients, and the environment.
            </p>

            <div className="space-y-6">
              <motion.div
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To provide exceptional commercial cleaning services that promote healthier workplaces, empower our community, and set the standard for professional cleaning in South Africa.
                </p>
              </motion.div>

              <motion.div
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be Gauteng's most trusted and recommended cleaning company — known for reliability, quality, and our commitment to sustainability and women empowerment.
                </p>
              </motion.div>
            </div>
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
