import GreetingBgPNGDesktop from "../assets/GreetingBgPNGDesktop.png";
import logo from "../assets/logo.png";
const Gpa = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-cyan-300 to-pink-600">
      <div
        className="w-full h-full bg-repeat pb-10"
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

        <div className="w-[95%] sm:w-4/5 mx-auto">
          <h1 className="w-full py-5 text-[24px] text-center text-white font-bold mb-5">
            GPA
          </h1>
          <div>
            {/* parent */}
            <div className="relative flex justify-evenly items-center mb-10 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-lg">
              {/* item  */}
              <h2 className="absolute top-[-20px] left-[10px] md:top-[-30px] sm:left-[-50px] text-black sm:text-[24px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>

            <div className="relative flex justify-evenly items-center mb-10 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-lg">
              {/* item  */}
              <h2 className="absolute top-[-20px] left-[10px] md:top-[-30px] sm:left-[-50px] text-black sm:text-[24px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>
            <div className="relative flex justify-evenly items-center mb-10 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-lg">
              {/* item  */}
              <h2 className="absolute top-[-20px] left-[10px] md:top-[-30px] sm:left-[-50px] text-black sm:text-[24px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>

            <div className="relative flex justify-evenly items-center mb-10 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-lg">
              {/* item  */}
              <h2 className="absolute top-[-20px] left-[10px] md:top-[-30px] sm:left-[-50px] text-black sm:text-[24px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px] lg:w-[140px] sm:h-[100px] lg:h-[140px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl lg:text-4xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gpa;
