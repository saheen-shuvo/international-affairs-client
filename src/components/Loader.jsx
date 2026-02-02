// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const text = "International Affairs";
  const letters = text.split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#002652]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={(definition) => {
        if (definition === "exit") {
          onComplete();
        }
      }}
    >
      {/* Background gradient effects */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 50% 50%, hsl(165 80% 50% / 0.08), transparent),
            radial-gradient(ellipse 80% 40% at 20% 60%, hsl(45 100% 60% / 0.05), transparent),
            radial-gradient(ellipse 60% 40% at 80% 40%, hsl(165 80% 50% / 0.05), transparent)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated text */}
        <div className="flex overflow-hidden">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={letter === " " ? "mr-3" : "text-gradient"}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            </motion.span>
          ))}
        </div>

        {/* Loading bar */}
        <div className="w-48 md:w-64 h-[2px] bg-border/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
          />
        </div>

        {/* Subtle tagline */}
        <motion.p
          className="text-muted-foreground text-sm tracking-widest uppercase text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Connecting DIU to the World
        </motion.p>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default Loader;
