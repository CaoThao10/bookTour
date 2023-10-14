import React, { useState } from "react";
import AllTour from "../../components/dashboard/AllTour";

const classNameHeader =
  "py-5 text-center  border-b-[2px] cursor-pointer transition-all";

const ManageTour = () => {
  const [isShow, setIsShow] = useState(0);
  const handleSetShow = (index) => {
    setIsShow(index);
  };
  return (
    <div>
      <div className="p-5 pb-8 bg-white">
        <h2 className="text-lg font-semibold">Tìm kiếm sản phẩm</h2>
        <div className="mt-3">
          <div className="grid grid-cols-5 gap-10">
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="w-full h-[38px] col-span-3 px-3 border rounded-sm border-blue1 outline-none focus:border-blue6 transition-all"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-3 h-[36px] flex items-center bg-blue6 text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6">
              Tìm kiếm
            </button>
            <button className="px-3 h-[36px] flex items-center justify-center border-[2px] rounded-sm transition-all hover:text-white hover:bg-blue7 text-blue6 border-blue6">
              Đặt lại
            </button>
          </div>
        </div>
      </div>
      <div className="pb-8 mt-3 bg-white">
        {/*============================ Nav Menu ============================*/}
        <div className="grid grid-cols-6 pt-1">
          <span
            className={` ${classNameHeader} ${
              isShow === 0 ? "border-blue6 text-blue6 " : "border-grayE8"
            }`}
            onClick={() => handleSetShow(0)}
          >
            Tất cả
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 1 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(1)}
          >
            Thành công
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 2 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(2)}
          >
            Chờ xử lí
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 3 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(3)}
          >
            Yêu cầu bảo hành
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 4 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(4)}
          >
            Đã hủy
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 5 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(5)}
          >
            Báo cáo/Hoàn tiền
          </span>
        </div>
        {/*============================ View Product ============================*/}
        <div className="px-6 py-4">
          {/* <AllTour quantityProduct={products?.modifiedProducts?.length}> */}
          <AllTour>{/* <ItemManageProduct></ItemManageProduct> */}</AllTour>
        </div>
      </div>
    </div>
  );
};

export default ManageTour;
