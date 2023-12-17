import SquaresBgPNG from "../assets/SquaresBgPNG.png";
import githubIcon from "../assets/githubicon.png";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import Navbar from "./default_components/Navbar";
import Sidebar from "./default_components/Sidebar";
const subjectList = [1, 2, 3, 4, 5];
const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-scroll lg:h-screen lg:overflow-hidden bg-gradient-to-tr from-cyan-300 to-pink-600">
      <div
        className="w-full h-full bg-repeat"
        style={{ backgroundImage: `url('${SquaresBgPNG}')` }}
      >
        <Navbar />
        <div
          className={`w-full h-['${
            window.innerHeight - 60
          }px'] flex justify-center items-center pb-3 sm:pb-0`}
        >
          <div className="w-full lg:flex">
            <div className={`w-full lg:w-2/3 h-fit mb-16 sm:mb-0`}>
              <div className="w-[320px] h-[352px] sm:w-full sm:h-fit overflow-scroll sm:overflow-auto  mx-auto px-3">
                <div className="w-[600px] h-[300px] sm:h-fit sm:w-[95%] mx-auto text-[12px] sm:text-[14px]">
                  <ul className="text-white w-full flex px-1 lg:px-5 py-2">
                    <li className="basis-[6%] text-center">STT</li>
                    <li className="basis-[25%] lg:basis-[36%] text-center">
                      Subject Name
                    </li>
                    <li className="basis-[13%] lg:basis-[15%] text-center">
                      No. Cre
                    </li>
                    <li className="basis-[8%] text-center">Score</li>
                    <li className="basis-[15%] lg:basis-[10%] text-center">
                      Semester
                    </li>
                    <li className="basis-[21%] lg:basis-[15%] text-center ">
                      Year
                    </li>
                    <li className="basis-[12%]  text-center">Action</li>
                  </ul>
                  {subjectList.map((item, index) => {
                    return (
                      <ul
                        key={index}
                        className={`h-[60px] ${
                          item % 2 === 0
                            ? "text-white bg-[rgba(0,0,0,0.3)] "
                            : "bg-[rgba(255,255,255,.8)] text-black"
                        }w-full flex items-center px-1 lg:px-5 mb-1 rounded-lg`}
                      >
                        <li className="basis-[6%] text-center">{item}</li>
                        <li className="basis-[25%] lg:basis-[36%] text-center">
                          Analyze and Design System
                        </li>
                        <li className="basis-[13%] lg:basis-[15%] text-center">
                          3
                        </li>
                        <li className="basis-[8%] text-center">C</li>
                        <li className="basis-[15%] lg:basis-[10%] text-center">
                          1
                        </li>
                        <li className="basis-[21%] lg:basis-[15%] text-center">
                          2023 - 2024
                        </li>
                        <li className="basis-[12%] flex gap-x-1 lg:gap-x-2 justify-center items-center ">
                          <a className="cursor-pointer" href="/home/update/analize-and-design-system">
                            <FaPenToSquare className="text-green-600 text-[32px]  p-2" />
                          </a>{" "}
                          <span className="opacity-70 text-white">|</span>{" "}
                          <a className="cursor-pointer" href="/home/delete/analize-and-design-system">
                            {" "}
                            <FaRegWindowClose className="text-red-600 text-[32px] p-2" />
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>

              <div className="w-full my-5 flex justify-center gap-x-5">
                <button className="p-5  border-[1px] border-white border-solid rounded-full text-white bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.4)]">
                  <FaArrowAltCircleLeft />
                </button>
                <button className="p-5 border-[1px] border-white border-solid rounded-full text-white bg-transparent hover:bg-[rgba(255,255,255,.2)]">
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
            <div className={`w-full lg:w-1/3 flex flex-col gap-y-5`}>
              <div className="flex flex-col items-center gap-y-5">
                <div
                  className="w-[200px] h-[200px] rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[180px] h-[180px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-5xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white">
                  <span className="text-[20px] text-[#fbfe4e]">Excellent</span>{" "}
                  rating
                </p>
              </div>
              <div className="px-5 flex flex-col gap-y-2 text-white">
                <h2 className="w-full py-2 text-[20px]">Notifications</h2>
                <p className="text-[12px]">
                  This website is being finalized, so if you have any feedback,
                  you can contact me via{" "}
                </p>
                <div className="flex w-full justify-center gap-x-4">
                  <a href="">
                    <img
                      src={facebookIcon}
                      alt="facebook icon"
                      className="w-7"
                    />
                  </a>
                  <a href="">
                    <img
                      src={instagramIcon}
                      alt="instagram icon"
                      className="w-7"
                    />
                  </a>
                  <a href="">
                    <img src={githubIcon} alt="github icon" className="w-7" />
                  </a>
                </div>
              </div>
              <p className="text-[10px] px-5 mb-1 text-white">
                Designed by Paul @2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
