import vipImg from "../../assets/images/authImg/vip2025.png";

const Vip2025Details = () => {
  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        VIP 2025
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Build Your Skills While Building a Better World
      </p>
      <div className="flex justify-center">
        <img className=" border-2 border-gray-400" src={vipImg} alt="" />
      </div>
      <h1 className="text-center text-2xl font-semibold py-3">
        Volunteer Internship Program (VIP)
      </h1>
      <div className="my-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Program Details</h3>
            <p className="leading-relaxed">
              <strong>Duration:</strong> One Semester
              <br />
              <strong>Location:</strong> Office of the International Affairs,
              Daffodil International University, Daffodil Smart City, Birulia,
              Savar, Dhaka-1216, Bangladesh
              <br />
              <strong>Working Hours:</strong> 24 hours per week
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Global communication and networking prospects</li>
              <li>
                Development of soft skills such as communication, teamwork,
                leadership, and problem-solving
              </li>
              <li>Internship Experience Certificate</li>
              <li>Enhancement of your resume with practical experience</li>
              <li>An opportunity to contribute to impactful projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Eligibility Criteria</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Currently enrolled as a full-time student at DIU</li>
              <li>Students from any department are encouraged to apply</li>
              <li>
                Proficiency in verbal and written communication in both English
                and Bangla
              </li>
              <li>Demonstrated passion for global issues</li>
              <li>
                Ability to collaborate in a team, embrace diversity, and
                maintain a high level of professionalism
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Available Work Areas</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>International communication and event management</li>
              <li>Creative content creation (Graphics Design, Video, Photo)</li>
              <li>Content writing, drafting, and program design</li>
              <li>Social media promotion and analysis</li>
              <li>Campus, student, and alumni engagement</li>
              <li>Database maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vip2025Details;
