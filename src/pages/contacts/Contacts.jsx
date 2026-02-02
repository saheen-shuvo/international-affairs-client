import contactsData from "../../../public/contacts.json";
import img1 from "../../assets/images/contactsImg/img1.png";
import img2 from "../../assets/images/contactsImg/img2.png";
import img3 from "../../assets/images/contactsImg/img3.png";
import img4 from "../../assets/images/contactsImg/img4.png";
import img5 from "../../assets/images/contactsImg/img5.png";
import img6 from "../../assets/images/contactsImg/img6.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const imageMap = {
  "img1.png": img1,
  "img2.png": img2,
  "img3.png": img3,
  "img4.png": img4,
  "img5.png": img5,
  "img6.png": img6,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const ContactCard = ({ contact, featured = false }) => {
  const deptLines = (contact.department || "").split(", ").filter(Boolean);

  const waNumber = (contact.phone || "").replace(/[^\d]/g, "");
  const waLink = waNumber ? `https://wa.me/${waNumber}` : null;

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -2 }}
      className={[
        "group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur",
        "shadow-sm hover:shadow-xl transition",
        featured ? "p-4 md:p-5" : "p-4",
      ].join(" ")}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />

      <div className="relative flex gap-4">
        {/* photo */}
        <div className="shrink-0">
          <div
            className={[
              "overflow-hidden rounded-xl border border-gray-200 bg-white",
              featured ? "w-[92px] h-[112px]" : "w-[84px] h-[104px]",
            ].join(" ")}
          >
            <img
              src={imageMap[contact.img]}
              alt={contact.name}
              loading="lazy"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* info */}
        <div className="min-w-0 flex-1">
          <h3
            className={[
              "font-bold text-gray-900 leading-snug",
              featured ? "text-base md:text-lg" : "text-base",
            ].join(" ")}
          >
            {contact.name}
          </h3>

          <p className="text-sm font-semibold text-blue-900">
            {contact.position}
          </p>

          {deptLines.length > 0 && (
            <div className="mt-2 space-y-0.5">
              {deptLines.map((line, idx) => (
                <p key={idx} className="text-sm text-gray-700">
                  {line}
                </p>
              ))}
            </div>
          )}

          {/* contact actions */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold bg-gray-900 text-white hover:bg-black transition"
            >
              Email
            </a>

            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold border border-gray-300 bg-white hover:shadow-sm transition"
              >
                WhatsApp
              </a>
            )}

            <span className="text-xs text-gray-600 truncate">
              {contact.email}
            </span>
          </div>

          <p className="mt-2 text-xs text-gray-600">
            Cell/WhatsApp: <span className="font-medium">{contact.phone}</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const Section = ({ title, contacts }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <h4 className="text-sm font-bold tracking-wide text-gray-800 uppercase">
          {title}
        </h4>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid gap-4"
      >
        {contacts.map((c) => (
          <ContactCard key={c.id} contact={c} />
        ))}
      </motion.div>
    </div>
  );
};

const Contacts = () => {
  const featured = contactsData?.[0];
  const affairs = contactsData.slice(1, 4);
  const admission = contactsData.slice(4, 6);

  return (
    <section className="mt-20 max-w-screen-xl mx-auto px-4">
      {/* header */}
      <div className="text-center pt-2 lg:pt-4 mb-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
          International Contacts
        </h2>
        <p className="text-xs lg:text-sm text-gray-600 mt-2">
          Meet Our Global Partnership Leaders
        </p>
      </div>

      {/* featured */}
      {featured && (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mb-8"
        >
          <ContactCard contact={featured} featured />
        </motion.div>
      )}

      {/* sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <Section title="International Affairs" contacts={affairs} />
        <Section title="International Admission" contacts={admission} />
      </div>
    </section>
  );
};

export default Contacts;
