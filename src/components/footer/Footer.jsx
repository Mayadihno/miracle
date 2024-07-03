import { Link } from "react-router-dom";
import image from "../../assets/logo.webp";
import styles from "../../styles/styles";
import { ICONS } from "../icons/icons";
const Footer = () => {
  return (
    <>
      <div className="bg-[#FFF8FA] w-full h-fit md:px-20 px-5 md:py-10 py-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-8">
          <div className="col-span-1">
            <div className="w-[150px] md:h-[100px] ">
              <img
                src={image}
                alt="logo image"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex space-x-3 md:pt-0 pt-6 md:pb-0 pl-3">
              <div
                className={`${styles.primary} cursor-pointer rounded-full flex justify-center items-center text-white w-[40px] h-[40px]`}
              >
                <ICONS.instagram size={20} />
              </div>
              <div
                className={`${styles.primary} cursor-pointer rounded-full flex justify-center items-center text-white w-[40px] h-[40px]`}
              >
                <ICONS.youtube size={20} />
              </div>
            </div>
          </div>
          <div className="col-span-1 font-ebgaramond">
            <h3 className="text-3xl font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-5 my-4">
              <div className="flex items-center space-x-2">
                <ICONS.email size={25} color="#dc143c" />
                <p className="text-lg font-medium">h0HxZ@example.com</p>
              </div>
              <div className="flex space-x-2">
                <ICONS.phone size={25} color="#dc143c" />
                <p className="text-lg font-medium">+91 9999999999</p>
              </div>
              <div className="flex space-x-2">
                <ICONS.location size={25} color="#dc143c" />
                <p className="text-lg font-medium">Gujarat, India</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 font-ebgaramond">
            <h3 className="text-3xl font-semibold">Quick Menu</h3>
            <div className="flex flex-col space-y-5 my-4 pl-3">
              <Link to={"/"} className="text-lg font-medium">
                Home
              </Link>
              <Link to={"/about-us"} className="text-lg font-medium">
                About Us
              </Link>
              <Link to={"/our-services"} className="text-lg font-medium">
                Our Services
              </Link>
              <Link to={"/our-team"} className="text-lg font-medium">
                Our Team
              </Link>
              <Link to={"/contact-us"} className="text-lg font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-2 text-center text-base font-ebgaramond bg-black text-white">
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
