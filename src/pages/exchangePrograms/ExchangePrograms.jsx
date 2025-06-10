import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ExchangeProgram = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { programType } = useParams();
  console.log(programType);
  const getTitleAndSubtitle = (type) => {
    switch (type?.toLowerCase()) {
      case "erasmus":
        return {
          title: "Explore Erasmus+ Exchange Programs",
          subtitle: "Your Gateway to Global Learning: Erasmus+ Exchange",
        };
      case "semester":
        return {
          title: "Explore Semester Exchange Programs",
          subtitle: "Your Gateway to Global Learning: Semester Exchange",
        };
      case "dual-degree":
        return {
          title: "Explore Dual Degree Programs",
          subtitle: "Study Abroad & Earn Two Degrees",
        };
      case "short":
        return {
          title: "Explore Short-Term Programs",
          subtitle: "Your Gateway to Global Learning: Short Programs",
        };
      default:
        return {
          title: "Explore Exchange Programs",
          subtitle: "Your Gateway to Global Learning Opportunities",
        };
    }
  };
  const { title, subtitle } = getTitleAndSubtitle(programType);

  const { data: exchangePrograms = [], isLoading } = useQuery({
    queryKey: ["exchangePrograms", programType],
    queryFn: async () => {
      const res = await axiosPublic.get(`/programs-exchanges/${programType}`);
      return res.data;
    },
    enabled: !!programType,
  });

  const handleViewDetails = (id) => {
    navigate(`/programs-exchanges/${programType}/${id}`);
  };
  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        {title}
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        {subtitle}
      </p>
      {/* CARD */}
      <div className="flex flex-col gap-4">
        {exchangePrograms.map((program, idx) => (
          <div key={program._id} className="p-4 bg-base-200 rounded-2xl">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div className="flex items-center gap-2 flex-1 min-w-0 text-xs md:text-base">
                <span className="font-semibold">{idx + 1}.</span>
                <span className="font-semibold truncate">{program.title}</span>
              </div>
              <div>
                <button
                  onClick={() => handleViewDetails(program._id)}
                  className="btn btn-primary btn-xs md:btn-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExchangeProgram;
