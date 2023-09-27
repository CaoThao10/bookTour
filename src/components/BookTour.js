import React from "react";

const BookTour = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex flex-col items-center justify-center w-[740px] h-full m-3">
          <div className="w-full min-h-[240px] border rounded-xl border-blue-500 ">
            <div className="bg-blue-500 w-full p-2 rounded-t-xl ">
              <span>Dịch vụ tour</span>
            </div>
            <div className="pl-2 my-3">
              <span className="">Tour yêu cầu</span>
              <span className="text-red-500 italic px-2">
                (Đặt tour cho gia đình - cá nhân - công ty...)
              </span>
            </div>
            <div className="pl-2 my-3">
              <input
                type="text"
                placeholder="Tour yêu cầu"
                className="bg-transparent w-full border border-solid outline-none p-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 pl-2 my-3">
              <div>
                <span className="my-3">Khách sạn</span>
                <input
                  type="text"
                  placeholder="sao"
                  className="bg-transparent w-full border border-solid
  outline-none p-2 my-3"
                />
              </div>
              <div>
                <span>Số ngày đi tour</span>
                <input
                  type="text"
                  placeholder="*"
                  className="my-3 bg-transparent border border-solid
  outline-none p-2"
                />
              </div>
              <div>
                <span>Phương tiện</span>
                <input
                  type="text"
                  placeholder="*"
                  className="my-3 bg-transparent border border-solid
  outline-none p-2"
                />
              </div>
            </div>
          </div>
          <div className="w-[740px] min-h-[240px] my-3 border rounded-xl border-blue-500 ">
            <div className="bg-blue-500 w-full p-2 rounded-t-xl ">
              <span>Chi tiết tour</span>
            </div>
            <div className="pl-2 my-3">
              <span className="">Mã booking</span>
              <span className="bg-amber-400 rounded-2xl px-2 mx-2">
                BA2313CSD
              </span>
              <span className="text-red-500 italic ">
                (Qúy khách vui lòng nhớ số booking để tiện cho giao dịch sau
                này.)
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 pl-2 my-3">
              <div>
                <span className="my-3">Người lớn</span>
                <input
                  type="text"
                  placeholder="*"
                  className="bg-transparent border border-solid
  outline-none p-2 my-3"
                />
              </div>
              <div>
                <span>Trẻ em</span>
                <input
                  type="text"
                  placeholder="*"
                  className="my-3 bg-transparent border border-solid
  outline-none p-2"
                />
              </div>
              <div>
                <span>Trẻ nhỏ</span>
                <input
                  type="text"
                  placeholder="*"
                  className="my-3 bg-transparent border border-solid
  outline-none p-2"
                />
              </div>
            </div>
            <div className="pl-2 my-3">
              <span>Ngày đặt tour</span>
              <input
                type="date"
                className="my-3 bg-transparent border border-solid
  outline-none p-2 mx-2"
              />
            </div>
          </div>
          <div className="w-[740px] min-h-[240px] my-3 border rounded-xl border-blue-500 ">
            <div className="bg-blue-500 w-full p-2 rounded-t-xl px-2 ">
              <span>Lưu ý</span>
            </div>
            <div className="pl-2 my-3 flex flex-col">
              <span className="py-2">
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil dolores quidem asperiores laudantium aliquid, officia
                veritatis alias voluptatem at suscipit libero quos dolor
                repudiandae voluptas officiis mollitia explicabo optio a?
              </span>
              <span className="py-2">
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil dolores quidem asperiores laudantium aliquid, officia
                veritatis alias voluptatem at suscipit libero quos dolor
                repudiandae voluptas officiis mollitia explicabo optio a?
              </span>
              <span className="py-2">
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil dolores quidem asperiores laudantium aliquid, officia
                veritatis alias voluptatem at suscipit libero quos dolor
                repudiandae voluptas officiis mollitia explicabo optio a?
              </span>
            </div>
          </div>
        </div>
        <div className="border border-orange-400 rounded-xl w-[360px] h-[450px] m-3">
          <div className="p-2 bg-orange-400 w-full rounded-t-xl">
            <span className="text-white text-xl">Thông tin liên hệ</span>
          </div>
          <div className="mx-2">
            <div>
              <input
                type="text"
                placeholder="Họ tên*"
                className=" w-full bg-transparent border border-solid
  outline-none p-2 my-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Điện thoại*"
                className="bg-transparent w-full border border-solid
  outline-none p-2 my-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email*"
                className="bg-transparent w-full border border-solid
  outline-none p-2 my-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Địa chỉ*"
                className="bg-transparent w-full border border-solid
  outline-none p-2 my-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Ghi chú*"
                className="bg-transparent w-full border border-solid
  outline-none p-2 my-3 h-[80px]"
              />
            </div>
          </div>
          <div className="mx-3">
            <button className="px-3 w-full rounded-3xl h-[40px] bg-orange-500 hover:bg-orange-400 text-white text-xl">
              Đặt tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;
