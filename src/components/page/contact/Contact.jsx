import { useState } from "react";
import styles from "../../../styles/styles";
import { ICONS } from "../../icons/icons";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="contact-bg  w-full md:h-[70vh] h-[40vh] font-ebgaramond md:mt-1 mt-5">
        <div className="w-full h-full bg-[#000000a1] opacity-50 inset-0"></div>
        <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="md:text-7xl text-nowrap text-4xl font-[700]">
            Contact Us
          </h3>
        </div>
      </div>
      <div className="md:w-[80%] w-[95%] mx-auto md:px-10 px-2 py-10">
        <div className="flex justify-between flex-col md:flex-row md:mt-10">
          <div className="form font-ebgaramond">
            <h3 className="text-[#DC143C] text-3xl font-semibold">
              Get In Touch
            </h3>
            <p className="text-lg font-medium py-2">
              Our friendly team would love to hear from you.
            </p>
            <form action="" onSubmit={handleSubmit} className="py-6 space-y-6">
              <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-5">
                <div className="">
                  <label
                    htmlFor="firstName"
                    className="flex items-center text-lg font-semibold"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      id="firstName"
                      required
                      className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="lastName"
                    className="flex items-center text-lg font-semibold"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <div className="">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      id="lastName"
                      required
                      className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="flex items-center text-lg font-semibold"
                >
                  Email addresss <span className="text-red-500">*</span>
                </label>
                <div className="">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    required
                    className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="phone"
                  className="flex items-center text-lg font-semibold"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id="phone"
                    required
                    className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="flex items-center text-lg font-semibold"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="">
                  <textarea
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="message"
                    required
                    cols={20}
                    rows={8}
                    className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="" id="" />
                <p className="text-base">
                  You agree to our friendly privacy policy.
                </p>
              </div>
              <div
                className={`${styles.button} !h-[40px] text-lg font-bold !w-[100%] text-white !rounded-[10px]`}
              >
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="image md:block hidden">
            <div className="flex flex-col">
              <div className="w-[500px] h-[350px]">
                <img
                  src={
                    "https://declutter-app.netlify.app/assets/contactG-rcSfwLx_.svg"
                  }
                  alt="contact image"
                  className="w-full h-full"
                />
              </div>
              <div className="flex justify-end pt-5 pr-10">
                <div className="flex flex-col space-y-3">
                  <div className="w-[35px] h-[35px] rounded-full border flex justify-center items-center border-[#DC143C] p-2">
                    <ICONS.instagram className=" text-yellow-300" size={25} />
                  </div>
                  <div className="w-[35px] h-[35px] rounded-full border flex justify-center items-center border-[#DC143C] p-2">
                    <ICONS.youtube className="text-red-500" size={25} />
                  </div>
                  <div className="w-[35px] h-[35px] rounded-full border flex justify-center items-center border-[#DC143C] p-2">
                    <ICONS.whatsapp className="text-green-500" size={25} />
                  </div>
                  <div className="w-[35px] h-[35px] rounded-full border flex justify-center items-center border-[#DC143C] p-2">
                    <ICONS.x color="black" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
