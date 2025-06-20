import iipImg from "../../assets/images/authImg/iip2025.png";
import iip1Img from "../../assets/images/contactsImg/iip1.png";
import iip2Img from "../../assets/images/contactsImg/iip2.png";
import { Link } from "react-router-dom";

const Iip2025Details = () => {
  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        IIP 2025
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Build Your Skills While Building a Better World
      </p>
      <div className="flex justify-center">
        <img className=" border-2 border-gray-400" src={iipImg} alt="" />
      </div>
      <h1 className="text-center text-xl lg:text-2xl font-semibold py-3">
        International Internship Program (IIP)
      </h1>
      <div className="space-y-8 pt-4 lg:pt-8 pb-4 lg:pb-8">
        <h3 className="text-xl font-bold">Program Details</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Duration:</strong> 2-Months
          </li>
          <li>
            <strong>Location:</strong> Office of the International Affairs,
            Daffodil International University, Daffodil Smart City, Birulia,
            Savar, Dhaka-1216, Bangladesh
          </li>
          <li>
            <strong>Working Hours:</strong> 40 hours per week
          </li>
        </ul>

        <h4 className="text-lg font-semibold">Choose a Term</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Jan–Feb (Deadline: Dec-20)</li>
          <li>Mar–Apr (Deadline: Jan-20)</li>
          <li>May–June (Deadline: Mar-20)</li>
          <li>July–Aug (Deadline: May-20)</li>
          <li>Sep–Oct (Deadline: July-20)</li>
          <li>Nov–Dec (Deadline: Sep-20)</li>
        </ul>

        <h3 className="text-xl font-bold">Benefits</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Certificate of Internship</li>
          <li>Free Accommodation and Internal Transportation</li>
          <li>Global Networking and Communication Opportunities</li>
          <li>Collaboration with Local and International Professionals</li>
          <li>Diverse Projects in Your Field of Interest</li>
        </ul>

        <h3 className="text-xl font-bold">Eligibility Criteria</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Currently enrolled in a degree program</li>
          <li>Proficiency in English</li>
          <li>Minimum CGPA 3.00 out of 4.00</li>
          <li>Passion for Global Challenges</li>
          <li>Teamwork skills and diversity embrace</li>
        </ul>

        <h3 className="text-xl font-bold">Required Documents</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Resume/CV</li>
          <li>Statement of Purpose (max 500 words)</li>
          <li>Academic Transcript from Current Educational Institution</li>
          <li>Scanned Copy of Passport (Information Page)</li>
          <li>Certificate of any Recognition of Extra-Curricular Activities</li>
        </ul>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-6 pb-4 lg:pb-8">
        <Link to="https://forms.gle/h8UcYWBUG4S31WfR9" target="_blank">
          <button className="btn btn-primary btn-xs md:btn-sm">
            Application Form
          </button>
        </Link>
        <Link
          to="https://daffodilvarsity.edu.bd/photos/pdf/IIP-25.pdf"
          target="_blank"
        >
          <button className="btn btn-primary btn-xs md:btn-sm">
            Download Brochure
          </button>
        </Link>
      </div>

      {/* TESTIMONIALS */}
      <div>
        <h1 className="text-center font-semibold text-xl lg:text-2xl">
          Testimonials from International Internship Program Season 1
        </h1>
        <p className="text-center pb-8 pt-2 text-xs text-gray-700">
          Thoughts from our former IIP's! What they think about the experience.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-base-100 p-6 shadow-lg rounded-2xl">
            <img className="w-32 mx-auto" src={iip1Img} alt="" />
            <div className="text-center py-2">
              <h1 className="font-semibold">Juan Carlos Gazca</h1>
              <h1>Intern, IIP - S1</h1>
              <h1>Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216</h1>
            </div>
            <p className="text-justify">
              My name is Juan Carlos Gazca Munoz, I am a student of
              International Relations in the university UPAEP in Mexico, and I
              came to DIU for the International Internship Program. I heard
              about the program in the middle of August, and the whole process
              was really fast. Soon after sending my papers I got an interview
              and, not so long after, I received a positive answer to my
              application. For the visa process I needed some documents that the
              Office of International Affairs quickly prepared and that made the
              whole paperwork with the embassy really smooth. The communication
              with the Embassy of Bangladesh in Mexico was really good and the
              Ambassador Abida Islam was really pleased about my participation
              in this program. Part of the team in the embassy said that they
              would not be surprised if I was the first Mexican student visa for
              Bangladesh ever. <br></br>The trip to Bangladesh was long but not that bad
              overall. Around 42 hours after leaving my house in Puebla I
              arrived in Dhaka, by a mere coincidence Mr. Syed Raihan arrived on
              the same day just an hour before me, so he decided to wait for me
              so we could go together. The reception by Mr. Raihan and Amir, one
              of the volunteer students, was much appreciated, and ever since
              that first meal I had in Bangladesh I fell in love with the food
              from here. I arrived almost at the same time as a group from the
              British University in Egypt, so during my first week I got to
              explore the country, food and culture along with them, I was
              genuinely surprised by the level of hospitality that the Office of
              International Affairs showed to their guests. The interest that is shown for my country makes
              me really happy, so when the proposal for me to teach Spanish
              arrived, I accepted immediately. <br /> I am still surprised by all the
              international connections that this office has and by how many
              international visitors arrive periodically. I am particularly
              excited about some of the big upcoming events, like the Erasmus
              Harmony conference. I enjoy the normal work days in the office,
              but definitely I like a little more all the movement involved in
              some of the visits. So far everything has been really great, an
              amazing and formative experience and I am looking forward to the
              remaining weeks.
            </p>
          </div>
          <div className="bg-base-100 p-6 shadow-lg rounded-2xl">
            <img className="w-32 mx-auto" src={iip2Img} alt="" />
            <div className="text-center py-2">
              <h1 className="font-semibold">Omar Ojarov</h1>
              <h1>Intern, IIP - S1</h1>
              <h1>Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216</h1>
            </div>
            <p className="text-justify">
              I would like to take a moment to express my gratitude to Daffodil
              International University. I am currently interning with them as
              part of a short-term program, and I have been thoroughly impressed
              with their services. They were incredibly helpful in assisting me
              with my visa application, regularly checking in to ensure I had
              everything I needed while I was abroad. Their friendly and
              accommodating nature made my experience memorable, and I found
              their approach to work to be modern and refreshing. <br /> The
              university's education system is also impressive when compared to
              others. They offer great opportunities to learn new languages and
              provide ample room for personal growth through various student
              clubs. The active use of the cricket field by students is
              particularly impressive; it is almost never empty for long. <br /> In
              particular, Mr. Raihan's dedication to his work stood out, and
              it's clear that the team's open-minded and fun approach sets them
              apart from others. I would highly recommend Daffodil International
              University to anyone looking to grow professionally or personally.
              Please feel free to reach out to me if you need any more
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iip2025Details;
