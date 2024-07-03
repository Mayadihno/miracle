import { useParams } from "react-router-dom";
import { team } from "./team";

const Member = () => {
  const { name } = useParams();
  const teams = team.find((i) => i.name === name);

  return (
    <div className={`md:w-[85%] w-[95%] mx-auto my-10 font-ebgaramond`}>
      <div className="">
        <div className="flex flex-col md:flex-row space-x-2 md:items-center pb-3">
          <h2 className="md:text-4xl text-2xl font-semibold">{teams.name},</h2>
          <h3 className="md:text-3xl text-xl font-medium">{teams.role}</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="md:w-[500px] w-[380px] md:h-[500px] h-[300px]">
            <img src={teams.image} alt="" className="w-full h-full" />
          </div>
          <div className="md:w-[75%] w-full md:pt-0 pt-5">
            <p className="text-base font-medium leading-10">{teams.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
