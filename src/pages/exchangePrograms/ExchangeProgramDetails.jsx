import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import loadingAnimation from "../../../public/Loading_Animation.json";
import Lottie from "lottie-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ExchangeProgramDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { programType, id } = useParams();
  console.log(programType, id);
  const { data: erasmusDetails = [], isLoading } = useQuery({
    queryKey: ["erasmusDetails", programType, id],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/programs-exchanges/${programType}/${id}`
      );
      return res.data;
    },
    enabled: !!programType && !!id,
  });
  console.log(erasmusDetails.image);

  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 class="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        Detailed Information
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Your Gateway to Global Learning
      </p>
      {isLoading ? (
        <div className="flex justify-center items-center py-28">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            className="w-16 lg:w-24 h-16 lg:h-24"
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-white rounded-xl shadow-lg p-6 lg:p-10 flex flex-col lg:flex-row gap-6"
        >
          <div className="lg:w-1/2">
            <img
              src={erasmusDetails?.image}
              alt={""}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                {erasmusDetails.title}
              </h3>
              <p className="text-gray-600 mb-6">{erasmusDetails.description}</p>
            </div>
            <a
              href={erasmusDetails.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-fit self-start"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ExchangeProgramDetails;
