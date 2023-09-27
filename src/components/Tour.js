import React from "react";

const Tour = () => {
  return (
    <div className="m-6">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-gray-500 font-medium">Tour chính</h2>
      </div>
      <div className="w-full flex mt-6 ">
        <div className="relative w-[50%] object-cover">
          <div className="w-[100%] h-full object-cover">
            <img className="w-full  h-full" src="/8.jpg" alt="" />
          </div>
          <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
            <h2 className="flex  items-center justify-center text-center  text-white text-3xl">
              Lorem, ipsum dolor.
            </h2>
            <h3 className="flex  items-center justify-center text-center  text-white text-3xl">
              Lorem - Lorem, ipsum dolor.
            </h3>
            <h4 className="flex  items-center justify-center text-center  text-white text-2xl">
              Giá: 1.000.000 VNĐ
            </h4>
            <a href="">
              <button className="border rounded-2xl px-2 py-1 mt-2 text-white hover:bg-yellow-400 hover:border-transparent">
                Đặt ngay
              </button>
            </a>
          </div>
        </div>
        <div className="w-[50%] flex object-cover">
          <div className="w-[50%] object-cover ">
            <div className=" relative w-full h-[50%]">
              <div className="w-[100%] flex flex-col object-cover">
                <img className="w-full  h-full" src="/9.jpg" alt="" />
                {/* <img className="w-full  h-full" src="/10.jpg" alt="" /> */}
              </div>
              <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem - Lorem, ipsum dolor.
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Giá: 1.000.000 VNĐ
                </h4>
                <a href="">
                  <button className=" text-base border rounded-2xl p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </a>
              </div>
            </div>
            <div className="relative w-full h-[50%]">
              <div className="w-[100%] h-full flex flex-col object-cover">
                {/* <img className="w-full  h-full" src="/9.jpg" alt="" /> */}
                <img className="w-full  h-full" src="/10.jpg" alt="" />
              </div>
              <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem - Lorem, ipsum dolor.
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Giá: 1.000.000 VNĐ
                </h4>
                <a href="">
                  <button className=" border rounded-2xl text-base p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full object-cover ">
            <div className="relative w-full h-[50%]">
              <div className="w-[100%] h-full flex flex-col object-cover">
                <img className="w-full  h-full" src="/13.jpg" alt="" />
                {/* <img className="w-full  h-full" src="/10.jpg" alt="" /> */}
              </div>
              <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem - Lorem, ipsum dolor.
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Giá: 1.000.000 VNĐ
                </h4>
                <a href="">
                  <button className=" border rounded-2xl text-base p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </a>
              </div>
            </div>
            <div className="relative w-full  h-[50%]">
              <div className="w-[100%] flex flex-col object-cover">
                {/* <img className="w-full  h-full" src="/9.jpg" alt="" /> */}
                <img className="w-full  h-full" src="/12.jpg" alt="" />
              </div>
              <div className="absolute top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Lorem - Lorem, ipsum dolor.
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-base leading-tight">
                  Giá: 1.000.000 VNĐ
                </h4>
                <a href="">
                  <button className=" border rounded-2xl text-base p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
