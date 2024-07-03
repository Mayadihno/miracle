import { useState } from "react";
import styles from "../../../styles/styles";
import { ICONS } from "../../icons/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className={`${styles.section} font-ebgaramond md:px-20 my-20`}>
      <h3 className="text-3xl font-bold pb-3">Login</h3>
      <div className="md:w-1/2 w-full h-fit bg-white md:p-10 p-5 shadow-2xl">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col space-y-5">
            <div className="">
              <label
                htmlFor="username"
                className="flex items-center text-lg font-semibold"
              >
                Email addresss <span className="text-red-500">*</span>
              </label>
              <div className="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="username"
                  required
                  className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="flex items-center text-lg font-semibold"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={!visible ? "password" : "text"}
                  name="password"
                  id="password"
                  required
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles.input} text-black outline-none border-2 border-[#DCDCDC] !w-full p-2.5 !rounded-[1px]`}
                />
                {visible ? (
                  <ICONS.eyelock
                    className="absolute top-2 right-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <ICONS.eye
                    className="absolute top-2 right-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex space-x-8 mt-3">
            <div
              className={`${styles.button} !h-[40px] text-lg font-bold !w-[20%] text-white !rounded-[20px]`}
            >
              <button type="submit">Login</button>
            </div>
            <div className="flex space-x-2 items-center">
              <input type="checkbox" name="" id="" />
              <p className="text-lg font-semibold">Remember me</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
