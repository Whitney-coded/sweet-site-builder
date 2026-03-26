import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic Office",
    price: "R500",
    period: "/session",
    description: "Essential office cleaning for small workspaces",
    features: ["Desk & surface cleaning", "Floor mopping & vacuuming", "Restroom cleaning", "Waste removal", "Weekly scheduling"],
    popular: false,
  },
  {
    name: "Full Service",
    price: "R1,200",
    period: "/session",
    description: "Office + window cleaning for a complete refresh",
    features: [
      "Everything in Basic",
      "Interior window cleaning",
      "Exterior window cleaning",
      "Frame & sill cleaning",
      "Bi-weekly or weekly",
      "Dedicated team",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "R2,000+",
    period: "/session",
    description: "All-inclusive: office, windows, ceiling & wall cleaning",
    features: [
      "Everything in Full Service",
      "Ceiling dust removal",
      "Wall spot treatment",
      "Vent & AC grille cleaning",
      "Monthly deep-clean",
      "Priority scheduling",
      "Before/after report",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Our Packages
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Transparent pricing for every business size. Custom quotes available.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col relative ${
                pkg.popular
                  ? "bg-primary text-primary-foreground shadow-2xl scale-[1.03] border-2 border-primary"
                  : "glass"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "" : "text-foreground"}`}>{pkg.name}</h3>
              <p className={`text-sm mb-4 ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{pkg.price}</span>
                <span className={`text-sm ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/27821234567?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-semibold transition-all duration-200 ${
                  pkg.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-accent"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
