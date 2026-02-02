// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

import hero1 from "../../assets/images/Banner/ia_banner.jpg";
import hero2 from "../../assets/images/ia-card-1.jpg";
import hero3 from "../../assets/images/ia-card-2.jpg";

const Banner = () => {
  const scrollToAbout = () => {
    const section = document.getElementById("about-us");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [hero1, hero2, hero3];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          allowTouchMove={false}
          className="h-full w-full"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 bg-[#002652]/80" />

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

      {/* ✅ Content – stays fixed */}
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
