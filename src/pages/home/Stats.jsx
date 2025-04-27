import academyImg from "../../assets/images/academy.png";
import handshakeImg from "../../assets/images/handshake.png";
import countriesImg from "../../assets/images/countries.png";
import studentsImg from "../../assets/images/students.png";

const Stats = () => {
  return (
    <div className="bg-[#3F44D6] mb-16 py-8 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="w-full flex flex-col items-center justify-center p-4">
        <img className="w-16 h-16" src={academyImg} alt="" />
        <h className="text-center font-semibold text-white text-xl my-4">
          700+ Academic Programs
        </h>
        <p className="text-center text-[#B5A8D5] font-semibold">
          __________________________
        </p>
      </div>
      <div className=" w-full flex flex-col items-center justify-center p-4 rounded-xl">
        <img className="w-16 h-16" src={handshakeImg} alt="" />
        <h className="text-center font-semibold text-white text-xl my-4">
          150+ Int. Universities Partners
        </h>
        <p className="text-center text-[#B5A8D5] font-semibold">
          __________________________
        </p>
      </div>
      <div className=" w-full flex flex-col items-center justify-center p-4 rounded-xl">
        <img className="w-16 h-16" src={countriesImg} alt="" />
        <h className="text-center font-semibold text-white text-xl my-4">
          70+ Countries Active Programs
        </h>
        <p className="text-center text-[#B5A8D5] font-semibold">
          __________________________
        </p>
      </div>
      <div className=" w-full flex flex-col items-center justify-center p-4 rounded-xl">
        <img className="w-16 h-16" src={studentsImg} alt="" />
        <h className="text-center font-semibold text-white text-xl my-4">
          300+ International Students
        </h>
        <p className="text-center text-[#B5A8D5] font-semibold">
          __________________________
        </p>
      </div>
    </div>
  );
};

export default Stats;
