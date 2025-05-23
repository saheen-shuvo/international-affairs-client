import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ErasmusExchange = () => {
  const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
  const { data: erasmusExchanges = [], isLoading } = useQuery({
    queryKey: ["erasmusExchanges"],
    queryFn: async () => {
      const res = await axiosPublic.get("/erasmus-exchanges");
      return res.data;
    },
  });

  const handleViewDetails = (id) => {
    navigate(`/erasmus-exchanges/${id}`);
  };
  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 class="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        Explore Erasmus+ Programs
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Your Gateway to Global Learning: Erasmus+
      </p>
      {/* CARD */}
      <div className="flex flex-col gap-4">
        {erasmusExchanges.map((program, idx) => (
          <div key={program._id} className="p-4 bg-base-200 rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{idx + 1}.</span>
                <span className="font-semibold">{program.title}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleViewDetails(program._id)}
                  className="btn btn-primary btn-sm"
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

export default ErasmusExchange;
