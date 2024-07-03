import { navItems } from "./nav";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="flex flex-col space-y-2 mt-3 ">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`${
            location.pathname === item.link
              ? "text-[#DC143C] bg-[#f1f1f1]"
              : "text-black"
          } text-xl font-semibold py-2.5 font-ebgaramond px-4 border-b-[1px] hover:text-[#DC143C]`}
        >
          <Link to={item.link}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Menubar;
