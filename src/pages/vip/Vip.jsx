import { Link } from "react-router-dom";
import vipImg from "../../assets/images/authImg/vip2025.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Vip = () => {
  return (
    <motion.div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        Volunteer Internship Program
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Build Your Skills While Building a Better World
      </p>
      <div className="pt-2 lg:pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="card bg-base-100 shadow-sm"
        >
          <figure>
            <img src={vipImg} alt="vip2025" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">VIP 2025</h2>
            <p>
              Join VIP 2025 and unlock global opportunities through meaningful
              volunteer work. Gain hands-on experience, develop professional
              skills, and make a real impact one project at a time.
            </p>
            <div className="card-actions justify-end">
              <Link to="/vip/vip2025details">
                <button className="btn btn-primary btn-xs md:btn-sm">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Vip;
