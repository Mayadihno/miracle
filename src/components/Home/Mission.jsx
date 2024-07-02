import { missionCard } from "../../static/mission";
import styles from "../../styles/styles";

const Mission = () => {
  return (
    <div className={`${styles.section} my-8 font-urbanist`}>
      <h4 className="text-5xl font-semibold font-ebgaramond py-4 text-[#DC143C] text-center">
        Welcome to Vie Paix: Your Path to Empowerment and Healing
      </h4>
      <p className="text-lg font-semibold py-5 text-center">
        At Vie Paix, we are dedicated to empowering women to embrace purpose,
        self-awareness, and transformation. Through our holistic approach, we
        offer insightful blogs, inspiring podcasts, and transformative energy
        healing sessions designed to nurture your mind, body, and spirit.
      </p>

      <div className="mt-14">
        <h3 className="text-4xl font-bold font-ebgaramond text-center text-[#DC143C]">
          Our Mission
        </h3>
        <div className="grid md:grid-cols-4 pt-16 grid-cols-1 gap-6">
          {missionCard.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white text-center p-4 rounded-xl shadow-2xl w-full"
              >
                <h3 className="text-xl pt-4 font-semibold font-ebgaramond text-[#DC143C]">
                  {item.title}
                </h3>
                <p className="text-base font-medium leading-8 font-urbanist py-3">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mission;
