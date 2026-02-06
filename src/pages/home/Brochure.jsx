// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BookOpen, FileText, Download, ExternalLink } from "lucide-react";

import brochureExchange from "../../assets/images/brochure/brochure1.png";
import brochurePartnerships from "../../assets/images/brochure/brochure2.png";
import brochureScholarship from "../../assets/images/brochure/brochure3.png";

const brochures = [
  {
    title: "International Exchange Guide",
    description:
      "Complete handbook for semester and year-long exchange opportunities with partner universities worldwide.",
    coverImage: brochureExchange,
    // TODO: Put real paths (e.g. /pdfs/student-exchange-guide.pdf) or an absolute URL
    pdfUrl: "/pdfs/student-exchange-guide.pdf",
  },
  {
    title: "Global Partnership Network Directory",
    description:
      "Explore our international academic partnerships and collaboration opportunities across countries and regions.",
    coverImage: brochurePartnerships,
    pdfUrl: "/pdfs/partnership-directory.pdf",
  },
  {
    title: "Study Abroad Scholarship Handbook",
    description:
      "Financial aid options, scholarship criteria, and application procedures for international study programs.",
    coverImage: brochureScholarship,
    pdfUrl: "/pdfs/scholarship-handbook.pdf",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const BrochuresSection = () => {
  const handleOpen = (pdfUrl) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (e, pdfUrl, title) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.pdf`;
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <section className="w-full mt-8 md:mt-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#002652] mb-6"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <BookOpen className="w-7 h-7 text-white" />
            </motion.div>
          </motion.div>

          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Brochures & Resources
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 mt-2">
            Downloadable guides and brochures to help you navigate our international programs
          </p>
        </motion.header>

        {/* Brochure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {brochures.map((b, index) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -8 }}
              onClick={() => handleOpen(b.pdfUrl)}
              className="group relative border border-gray-200 rounded-xl overflow-hidden cursor-pointer "
              style={{ boxShadow: "var(--card-shadow)" }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${b.title} brochure`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(b.pdfUrl);
                }
              }}
            >
              {/* Hover Shadow Animation */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ boxShadow: "var(--card-shadow)" }}
                whileHover={{ boxShadow: "var(--card-shadow-hover)" }}
                transition={{ duration: 0.3 }}
              />

              {/* Cover Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <motion.img
                  src={b.coverImage}
                  alt={`${b.title} cover`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/0 flex items-center justify-center"
                  whileHover={{ backgroundColor: "hsl(215 70% 25% / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-10 h-10 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* PDF Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    duration: 0.4,
                  }}
                  className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-card-foreground text-white">
                    PDF
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-[#002652] transition-colors duration-200">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {b.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Click to view
                  </span>

                  <motion.button
                    onClick={(e) => handleDownload(e, b.pdfUrl, b.title)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 text-white text-sm font-medium"
                    whileHover={{
                      backgroundColor: "hsl(205 65% 45%)",
                      color: "hsl(0 0% 100%)",
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Download ${b.title}`}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrochuresSection;
