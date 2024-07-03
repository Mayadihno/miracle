import styles from "../../styles/styles";
import { testimonial } from "./testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { ICONS } from "../icons/icons";

const Testimonial = () => {
  return (
    <div className="bg-[#D51A4F] w-full h-fit">
      <div className={`${styles.section} md:px-10 px-2 py-10`}>
        <h3 className="text-center font-ebgaramond text-5xl font-bold text-white">
          Testimonials
        </h3>
        <div className="md:w-[75%] w-full mx-auto bg-white mt-8 px-6 rounded-3xl">
          <Swiper
            autoplay={{ delay: 2500 }}
            pagination={true}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {testimonial.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-full bg-white md:p-10 px-3 py-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex space-x-2 text-[#DC143C]">
                      {[...Array(5)].map((_, i) => (
                        <ICONS.star key={i} size={20} />
                      ))}
                    </div>
                    <div className="text-xl md:w-[90%] w-full mx-auto py-4 font-ebgaramond text-center font-bold">
                      <h2>{item.text}</h2>
                    </div>
                    <div className="w-[60px] h-[60px]">
                      <img
                        src={item.image}
                        alt={item.role}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div className="text-base pt-4 font-ebgaramond text-center font-medium">
                      <h2>{item.role}</h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
