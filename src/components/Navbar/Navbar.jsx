import image from "../../assets/logo.webp";
import NavItems from "./NavItems";
const Navbar = () => {
  return (
    <div className="w-full h-fit px-32">
      <div className="flex justify-between items-center">
        <div className="w-[80px] h-[80px] ">
          <img
            src={image}
            alt="logo image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="">
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
