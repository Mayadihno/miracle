import { news } from "../../../static/news";
import image from "../../../assets/mic.jpg";
import { Link } from "react-router-dom";
const NewsData = () => {
  return (
    <>
      <div className="news w-full md:h-[70vh] h-[40vh] font-ebgaramond md:mt-1 mt-5">
        <div className="w-full h-full bg-[#000000a1] opacity-50 inset-0"></div>
        <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="md:text-7xl text-nowrap text-4xl font-[700]">News</h3>
        </div>
      </div>
      <div className="md:w-[80%] w-[95%] mx-auto">
        <div className="my-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-20 gap-y-8">
            {news.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" bg-white md:w-[300px] w-full shadow-2xl h-fit rounded-lg p-3"
                >
                  <div className="w-full h-[250px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = image;
                      }}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 py-3 text-nowrap">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <h3 className="text-base font-normal text-[#DC143C]">
                      {item.category}
                    </h3>
                  </div>
                  <p className="text-sm line-clamp-3">{item.content}</p>
                  <Link to={`/news/${item.title}`}>
                    <div className="py-1 bg-[#DC143C] mt-3 text-white text-center cursor-pointer">
                      Read more
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsData;
