import SquaresBgPNG from "../assets/SquaresBgPNG.png";
import githubIcon from "../assets/githubicon.png";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import logo from "../assets/logo.png";
const subjectList = [1, 2, 3, 4, 5];
const Home = () => {
  return (
    <div className="relative w-full min-h-screen sm:h-screen sm:overflow-hidden bg-gradient-to-tr from-cyan-300 to-pink-600">
      <div
        className="w-full h-full bg-repeat"
        style={{ backgroundImage: `url('${SquaresBgPNG}')` }}
      >
        <div className="w-full h-[80px] bg-transparent backdrop-blur-sm flex gap-x-6 sm:gap-x-10 items-center px-6 sm:px-10">
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[30px] self-center"
          />
          <ul className="flex gap-x-10 items-center font-bold text-white">
            <li>
              <a href="/addsubject">Add Subject</a>
            </li>
            <li>
              <a href="/gpa">GPA</a>
            </li>
          </ul>
        </div>
        <div className={`w-full h-['${window.innerHeight - 60}px'] flex justify-center items-center`}>
          <div className="w-full sm:flex">
            <div className={`w-full sm:w-2/3 h-fit mb-16 sm:mb-0`}>
              <div className="w-[90%] mx-auto">
                <ul className="flex justify-evenly font-bold text-white px-1 text-center text-[12px] sm:text-[14px] mb-3">
                  <li className="basis-[12%]">STT</li>
                  <li className="basis-[34%]">Subject Name</li>
                  <li className="basis-[14%]">No. Cre</li>
                  <li className="basis-[12%] text-left">Score</li>
                  <li className="basis-[20%] text-left">Semester</li>
                  <li className="basis-[18%] text-left">Year</li>
                </ul>
                {subjectList.map((item, index) => {
                  return (
                    <ul
                      key={index}
                      className={`h-[60px] ${
                        item % 2 === 0
                          ? "bg-[rgba(0,0,0,.3)] text-white"
                          : "bg-[rgba(255,255,255,.8)] text-black"
                      }  flex justify-evenly items-center mb-1 px-2 sm:px-4 text-center text-[12px] sm:text-[14px] rounded-lg`}
                    >
                      <li className="basis-[8%]">{item}</li>
                      <li className="basis-[34%] text-left">
                        Analyze and Design System
                      </li>
                      <li className="basis-[10%]">3</li>
                      <li className="basis-[10%]">C</li>
                      <li className="basis-[10%]">1</li>
                      <li className="basis-[26%]">2023 - 2024</li>
                    </ul>
                  );
                })}
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
            <div className={`w-full sm:w-1/3 flex flex-col gap-y-5`}>
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
    </div>
  );
};

export default Home;
