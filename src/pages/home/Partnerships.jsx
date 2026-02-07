// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GraduationCap, Repeat, Award } from "lucide-react";

const partnerships = [
  {
    name: "University of Massachusetts Dartmouth",
    country: "USA",
    type: "Academic Exchange",
    icon: GraduationCap,
  },
  {
    name: "University of Malaya",
    country: "Malaysia",
    type: "Research Collaboration",
    icon: Award,
  },
  {
    name: "Chung Yuan Christian University",
    country: "Taiwan",
    type: "Student Exchange",
    icon: Repeat,
  },
  {
    name: "University of Dhaka",
    country: "Bangladesh",
    type: "Joint Programs",
    icon: GraduationCap,
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    type: "Research Partnership",
    icon: Award,
  },
  {
    name: "Tokyo Institute of Technology",
    country: "Japan",
    type: "Academic Exchange",
    icon: GraduationCap,
  },
];

const Partnerships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background max-w-screen-xl mx-auto mt-8 md:mt-16 px-2"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Global Network
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center">
            Global Partnerships & Academic Linkages
          </h2>
          <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
            DIU enables pathways for credit transfer, exchange programs, and
            joint degree opportunities
          </p>
        </motion.div>
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group bg-card rounded-2xl p-6 border border-gray-200 hover-lift cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 
  group-hover:from-blue-700 group-hover:via-blue-600 group-hover:to-blue-800
  flex items-center justify-center transition-all duration-300"
                >
                  <partner.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {partner.name}
              </h3>

              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {partner.country}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span className="text-sm text-secondary font-medium">
                  {partner.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-8 py-4 rounded-full font-semibold text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300">
            View All Partners
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
