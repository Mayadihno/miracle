import Brand from "../../Home/Brand";
import Carousel from "../../Home/Carousel";
import Mission from "../../Home/Mission";
import Subscribe from "../../Home/Subscribe";
import Testimonial from "../../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Mission />
      <Brand />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
