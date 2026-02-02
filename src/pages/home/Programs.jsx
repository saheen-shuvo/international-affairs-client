import serbiaExchangeImg from "../../assets/images/serbia-exchange.png";
import summerSchoolImg from "../../assets/images/summer-school.png";
import japanExchangeImg from "../../assets/images/japan-exchange.png";
import { FaClock, FaSearch } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PROGRAMS = [
  {
    id: "serbia",
    title:
      "Erasmus+ Opportunity at University of Kragujevac, Serbia (Fall 2025)",
    image: serbiaExchangeImg,
    deadline: "25 March, 2025",
    criteria: [
      "CGPA 3.50+",
      "Completed 1 year at home university",
      "Good command of English",
    ],
    cta: "Apply Now",
  },
  {
    id: "montenegro",
    title:
      "UDG Summer School 2025 — University of Donja Gorica (Montenegro)",
    image: summerSchoolImg,
    deadline: "10 April, 2025",
    criteria: ["Any department of DIU", "CGPA 3.00+", "Good command of English"],
    cta: "Apply Now",
  },
  {
    id: "japan",
    title:
      "Exchange Program at Eikei University of Hiroshima (Autumn 2025)",
    image: japanExchangeImg,
    deadline: "01 March, 2025",
    criteria: [
      "Completed 1 academic year",
      "GPA 3.00+",
      "English proficiency",
      "Open to cultural exchange",
    ],
    cta: "Apply Now",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Programs = () => {
  return (
    <section id="global" className="max-w-screen-xl mx-auto mt-8 md:mt-16 px-2">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
          Global Opportunities Await
        </h2>
        <p className="text-xs lg:text-sm text-gray-600 mt-2">
          Discover academic and cultural experiences beyond borders
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {PROGRAMS.map((p) => (
          <motion.article
            key={p.id}
            variants={card}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition"
          >
            {/* Subtle gradient glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />

            {/* Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              {/* Deadline badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-800 border border-gray-200">
                  <FaClock className="opacity-70" />
                  Deadline: {p.deadline}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug line-clamp-3">
                {p.title}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-800">
                <FaSearch className="opacity-70" />
                Eligibility Criteria
              </div>

              {/* Criteria pills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.criteria.map((c, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <button className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition">
                  {p.cta}
                </button>

                <button className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition">
                  Details →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <div className="flex justify-center mt-10">
        <button className="rounded-full px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-black transition">
          View All Programs
        </button>
      </div>
    </section>
  );
};

export default Programs;
