import { benefits } from "../../static/benefit";
import styles from "../../styles/styles";
const Brand = () => {
  return (
    <div className="mt-20 bg-[#FFF8FA] w-full h-fit">
      <div className={`md:w-11/12 w-[98%] mx-auto p-6`}>
        <h4 className="md:text-center text-left md:pb-12 pb-6 md:pt-8 pt-3 font-bold md:text-6xl text-4xl text-[#DC143C]">
          What is Reiki?
        </h4>
        <div className="flex justify-center md:space-x-5 md:flex-row flex-col">
          <div className=" md:w-1/2 w-full font-urbanist text-base font-medium leading-9">
            <p>
              Ah, reiki! It’s like a gentle, loving hug for your soul. Imagine
              sinking into a state of deep relaxation, feeling a comforting flow
              of positive energy washing over you. Reiki is an ancient healing
              technique that works with the body’s natural energy to promote
              balance and well-being. It’s all about creating harmony within
              yourself, releasing tension, and nurturing your inner calm.
            </p>
            <p className="py-6">
              Reiki, dating back to the 1860s, has been used for centuries to
              promote healing physically and mentally. The term “Reiki” combines
              “Rei,” meaning universal, and “ki,” meaning life energy. This
              practice is all about moving and balancing the energy within your
              body. Over time, energy can become stagnant due to trauma, life
              challenges, or stress, leading to blockages. Reiki helps clear and
              remove these blockages, allowing your body to heal naturally.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-full">
            <img
              src={
                "https://images.unsplash.com/photo-1562026700-3425431ecb5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full font-urbanist text-base font-medium leading-9 py-9">
          <p>
            When experiencing Reiki, you have options. Some prefer hands-on
            Reiki, where the practitioner places their hands on different areas
            of the body, while others may be more comfortable with hands-off
            Reiki, where the practitioner never touches your body. Regardless of
            your preference, you’ll receive the incredible benefits of Reiki.
            It’s truly a beautiful and transformative experience.
          </p>
        </div>
        <div className="flex justify-center pt-6 md:space-x-5 flex-col md:flex-row">
          <div className="md:w-1/2 w-full h-full">
            <img
              src={
                "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 w-full pt-14 md:pt-0">
            <h3 className="font-ebgaramond font-bold text-lg">
              Benefits of Reiki:
            </h3>
            <div className="flex flex-col md:pt-8 pt-3">
              {benefits.map((item, index) => {
                return (
                  <div className="flex items-center py-1 space-x-3" key={index}>
                    <div className="w-[5px] h-[5px] rounded-full bg-[#DC143C]"></div>
                    <h4>{item}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <h3 className="text-center md:pt-14 pt-6 md:pb-8 pb-4 font-urbanist text-lg">
          Book a session to discover the holistic benefits of reiki and
          experience the harmony it brings to the mind, body, and spirit.
        </h3>
        <div
          className={`${styles.button} mx-auto !cursor-pointer !w-[200px] !rounded-3xl text-white`}
        >
          <button type="button" className="text-2xl font-bold">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
