import card1Img from "../../assets/images/ia-card-1.jpg";
import card2Img from "../../assets/images/ia-card-2.jpg";
const AboutUs = () => {
  return (
    <div id="about-us" className="max-w-screen-xl mx-auto mt-8 md:mt-16 scroll-mt-24">
      <section id="about-us" class="">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">ABOUT US</h2>
          <p class="text-xs lg:text-lg text-gray-800 mb-6 text-center px-4 md:px-8 lg:px-16">
            Daffodil International University (DIU) has made an effort to
            increase its visibility and mobility around the world by building
            strong partnerships with international universities. DIU has
            launched cooperation initiatives and collaborative projects with
            various international universities and strives to earn various
            foreign accreditation. DIU established international collaborations
            with around 580+ universities all over the world and currently
            working in the area of student and faculty exchange programs,
            summer/winter programs, international internship, scholarships,
            Erasmus+ projects, virtual mobility, research collaborations,
            short-term training programs, etc.
          </p>
          <div class="flex justify-center flex-col lg:flex-row gap-4 mx-2">
            <div className="card flex-1 bg-base-100 image-full shadow-sm">
              <figure className="w-full h-64 overflow-hidden">
                <img
                  src={card1Img}
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-semibold text-2xl text-center">
                  Our Mission
                </h2>
                <p className="md:px-4">
                  Our mission is to strengthen DIU’s international presence by
                  creating opportunities for academic and cultural exchange, as
                  well as fostering international partnerships. We strive to
                  provide students with the knowledge, skills, and experiences
                  that will shape them into global citizens.
                </p>
              </div>
            </div>
            <div className="card flex-1 bg-base-100 image-full shadow-sm">
              <figure className="w-full h-64 overflow-hidden">
                <img
                  src={card2Img}
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-semibold text-2xl text-center">
                  Our Vision
                </h2>
                <p className="md:px-4">
                  We envision an interconnected world where DIU plays a
                  significant role in facilitating international collaborations
                  and creating global leaders. By promoting diversity,
                  innovation, and inclusively, we aim to contribute to the
                  development of a global academic community that values mutual
                  understanding and respect.
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-6 text-white border-white border-0 border-b-2">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
