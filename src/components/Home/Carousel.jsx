import styles from "../../styles/styles";

const Carousel = () => {
  return (
    <div className="home-bg md:h-[90vh] h-[70vh] font-ebgaramond md:mt-1 mt-5">
      <div className="w-full h-full bg-[#000000a1] opacity-50 "></div>
      <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="md:text-7xl text-nowrap text-4xl font-[700]">
          Discover Your Path to
        </h3>
        <h3 className="md:text-7xl text-4xl text-nowrap font-[700] py-2">
          Purpose and Peace
        </h3>
        <h4 className="md:pt-8 pt-4 pb-4 text-xl font-medium font-ebgaramond">
          Book a healing session today and Transform Your Life Today.
        </h4>
        <div
          className={`${styles.button} mx-auto mt-6 !cursor-pointer !w-[200px] !rounded-3xl text-white`}
        >
          <button type="button" className="text-2xl font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
