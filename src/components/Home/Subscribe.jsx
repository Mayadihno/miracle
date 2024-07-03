import styles from "../../styles/styles";
import { ICONS } from "../icons/icons";

const Subscribe = () => {
  return (
    <div className="">
      <div className="w-full subscribe-bg md:h-[70vh] h-[70vh] font-ebgaramond">
        <div className="w-full h-full bg-[#000000a1] opacity-50 inset-0"></div>
        <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="md:text-7xl text-nowrap text-2xl font-[700]">
            Subscribe to get updates from us
          </h3>
          <h3 className="md:text-lg text-base font-medium py-6">
            Subscribe today as a member and benefit from events, vip sessions
            and business partnerships designed for success for beginner and
            those who have achieved successes but want to surround yourself with
            those of like minds.
          </h3>
          <form>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className={`${styles.input} text-black outline-none md:!w-[65%] !w-[95%] p-2.5 !rounded-[20px]`}
            />
            <div
              className={`${styles.button} !h-[40px] text-lg font-bold md:!w-[65%] !w-[95%] mx-auto !rounded-[20px]`}
            >
              <button>Subscribe now</button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#060C15] w-full h-fit md:px-20 px-5 md:py-16 pb-8 font-ebgaramond text-white">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="right py-6">
            <h3 className="md:text-5xl text-3xl font-bold py-6">
              Get In Touch
            </h3>
            <h5 className="text-xl font-semibold">
              We’re here to assist you on your journey to self-awareness and
              peace.
            </h5>
            <div className="flex space-x-5 pt-6">
              <div
                className={`${styles.primary} cursor-pointer rounded-full flex justify-center items-center text-white w-[50px] h-[50px]`}
              >
                <ICONS.instagram size={30} />
              </div>
              <div
                className={`${styles.primary} cursor-pointer rounded-full flex justify-center items-center text-white w-[50px] h-[50px]`}
              >
                <ICONS.youtube size={30} />
              </div>
            </div>
          </div>
          <div className="left">
            <form action="">
              <input
                type="text"
                name="fullname"
                id=""
                placeholder="Your Name"
                className={`${styles.input} my-2 text-black outline-none !w-[100%] p-3 !rounded-[10px]`}
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                className={`${styles.input} my-2 text-black outline-none !w-[100%] p-3 !rounded-[10px]`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                id=""
                cols={20}
                rows={6}
                className={`${styles.input} my-2 text-black outline-none !w-[100%] p-3 !rounded-[10px]`}
              ></textarea>
              <div
                className={`${styles.button} !h-[40px] text-lg font-bold !w-[100%] !rounded-[10px]`}
              >
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
