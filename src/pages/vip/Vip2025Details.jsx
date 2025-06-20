import vipImg from "../../assets/images/authImg/vip2025.png";
import tasfiaVipImg from "../../assets/images/contactsImg/tasfiaVIP.png";
import shakhawatVipImg from "../../assets/images/contactsImg/shakhawatVip.png";

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
      <h1 className="text-center text-xl lg:text-2xl font-semibold py-3">
        Volunteer Internship Program (VIP)
      </h1>
      <div className="my-4 lg:my-8">
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
      {/* TESTIMONIALS */}
      <div>
        <h1 className="text-center font-semibold text-xl lg:text-2xl">
          Testimonials from Volunteer Internship Program
        </h1>
        <p className="text-center pb-8 pt-2 text-xs text-gray-700">
          Thoughts from our former VIP's! What they think about the experience.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-base-100 p-6 shadow-lg rounded-2xl">
            <img className="w-48 mx-auto" src={tasfiaVipImg} alt="" />
            <div className="text-center py-2">
              <h1>Tasfia Rahman</h1>
              <h1>VIP - S2</h1>
              <h1>Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216</h1>
            </div>
            <p className="text-justify">
              I had the privilege of working as a volunteer for six months in
              the VIP (Season-01) program at International Affairs, DIU. During
              this time, I not only developed my skills but also connected with
              an extensive international network. Additionally, I had the chance
              to work in a friendly environment under the supervision of the
              amazing Saimum Rabbani Apu, alongside some incredible people.
              Thank you to International Affairs, DIU, and Daffodil
              International University for providing me with such a wonderful
              opportunity. So far everything has been really great, an amazing
              and formative experience and I am looking forward to the remaining
              weeks.
            </p>
          </div>
          <div className="bg-base-100 p-6 shadow-lg rounded-2xl">
            <img className="w-48 mx-auto" src={shakhawatVipImg} alt="" />
            <div className="text-center py-2">
              <h1>Md Shakawat Hossen</h1>
              <h1>VIP - S3</h1>
              <h1>Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216</h1>
            </div>
            <p className="text-justify">
              I have embarked on a six-month volunteer internship program within
              the International Affairs department at Daffodil International
              University. My role spans several key areas, including
              administrative work, communication, guest protocol, guest
              management, as well as team and event coordination. This
              multifaceted experience is designed to sharpen my skill set and
              establish a solid foundation for my future career in the
              professional world. Throughout this internship, I am dedicated to
              refining my abilities, ensuring that I position myself as a
              valuable asset. Additionally, this opportunity has allowed me to meet
              a diverse array of foreign exchange students and educators,
              further enriching my global perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vip2025Details;
