import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ErasmusExchangeDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);
  const { data: erasmusDetails = [], isLoading } = useQuery({
    queryKey: ["erasmusDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/erasmus-exchanges/${id}`);
      return res.data;
    },
  });
  console.log(erasmusDetails);

  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 class="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        Detailed Information
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Your Gateway to Global Learning: Erasmus+
      </p>
    </div>
  );
};

export default ErasmusExchangeDetails;
