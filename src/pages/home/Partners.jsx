// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Globe, Handshake } from "lucide-react";

const partners = [
  { name: "University of Oxford", category: "International" },
  { name: "Harvard University", category: "International" },
  { name: "Bangladesh Bank", category: "National" },
  { name: "ICT Division", category: "Government" },
  { name: "Southeast Bank Ltd.", category: "Corporate" },
  { name: "Dutch-Bangla Bank", category: "Corporate" },
  { name: "British Council", category: "International" },
  { name: "BRAC University", category: "Academic" },
  { name: "UNESCO Bangladesh", category: "International" },
  { name: "Ministry of Education", category: "Government" },
  { name: "World Bank Bangladesh", category: "International" },
  { name: "UNDP Bangladesh", category: "International" },
];

const Partners = () => {
  const duplicatedPartners = [...partners, ...partners];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mt-8 md:mt-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#002652] mb-4"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Handshake className="w-7 h-7 text-white" />
          </motion.div>

          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Our Partners
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 mt-2">
            Collaborating with leading institutions for global opportunities
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <motion.div
          className="flex w-max"
          variants={marqueeVariants}
          animate="animate"
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-64 bg-card rounded-xl border border-gray-200 p-6 mx-3 hover:shadow-lg transition-shadow"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Logo Area */}
              <div className="h-20 flex items-center justify-center mb-4 bg-muted/30 rounded-lg">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 max-w-full object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#002652]">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Partner Info */}
              <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-2">
                {partner.name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Globe className="w-3.5 h-3.5" />
                <span>{partner.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
