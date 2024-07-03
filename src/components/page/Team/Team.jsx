import { useState } from "react";
import { president, team } from "./team";
import { Link } from "react-router-dom";

const Team = () => {
  const [active, setActive] = useState(2);
  return (
    <>
      <div className="team w-full md:h-[70vh] h-[40vh] font-ebgaramond md:mt-1 mt-5">
        <div className="w-full h-full bg-[#000000a1] opacity-50 inset-0"></div>
        <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="md:text-7xl text-nowrap text-4xl font-[700]">
            Our Team
          </h3>
        </div>
      </div>
      <div className="md:w-[80%] w-[95%] mx-auto md:px-10 px-2 py-10 font-ebgaramond">
        <div className="w-[95%] mx-auto">
          <div className="flex border-b md:text-2xl text-base font-Urbanist font-semibold">
            <button
              className={`md:p-3 p-2 w-full text-white font-semibold ${
                active === 1 ? "bg-[#DC143C]" : "bg-gray-200 !text-black"
              }`}
              onClick={() => setActive(1)}
            >
              President Circle
            </button>
            <button
              className={`md:p-3 p-2 w-full text-white font-semibold ${
                active === 2 ? "bg-[#DC143C]" : "bg-gray-200 !text-black"
              }`}
              onClick={() => setActive(2)}
            >
              Board of Directors
            </button>
          </div>
        </div>
        {active === 2 && (
          <div className="w-[95%] mx-auto">
            <div className=" mt-10">
              <h2 className="pb-5 font-ebgaramond text-3xl">
                2023-2024 Board of Directors
              </h2>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-5 ">
                {team.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=" bg-white w-full shadow-2xl h-fit rounded-lg p-3"
                    >
                      <div className="w-full h-[250px]">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 py-3">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <h3 className="text-lg font-medium">{item.role}</h3>
                      </div>
                      <p className="text-sm line-clamp-3">{item.about}</p>
                      <Link to={`/our-team/${item.name}`}>
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
        )}
        {active === 1 && (
          <div className="w-[95%] mx-auto">
            <div className=" mt-10">
              <h2 className="pb-5 font-ebgaramond text-3xl">
                President Circle
              </h2>
              <div className="flex flex-col w-full space-y-3">
                {president.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center space-x-2">
                      <h2 className="text-nowrap text-lg font-ebgaramond font-semibold">
                        {item.name}:
                      </h2>
                      <h4 className="text-nowrap text-base">{item.role}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Team;
