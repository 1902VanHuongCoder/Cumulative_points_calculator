import GreetingBgPNGDesktop from "../assets/GreetingBgPNGDesktop.png";
import SelectArrowUp from "../assets/SelectArrowUp.png";
import SelectArrowDown from "../assets/SelectArrowDown.png";
import logo from "../assets/logo.png";
import rocketIcon from "../assets/rocket.png";
import { useState } from "react";
const Addsubject = () => {
  const handleSelect = (state) => {
    console.log(state);
    if (state === "click") {
      setArrow(SelectArrowUp);
    } else if (state === "change") {
      setArrow(SelectArrowDown);
    }
  };
  const [arrow, setArrow] = useState(SelectArrowDown);
  console.log(arrow);
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-cyan-300 to-pink-600">
      <div
        className="w-full h-full bg-repeat py-5"
        style={{ backgroundImage: `url('${GreetingBgPNGDesktop}')` }}
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
        <form method="POST" className="w-4/5 sm:w-3/5 mx-auto">
          <h1 className="w-full text-center text-[24px] font-semibold text-white py-5">
            Add Subject
          </h1>
          <div className="w-full mb-10">
            <div className="flex flex-col sm:flex-row gap-y-5 gap-x-5 mb-5">
              <div className="basis-2/3 flex flex-col gap-y-2">
                <label className="text-white text-[14px]">
                  Subject name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="h-[40px] w-full outline-none bg-white border-[1px] border-solid border-[rgba(0,0,0,.5)] px-5 text-black rounded-sm focus:border-[rgba(0,0,0,1)]"
                />
                <small className="text-[#ffff00]">
                  Subject name is invalid!
                </small>
              </div>
              <div className="basis-1/3 flex flex-col gap-y-2">
                <label className="text-white text-[14px]">
                  No. cre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="h-[40px] w-full outline-none bg-white border-[1px] border-solid border-[rgba(0,0,0,.5)] px-5 text-black rounded-sm focus:border-[rgba(0,0,0,1)]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-5 gap-x-5 mb-5">
              <div className="basis-2/3 flex flex-col gap-y-2">
                <label className="text-white text-[14px]">
                  Subject code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="h-[40px] w-full outline-none bg-white border-[1px] border-solid border-[rgba(0,0,0,.5)] px-5 text-black rounded-sm focus:border-[rgba(0,0,0,1)]"
                />
              </div>
              <div className="basis-1/3 flex flex-col gap-y-2">
                <label className="text-white text-[14px]">
                  Score <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="h-[40px] w-full outline-none bg-white border-[1px] border-solid border-[rgba(0,0,0,.5)] px-5 text-black rounded-sm focus:border-[rgba(0,0,0,1)]"
                />
                <p className="text-[12px] text-white">
                  For examples: A, B, B+, C,...
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-5 gap-x-5 mb-5">
              <div className="basis-2/3 flex flex-col gap-y-2">
                <label className="text-white text-[14px]">
                  Semester <span className="text-red-500">*</span>
                </label>
                <select
                  className="h-[40px] w-full outline-none bg-white border-[1px] border-solid border-[rgba(0,0,0,.5)] px-5 text-black rounded-sm focus:border-[rgba(0,0,0,1)] appearance-none"
                  style={{
                    backgroundImage: `url('${arrow}}')`,
                    backgroundSize: `10px 10px`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `95% 50%`,
                  }}
                >
                  <option className="text-black">Semester 1</option>
                  <option className="text-black">Semester 2</option>
                  <option className="text-black">Semester 3</option>
                </select>
              </div>
              <div className="basis-1/3 flex flex-col gap-y-2">
                <label className="text-white text-[14px]">
                  Year <span className="text-red-500">*</span>
                </label>{" "}
                <select
                  onFocus={() => handleSelect("click")}
                  onChange={() => handleSelect("change")}
                  className="h-[40px] w-full outline-none bg-white border-[1px] border-solid border-[rgba(0,0,0,.5)] px-5 text-black rounded-sm focus:border-[rgba(0,0,0,1)] appearance-none"
                  style={{
                    backgroundImage: `url('${arrow}')`,
                    backgroundSize: `10px 10px`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `95% 50%`,
                  }}
                >
                  <option className="text-black">2022 - 2023</option>
                  <option className="text-black">2023 - 2024</option>
                  <option className="text-black">2024 - 2025</option>
                  <option className="text-black">2025 - 2026</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full  flex justify-end">
            <button className="bg-white w-[150px] rounded-full flex justify-center items-center h-[40px] gap-x-2 shadow-md">
              ADD <img src={rocketIcon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addsubject;
