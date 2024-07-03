import styles from "../../../styles/styles";
import image1 from "../../../assets/about-1.jpg";
import image2 from "../../../assets/about-2.jpg";
const About = () => {
  return (
    <>
      <div className="about-bg w-full md:h-[70vh] h-[40vh] font-ebgaramond md:mt-1 mt-5">
        <div className="w-full h-full bg-[#000000a1] opacity-50 inset-0"></div>
        <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="md:text-7xl text-nowrap text-4xl font-[700]">
            About Us
          </h3>
        </div>
      </div>
      <div className={`${styles.section} md:px-20 py-10 mt-8`}>
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col w-1/2">
            <div className="md:w-[500px] w-[380px] h-[600px]">
              <img src={image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-[500px] w-[380px] h-[500px] mt-[-100px] md:mt-[-80px]">
              <img
                src={image2}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="font-ebgaramond md:w-1/2 w-full md:mt-0 mt-[-50px]">
            <h3 className="md:text-3xl text-xl font-bold text-[#DC143C]">
              Unveiling the Power Within: My Path to Spiritual Wellness
            </h3>
            <div className="text-lg font-medium leading-9 mt-7 space-y-3">
              <p>
                Hello, I’m Candice Shambra, an internationally accredited IPHM
                Reiki Master, Spiritual Life Coach, and Energetic Protection
                Specialist dedicated to guiding you on your path to holistic
                well-being and spiritual transformation.
              </p>
              <p>
                My own journey into energy healing and spiritual wellness began
                during a challenging time in my life. After struggling to
                conceive for three years and being diagnosed with
                hypothyroidism, I refused to settle for a lifetime of
                medication. Instead, I immersed myself in holistic remedies,
                incorporating acupuncture, Reiki, nutrition, and exercise into
                my daily routine.
              </p>
              <p>
                The results were nothing short of remarkable. Not only did my
                thyroid issues completely resolve, but I also defied the odds
                and conceived two healthy, beautiful boys just two years apart.
                I even discovered I was pregnant with my second child during a
                Reiki session, one month before receiving a positive pregnancy
                test. This profound experience further deepened my belief in the
                power of energy healing.
              </p>
              <p>
                Beyond the physical changes, I experienced profound spiritual
                shifts. Bloating disappeared, mental clarity soared, and I found
                myself filled with renewed energy and vitality.
              </p>
              <p>
                Inspired by my own transformative experience, I now specialize
                in Reiki healing, spiritual coaching, and energetic protection.
                My mission is to empower you to discover your innate healing
                potential and embrace a life of balance, purpose, and joy.
              </p>
              <p>
                Let’s embark together on a journey of self-discovery, healing,
                and spiritual growth. Together, we can awaken your inner
                vitality and cultivate a life filled with health, happiness, and
                spiritual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
