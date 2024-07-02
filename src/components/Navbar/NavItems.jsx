import { Link, useLocation } from "react-router-dom";
import { navItems } from "./nav";

const NavItems = () => {
  const location = useLocation();

  return (
    <div className="flex space-x-5">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`${
            location.pathname === item.link ? "text-[#DC143C]" : "text-black"
          } text-lg font-semibold font-ebgaramond hover:text-[#DC143C]`}
        >
          <Link to={item.link}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
