import serbiaExchangeImg from "../../assets/images/serbia-exchange.png";
import summerSchoolImg from "../../assets/images/summer-school.png";
import japanExchangeImg from "../../assets/images/japan-exchange.png";
import { FaClock, FaSearch } from "react-icons/fa";

const Programs = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 md:mt-16">
      <h2 class="text-4xl font-bold mb-4 text-gray-800 text-center">
        Global Opportunities Await
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Discover academic and cultural experiences beyond borders through our
        global programs.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 mx-2">
        {/* Card1 */}
        <div className="card bg-base-100 shadow-sm flex-1">
          <figure className="h-[400px] object-cover">
            <img src={serbiaExchangeImg} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Erasmus+ Opportunity at University of Kragujevac, Serbia! The
              nomination for the Fall 2025 Semester at University of Kragujevac
              is now OPEN
            </h2>
            <p className="font-semibold flex items-center gap-2">
              <FaSearch />
              Eligibility Criteria
            </p>
            <p>
              CGPA 3.50 or above, Completed at least 1 year at home university,
              Good command of English
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <FaClock />
              25 March, 2025
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-6 text-white border-white border-0 border-b-2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* Card2 */}
        <div className="card bg-base-100 shadow-sm flex-1">
          <figure className="h-[400px] object-cover">
            <img src={summerSchoolImg} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Seize the opportunity to join the UDG Summer School 2025,
              organized by the University of Donja Gorica (UDG), Montenegro
            </h2>
            <p className="font-semibold flex items-center gap-2">
              <FaSearch />
              Eligibility Criteria
            </p>
            <p>
              Eligibility Criteria: <br></br>Any department of DIU, Students
              with a CGPA of 3.00 or above, Good command of English
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <FaClock />
              10 April, 2025
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-6 text-white border-white border-0 border-b-2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* Card3 */}
        <div className="card bg-base-100 shadow-sm flex-1">
          <figure className="h-[400px] object-cover">
            <img src={japanExchangeImg} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              Exchange Program at Eikei University of Hiroshima – Autumn 2025!
              Get ready for an unforgettable academic experience in Japan
            </h2>
            <p className="font-semibold flex items-center gap-2">
              <FaSearch />
              Eligibility Criteria
            </p>
            <p>
              {" "}
              Completed at least one academic year before applying, Maintained a
              GPA of at least 3.00, Proficiency in English, Open to cultural
              exchange and global learning
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <FaClock />
              01 March, 2025
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-6 text-white border-white border-0 border-b-2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
