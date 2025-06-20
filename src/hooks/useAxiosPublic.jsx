import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://international-affairs-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
