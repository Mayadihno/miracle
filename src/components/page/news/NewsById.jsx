import { useParams } from "react-router-dom";
import { news } from "../../../static/news";
import image from "../../../assets/mic.jpg";

const NewsById = () => {
  const { name } = useParams();
  const newsData = news.find((i) => i.title === name);
  return (
    <div className="md:w-[85%] mx-auto w-full">
      <div className="md:my-20 my-10 px-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">{newsData.title}</h1>
          <h3 className="text-xl py-2 font-medium text-[#DC143C]">
            {newsData.category}
          </h3>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-5">
          <div className="w-full">
            <img
              src={newsData.image}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = image;
              }}
            />
          </div>
          <p className="md:text-base text-sm md:pt-0 pt-6 leading-10 font-medium">
            {newsData.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsById;
