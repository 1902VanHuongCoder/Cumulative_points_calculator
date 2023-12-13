import BackgroundRectangle from "../assets/BackgroundRectangle.png";
import BgTablet from "../assets/BackgroundRectangleTablet.png";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
const Login = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-cyan-300 to-pink-600">
      <div
        className="w-full h-full bg-cover bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url('${
            window.innerWidth > 834 ? BackgroundRectangle : BgTablet
          }')`,
        }}
      >
        <div className="w-[320px] sm:w-[440px] h-[500px] sm:h-[570px] bg-white shadow-md p-8 sm:p-10 rounded-md">
          <h1 className="text-[32px] font-[800] w-full h-[61px] sm:h-[80px] flex justify-center items-center">
            Login
          </h1>
          <form
            action=""
            method="POST" 
            className="h-[300px] sm:h-[329px] flex flex-col justify-evenly items-center"
          >
            <div className="w-full border-b-2 border-rgba(0,0,0,1) border-solid py-2">
              <div className="mb-2 text-[14px]">Username</div>
              <div className="flex gap-x-2">
                <CiUser className="text-[20px] opacity-50" />
                <input
                  type="text"
                  className="w-full h-[20px] outline-none border-none text-[16px]"
                  placeholder="Type your username"
                />
              </div>
            </div>

            <div className="w-full border-b-2 border-rgba(0,0,0,1) border-solid py-2">
              <div className="mb-2 text-[14px]">Password</div>
              <div className="flex gap-x-2">
                <IoLockClosedOutline className="text-[20px] opacity-50" />
                <input
                  type="password"
                  className="w-full h-[20px] outline-none border-none text-[16px]"
                  placeholder="Type your password"
                />
              </div>
            </div>
            <div className="w-full text-right">
                <a className="text-[#4081FF] underline" href="/forgetpass">Forgot password?</a>
            </div>
          </form>
          {/* rounded-[30px] bg-[linear-gradient(85deg,_#72F3F7_0%,_#D90FF9_98.47%)] */}
          <div className="h-[85px] sm:h-[100px] flex flex-col justify-center gap-y-4 items-center">
          <button className="w-full bg-gradient-to-r from-[rgba(0, 255, 255, 0.55)] to-[rgba(255, 0, 122, 0.82)] py-3 sm:py-5 uppercase font-bold text-white text-[16px] rounded-full hover:opacity-80">
              login 
            </button>
            <p>
              <span>Or</span>{" "}
              <a href="/signup" className="underline text-[#0E7CFC]">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={`absolute ${window.innerWidth < 836 ? "bottom-5" : "bottom-0"} left-[50%] translate-x-[-50%] text-white`}>
        <p className="text-sm sm:text-xl">Designed by Paul @2023</p>
      </div>
    </div>
  );
};

export default Login;
