import contactsData from "../../../public/contacts.json";
import img1 from "../../assets/images/contactsImg/img1.png";
import img2 from "../../assets/images/contactsImg/img2.png";
import img3 from "../../assets/images/contactsImg/img3.png";
import img4 from "../../assets/images/contactsImg/img4.png";
import img5 from "../../assets/images/contactsImg/img5.png";
import img6 from "../../assets/images/contactsImg/img6.png";
import { motion } from "framer-motion";
const imageMap = {
  "img1.png": img1,
  "img2.png": img2,
  "img3.png": img3,
  "img4.png": img4,
  "img5.png": img5,
  "img6.png": img6,
};
const Contacts = () => {
  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-2 lg:px-0">
      <h2 class="text-2xl lg:text-4xl font-bold mb-2 text-gray-800 text-center pt-2 lg:pt-4">
        International Contacts
      </h2>
      <p className="text-xs lg:text-sm text-center text-gray-600 mb-8">
        Meet Our Global Partnership Leaders
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contactsData.map((contact) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            key={contact.id}
            className="flex gap-2 lg:gap-4 bg-[#f9f9f9b3] rounded-xl p-2 h-44 shadow"
          >
            <div className="flex items-center">
              <img
                className="w-[90px] h-[110px] object-cover rounded-lg shadow"
                src={imageMap[contact.img]}
                alt={contact.name}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-base lg:text-lg">
                {contact.name}
              </h1>
              <h1 className="text-sm lg:text-base">{contact.position}</h1>
              {contact.department.split(", ").map((line, index) => (
                <h1 className="text-sm lg:text-base" key={index}>
                  {line}
                </h1>
              ))}
              <h1 className="text-sm lg:text-base">
                Email:{" "}
                <a
                  className="hover:text-blue-500 hover:underline"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </h1>
              <h1 className="text-sm lg:text-base">
                Cell/WhatsApp: {contact.phone}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
