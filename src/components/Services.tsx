import { motion } from "framer-motion";
import { Building2, Sparkles, PaintBucket, PartyPopper } from "lucide-react";
import serviceWindow from "@/assets/service-window.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceEvent from "@/assets/service-event.jpg";

const serviceOffice = "https://res.cloudinary.com/dp3b16bvh/image/upload/v1774579691/1000117131_toxrhs.jpg";

const services = [
  {
    icon: Building2,
    title: "Office Cleaning",
    image: serviceOffice,
    description:
      "Comprehensive cleaning for desks, floors, restrooms and common areas. Daily and weekly contract options tailored to your workspace.",
    features: ["Desk & surface sanitisation", "Floor mopping & vacuuming", "Restroom deep-clean", "Waste removal"],
  },
  {
    icon: Sparkles,
    title: "Window Cleaning",
    image: serviceWindow,
    description:
      "Interior and exterior window cleaning with high-access equipment. Streak-free shine guaranteed every time.",
    features: ["Interior & exterior glass", "High-rise access equipment", "Streak-free guarantee", "Frame & sill cleaning"],
  },
  {
    icon: PaintBucket,
    title: "Ceiling & Wall Cleaning",
    image: serviceCeiling,
    description:
      "Professional dust and vent removal from ceilings and walls using high-reach pro tools. Restore freshness to your space.",
    features: ["Ceiling dust removal", "Vent & AC grille cleaning", "Wall spot treatment", "High-reach pro tools"],
  },
  {
    icon: PartyPopper,
    title: "Event & Party Cleaning",
    image: serviceEvent,
    description:
      "Pre-event setup cleaning and post-event deep cleaning for venues, halls and party spaces. Leave the mess to us.",
    features: ["Pre-event venue prep", "Post-event deep clean", "Table & chair sanitisation", "Floor & décor cleanup"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Expert commercial cleaning solutions for Johannesburg businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass rounded-3xl overflow-hidden group hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
