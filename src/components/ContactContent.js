import React from "react";

const ContactContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 my-5 mx-[160px]">
        <div className="flex flex-col">
          <h2 className="text-xl">THÔNG TIN LIÊN HỆ</h2>
          <h3 className="border-b w-[80px] py-1 border-black"></h3>
          <h3 className="border-b w-[100px] py-1 border-black"></h3>
          <span className="py-4 text-[#7f7f7f]">Điện thoại: 03165656545</span>
          <span className="text-[#7f7f7f]">Hotline: 0245465421325</span>
        </div>
        <div>
          <h2 className="text-xl">LIÊN HỆ CHÚNG TÔI</h2>
          <h3 className="border-b w-[80px] py-1 border-black"></h3>
          <h3 className="border-b w-[100px] py-1 border-black"></h3>
          <div>
            <div className="w-full grid grid-cols-2 gap-2 py-2">
              <input
                type="text"
                placeholder="Họ tên"
                className="border outline-none px-[20px] py-2"
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                className="border outline-none px-[20px] py-2"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-2 py-2">
              <input
                type="text"
                placeholder="Điện thoại"
                className="border outline-none px-[20px] py-2"
              />
              <input
                type="text"
                placeholder="Email"
                className="border outline-none px-[20px] py-2"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Nội dung"
                className="border outline-none px-[20px] py-2 w-full min-h-[100px]"
              />
            </div>
            <div>
              <button className="bg-black text-white p-2 text-lg my-2 hover:bg-red-600">
                Gửi thông tin liên hệ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
