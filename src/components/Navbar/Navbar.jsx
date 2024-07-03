import { useState } from "react";
import image from "../../assets/logo.webp";
import NavItems from "./NavItems";
import { ICONS } from "../icons/icons";
import Menubar from "./Menubar";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full h-fit md:px-32 px-5 pb-5 md:pb-0 shadow-xl">
        <div className="flex justify-between items-center md:pt-0 pt-3">
          <div className="w-[80px] md:h-[80px] ">
            <img
              src={image}
              alt="logo image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:block hidden">
            <NavItems />
          </div>
          <div className="block md:hidden" onClick={() => setShow(!show)}>
            {show ? (
              <ICONS.close size={25} color="#DC143C" />
            ) : (
              <ICONS.menu size={25} color="#DC143C" />
            )}
          </div>
        </div>
      </div>
      {show && (
        <div className="mt-3 shadow-md  h-fit">
          <div>
            <Menubar setShow={setShow} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
