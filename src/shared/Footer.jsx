import { FaFacebookF, FaLink } from "react-icons/fa";
import iaLogo from "../assets/images/ia_logo.png";
import { IoIosMail } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-8 md:mt-16">
      <footer className="footer sm:footer-horizontal bg-[#1A1766] text-white p-10">
        <nav>
          <h6 className="footer-title">Get Connected</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Meet With Us</a>
          <a className="link link-hover">View Newsletter</a>
          <a className="link link-hover">Location Map</a>
          <a className="link link-hover">Student Policy</a>
          <a className="link link-hover">Report Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover">Membership</a>
          <a className="link link-hover">View Partners</a>
          <a className="link link-hover">International Events</a>
          <a className="link link-hover">International MoU</a>
          <a className="link link-hover">International Exhibition</a>
          <a className="link link-hover">Apply For Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Subscribe us</h6>
          <fieldset className="w-80">
            <div className="join mt-1">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="input input-bordered join-item text-black"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
          <h6 className="footer-title">Connect us</h6>
          <div className="flex items-center gap-4">
            <a className="text-[22px]">
              <FaFacebookF />
            </a>
            <a className="text-3xl">
              <IoIosMail />
            </a>
            <a className="text-[23px]">
              <MdAddIcCall />
            </a>
            <a className="text-[20px]">
              <FaLink />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-[#1A1766]  text-white border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className="w-7 mr-2" src={iaLogo} alt="" />
          <p>
            International Affairs, DIU
            <br />
            International Affairs Office, Knowledge Tower, 1st Floor, Daffodil
            International University (DIU)
          </p>
        </aside>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-[#1A1766]  text-gray-300 p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            International Affairs, DIU
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
