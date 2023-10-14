import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  const [isShow, setIsShow] = useState(Array(5).fill(true));

  const handleSetShow = (index) => {
    let temp = [...isShow];
    temp[index] = !temp[index];
    setIsShow(temp);
  };
  return (
    <div className="bg-[#f6f6f6] w-full min-h-screen">
      <div className="w-full fixed h-[60px] bg-white z-50 shadow-sm px-[2%] border-b border-blue6">
        <div className="flex items-center justify-between h-full ">
          {/*------------------LOGO-------------------*/}
          <NavLink to={"/seller"} className="">
            <div className="flex items-center h-full gap-2">
              <img src="logo512.png" alt="" className="h-[42px]" />
              <span className="text-lg font-semibold">DevHouse</span>
            </div>
          </NavLink>
          <div className="flex items-center h-full gap-7">
            <NavLink to="/">
              <button className="px-4 py-2 text-sm font-semibold text-white rounded-sm bg-blue7">
                Trở về trang mua hàng
              </button>
            </NavLink>
            <svg
              width="1"
              height="27"
              viewBox="0 0 1 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="27"
                stroke="#CFCFCF"
              />
            </svg>
            <button className="cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 2.75C5.5 3.47935 5.21027 4.17882 4.69454 4.69454C4.17882 5.21027 3.47935 5.5 2.75 5.5C2.02065 5.5 1.32118 5.21027 0.805456 4.69454C0.289731 4.17882 0 3.47935 0 2.75C0 2.02065 0.289731 1.32118 0.805456 0.805456C1.32118 0.289731 2.02065 0 2.75 0C3.47935 0 4.17882 0.289731 4.69454 0.805456C5.21027 1.32118 5.5 2.02065 5.5 2.75ZM5.5 11C5.5 11.7293 5.21027 12.4288 4.69454 12.9445C4.17882 13.4603 3.47935 13.75 2.75 13.75C2.02065 13.75 1.32118 13.4603 0.805456 12.9445C0.289731 12.4288 0 11.7293 0 11C0 10.2707 0.289731 9.57118 0.805456 9.05546C1.32118 8.53973 2.02065 8.25 2.75 8.25C3.47935 8.25 4.17882 8.53973 4.69454 9.05546C5.21027 9.57118 5.5 10.2707 5.5 11ZM2.75 22C3.47935 22 4.17882 21.7103 4.69454 21.1945C5.21027 20.6788 5.5 19.9793 5.5 19.25C5.5 18.5207 5.21027 17.8212 4.69454 17.3055C4.17882 16.7897 3.47935 16.5 2.75 16.5C2.02065 16.5 1.32118 16.7897 0.805456 17.3055C0.289731 17.8212 0 18.5207 0 19.25C0 19.9793 0.289731 20.6788 0.805456 21.1945C1.32118 21.7103 2.02065 22 2.75 22ZM13.75 2.75C13.75 3.47935 13.4603 4.17882 12.9445 4.69454C12.4288 5.21027 11.7293 5.5 11 5.5C10.2707 5.5 9.57118 5.21027 9.05546 4.69454C8.53973 4.17882 8.25 3.47935 8.25 2.75C8.25 2.02065 8.53973 1.32118 9.05546 0.805456C9.57118 0.289731 10.2707 0 11 0C11.7293 0 12.4288 0.289731 12.9445 0.805456C13.4603 1.32118 13.75 2.02065 13.75 2.75ZM11 13.75C11.7293 13.75 12.4288 13.4603 12.9445 12.9445C13.4603 12.4288 13.75 11.7293 13.75 11C13.75 10.2707 13.4603 9.57118 12.9445 9.05546C12.4288 8.53973 11.7293 8.25 11 8.25C10.2707 8.25 9.57118 8.53973 9.05546 9.05546C8.53973 9.57118 8.25 10.2707 8.25 11C8.25 11.7293 8.53973 12.4288 9.05546 12.9445C9.57118 13.4603 10.2707 13.75 11 13.75ZM13.75 19.25C13.75 19.9793 13.4603 20.6788 12.9445 21.1945C12.4288 21.7103 11.7293 22 11 22C10.2707 22 9.57118 21.7103 9.05546 21.1945C8.53973 20.6788 8.25 19.9793 8.25 19.25C8.25 18.5207 8.53973 17.8212 9.05546 17.3055C9.57118 16.7897 10.2707 16.5 11 16.5C11.7293 16.5 12.4288 16.7897 12.9445 17.3055C13.4603 17.8212 13.75 18.5207 13.75 19.25ZM19.25 5.5C19.9793 5.5 20.6788 5.21027 21.1945 4.69454C21.7103 4.17882 22 3.47935 22 2.75C22 2.02065 21.7103 1.32118 21.1945 0.805456C20.6788 0.289731 19.9793 0 19.25 0C18.5207 0 17.8212 0.289731 17.3055 0.805456C16.7897 1.32118 16.5 2.02065 16.5 2.75C16.5 3.47935 16.7897 4.17882 17.3055 4.69454C17.8212 5.21027 18.5207 5.5 19.25 5.5ZM22 11C22 11.7293 21.7103 12.4288 21.1945 12.9445C20.6788 13.4603 19.9793 13.75 19.25 13.75C18.5207 13.75 17.8212 13.4603 17.3055 12.9445C16.7897 12.4288 16.5 11.7293 16.5 11C16.5 10.2707 16.7897 9.57118 17.3055 9.05546C17.8212 8.53973 18.5207 8.25 19.25 8.25C19.9793 8.25 20.6788 8.53973 21.1945 9.05546C21.7103 9.57118 22 10.2707 22 11ZM19.25 22C19.9793 22 20.6788 21.7103 21.1945 21.1945C21.7103 20.6788 22 19.9793 22 19.25C22 18.5207 21.7103 17.8212 21.1945 17.3055C20.6788 16.7897 19.9793 16.5 19.25 16.5C18.5207 16.5 17.8212 16.7897 17.3055 17.3055C16.7897 17.8212 16.5 18.5207 16.5 19.25C16.5 19.9793 16.7897 20.6788 17.3055 21.1945C17.8212 21.7103 18.5207 22 19.25 22Z"
                  fill="#555555"
                />
              </svg>
            </button>
            <button className="cursor-pointer">
              <svg
                width="17"
                height="20"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4763 15.1893C18.3948 15.0911 18.3147 14.9929 18.2362 14.8981C17.1558 13.5914 16.5022 12.8027 16.5022 9.10348C16.5022 7.1883 16.044 5.61687 15.1409 4.4383C14.475 3.56763 13.5749 2.90714 12.3885 2.41902C12.3732 2.41053 12.3596 2.39938 12.3482 2.38612C11.9215 0.957098 10.7537 0 9.43665 0C8.11959 0 6.95232 0.957098 6.52557 2.38464C6.51419 2.39742 6.50074 2.40821 6.4858 2.41656C3.71714 3.55634 2.3716 5.74308 2.3716 9.10201C2.3716 12.8027 1.71897 13.5914 0.637628 14.8967C0.559057 14.9914 0.479012 15.0877 0.397495 15.1879C0.186924 15.4418 0.0535095 15.7508 0.0130414 16.0782C-0.0274266 16.4056 0.0267453 16.7377 0.169146 17.0353C0.472137 17.6737 1.1179 18.07 1.85499 18.07H17.0237C17.7574 18.07 18.3987 17.6742 18.7027 17.0387C18.8457 16.7411 18.9004 16.4086 18.8603 16.0809C18.8201 15.7531 18.6869 15.4437 18.4763 15.1893ZM9.43665 22C10.1463 21.9994 10.8425 21.8068 11.4515 21.4426C12.0605 21.0783 12.5596 20.556 12.8958 19.9311C12.9116 19.9012 12.9194 19.8676 12.9185 19.8338C12.9175 19.7999 12.9078 19.7669 12.8903 19.7378C12.8728 19.7088 12.8481 19.6848 12.8186 19.6682C12.7891 19.6516 12.7558 19.6428 12.7219 19.6429H6.15236C6.11844 19.6427 6.08507 19.6514 6.05549 19.668C6.02591 19.6846 6.00114 19.7086 5.98359 19.7376C5.96604 19.7667 5.9563 19.7997 5.95532 19.8336C5.95435 19.8675 5.96217 19.9011 5.97803 19.9311C6.31419 20.556 6.81317 21.0782 7.42208 21.4424C8.03098 21.8067 8.72711 21.9993 9.43665 22Z"
                  fill="#555555"
                />
              </svg>
            </button>

            <div className="w-8 h-8">
              <img
                src="logo512.png"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <span>Ldhai_store</span>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full pt-[60px]">
        <div className="!w-[250px] fixed bg-white pb-8 overflow-auto max-h-[calc(100vh_-_60px)]">
          <div className="flex px-[12%] items-center justify-around mt-5">
            <button className="px-3 py-2 text-sm font-semibold text-black border-[2px] border-blue7 bg-blue7">
              View Shop
            </button>
            <button className="px-3 py-2 text-sm font-semibold text-blue7 border-[2px] border-blue7">
              Thêm SP
            </button>
          </div>
          {/*============================== Quản lí đơn hàng ==============================*/}
          <div className="px-[8%] flex flex-col mt-5 cursor-pointer">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleSetShow(0)}
            >
              <span className="font-semibold">Quản lí đơn hàng</span>
              <button className={`${isShow[0] ? "" : "rotate-90"}`}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                    fill="#626262"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isShow[0] ? "opacity-100 h-auto" : "h-0 opacity-0"
              } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
            >
              <NavLink to={"manage"} className="itemMenuProfile">
                <li className="cursor-pointer">Tất cả</li>
              </NavLink>
              <li className="cursor-pointer">Đơn hủy</li>
              <li className="cursor-pointer">Trả hàng/ hoàn tiền</li>
              <li className="cursor-pointer">Đơn đặt theo yêu cầu</li>
            </ul>
          </div>

          {/*============================== Quản lí sản phẩm ==============================*/}
          <div className="px-[8%] flex flex-col mt-5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleSetShow(1)}
            >
              <span className="font-semibold">Quản lí sản phẩm</span>
              <button className={`${isShow[1] ? "" : "rotate-90"}`}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                    fill="#626262"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isShow[1] ? "opacity-100 h-auto" : "h-0 opacity-0"
              } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
            >
              {" "}
              <NavLink to={"product"} className="itemMenuProfile">
                <li className="cursor-pointer ">Tất cả sản phẩm</li>
              </NavLink>
              <NavLink to={"add-product"} className="itemMenuProfile">
                <li className="cursor-pointer">Thêm sản phẩm</li>
              </NavLink>
              <NavLink to={"add-category"} className="itemMenuProfile">
                <li className="cursor-pointer">
                  Sản phẩm vi phạm/ Tesst Add category
                </li>
              </NavLink>
            </ul>
          </div>

          {/*============================== Kênh Marketing ==============================*/}
          <div className="px-[8%] flex flex-col mt-5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleSetShow(2)}
            >
              <span className="font-semibold">Kênh marketing</span>
              <button className={`${isShow[2] ? "" : "rotate-90"}`}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                    fill="#626262"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isShow[2] ? "opacity-100 h-auto" : "h-0 opacity-0"
              } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
            >
              <li className="cursor-pointer">Quảng bá sản phẩm</li>
              <li className="cursor-pointer">Tạo Voucher</li>
            </ul>
          </div>

          {/*============================== Tài chính ==============================*/}
          <div className="px-[8%] flex flex-col mt-5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleSetShow(3)}
            >
              <span className="font-semibold">Tài chính</span>
              <button className={`${isShow[3] ? "" : "rotate-90"}`}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                    fill="#626262"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isShow[3] ? "opacity-100 h-auto" : "h-0 opacity-0"
              } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
            >
              <li className="cursor-pointer">Doanh thu</li>
              <li className="cursor-pointer">Số dư tài khoản</li>
              <li className="cursor-pointer">Rút/Nạp số dư</li>
            </ul>
          </div>

          {/*============================== Quản lí Shop ==============================*/}
          <div className="px-[8%] flex flex-col mt-5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleSetShow(4)}
            >
              <span className="font-semibold">Quản lí shop</span>
              <button className={`${isShow[4] ? "" : "rotate-90"}`}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                    fill="#626262"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isShow[4] ? "opacity-100 h-auto" : "h-0 opacity-0"
              } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
            >
              <li className="cursor-pointer">Đánh giá shop</li>
              <li className="cursor-pointer">Hồ sơ shop</li>
            </ul>
          </div>
          <div className="px-[8%] flex flex-col mt-5">
            <span className="font-semibold">Quản lí đơn hàng</span>
          </div>
          <div className="px-[8%] flex flex-col mt-5">
            <span className="font-semibold">Góp ý, cải thiện chất lượng</span>
          </div>
        </div>
        <div className="!w-[250px]"></div>
        <div className="flex-1 p-4">
          <Outlet></Outlet>
        </div>
        {/* <div className="p-4 w-[250px] h-full"> */}
        <div className="mt-4 p-4 w-[280px] bg-white"></div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashBoard;