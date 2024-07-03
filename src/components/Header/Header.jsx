import { useState } from "react";
import styles from "../../styles/styles";
import { ICONS } from "../icons/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
    setSearch("");
  };

  return (
    <div className="w-full h-fit md:px-32 px-2 py-2 border-b-[1px] border-[#dc143c7b]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex space-x-3 md:pb-0 pb-3">
          <div
            className={`${styles.primary} cursor-pointer rounded-full flex justify-center items-center text-white w-[30px] h-[30px]`}
          >
            <ICONS.instagram size={15} />
          </div>
          <div
            className={`${styles.primary} cursor-pointer rounded-full flex justify-center items-center text-white w-[30px] h-[30px]`}
          >
            <ICONS.youtube size={15} />
          </div>
        </div>
        <div className="flex md:space-x-3 space-x-1 items-center">
          <div className="flex">
            <input
              type="search"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="md:w-60 w-[80%] md:h-[45px] h-[35px] bg-transparent border
             outline-none px-3 placeholder:text-base placeholder:text-black
             font-ebgaramond font-semibold text-black"
            />
            <div
              className={`text-white flex justify-center items-center ${styles.primary} w-[30px] cursor-pointer`}
            >
              <ICONS.search size={24} className="" onClick={handleSearch} />
            </div>
          </div>
          <Link
            to={"/"}
            className="text-base uppercase font-ebgaramond font-medium"
          >
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
