// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "../../assets/images/Banner/ia_banner.jpg";

const Banner = () => {
  const scrollToAbout = () => {
    const section = document.getElementById("about-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGlobal = () => {
    const section = document.getElementById("global");
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

{/* Dark Overlay – dual diagonal gradient */}
<div className="absolute inset-0 bg-[linear-gradient(to_bottom_left,rgba(0,0,0,0.5),rgba(30,58,138,0.6),rgba(0,0,0,0.5)),linear-gradient(to_top_right,rgba(0,0,0,0.5),rgba(30,58,138,0.6),rgba(0,0,0,0.5))]" />


      {/* Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 md:w-52 md:h-52 lg:w-68 lg:h-68 border border-white/40 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity },
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64 border border-white/40 rounded-2xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-1/3 left-10 w-4 h-4 bg-sky-500 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-yellow-400 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-0 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Daffodil International University
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your Gateway To
          <span className="block mt-2 bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent">
            Global Opportunities
          </span>
        </motion.h1>

        <motion.p
          className="text-md md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empowering Global Students & Partnerships for a Brighter Future
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToGlobal}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer group px-8 py-4 bg-white text-blue-900 text-center font-semibold rounded-full flex items-center justify-center gap-2"
          >
            Explore
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="cursor-pointer px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30">
            Learn More
          </button>
        </div>

        {/* Scroll */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute md:bottom-[-94px] left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default Banner;
