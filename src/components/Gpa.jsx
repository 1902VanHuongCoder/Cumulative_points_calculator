import GreetingBgPNGDesktop from "../assets/GreetingBgPNGDesktop.png";
import Footer from "./default_components/Footer";
import Navbar from "./default_components/Navbar";
import Sidebar from "./default_components/Sidebar";
const Gpa = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-cyan-300 to-pink-600">
      <div
        className="w-full h-full bg-repeat pb-5"
        style={{ backgroundImage: `url('${GreetingBgPNGDesktop}')` }}
      >
        <Navbar />
        <div className="w-[95%] sm:w-full sm:px-10 mx-auto overflow-hidden">
          <h1 className="w-full py-5 text-[24px] text-center text-white font-bold mb-5">
            GPA
          </h1>
          <div className="w-full flex justify-center gap-x-10 flex-wrap">
            {/* parent */}
            <div data-aos="fade-up" className="relative flex justify-evenly items-center mb-16 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-sm gap-x-4">
              {/* item  */}
              <h2 className="absolute top-[-20px] text-black sm:text-[16px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #facc15 0%, #facc15 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px]  bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]   rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #ff144e 0%, #ff144e 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>

            <div data-aos="fade-up" className="relative flex justify-evenly items-center mb-16 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-sm gap-x-4">
              {/* item  */}
              <h2 className="absolute top-[-20px] text-black sm:text-[16px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #facc15 0%, #facc15 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px]  bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]   rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #ff144e 0%, #ff144e 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>

            <div data-aos="fade-up" className="relative flex justify-evenly items-center mb-16 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-sm gap-x-4">
              {/* item  */}
              <h2 className="absolute top-[-20px] text-black sm:text-[16px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #facc15 0%, #facc15 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px]  bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]   rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #ff144e 0%, #ff144e 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>

            <div data-aos="fade-up" className="relative flex justify-evenly items-center mb-16 bg-[rgba(0,0,0,.3)] p-5 pt-10 rounded-sm gap-x-4">
              {/* item  */}
              <h2 className="absolute top-[-20px] text-black sm:text-[16px] bg-white px-4 py-2 rounded-lg">
                2023 - 2024
              </h2>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #09ff46 0%, #09ff46 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">I</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]  rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #facc15 0%, #facc15 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px]  bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">II</p>
              </div>
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-5">
                <div
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]   rounded-full flex justify-center items-center"
                  style={{
                    backgroundImage: `conic-gradient(from 0deg, #ff144e 0%, #ff144e 84%, transparent 84%, transparent)`,
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[100px]  sm:h-[100px] bg-white rounded-full flex justify-center items-center shadow-inner">
                    <h2 className="text-sm sm:text-3xl">3.36</h2>
                  </div>
                </div>
                <p className="text-white text-[16px] sm:text-[20px]">III</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default Gpa;
