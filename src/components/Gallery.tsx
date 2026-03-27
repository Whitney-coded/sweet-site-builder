import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dp3b16bvh/image/upload/v1774579675/1000117142_z6qrvv.jpg",
    alt: "Office cleaning service completed in Johannesburg",
  },
  {
    src: "https://res.cloudinary.com/dp3b16bvh/image/upload/v1774579691/1000117131_toxrhs.jpg",
    alt: "Professional office deep clean by Sweet Cleaner",
  },
  {
    src: "https://res.cloudinary.com/dp3b16bvh/image/upload/v1774579735/1000117168_goosb7.jpg",
    alt: "Commercial cleaning project completed in Gauteng",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Recent Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            See the results of our professional cleaning services across Johannesburg offices and commercial spaces
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              className="rounded-3xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
