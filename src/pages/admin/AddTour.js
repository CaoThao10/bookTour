import React, { useState } from "react";
import { convertBase64ToImage, toBase64 } from "./../../until/componentsHandle";
import { toast } from "react-toastify";
import TextEditor from "../../components/TextEditor";
import { useParams } from "react-router-dom";

const AddTour = () => {
  const { id } = useParams();
  const [valueInput, setValueInput] = useState({
    category: "",
    description: "",
    difficulty: "",
    duration: "",
    hotelAddress: "",
    hotelName: "",
    images: "",
    maxGroupSize: "",
    name: "",
    price: "",
    startDates: "",
    tourConditions: "",
    vehicleType: "",
  });

  const postCategory = async () => {
    toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 1MB");
    console.log(valueInput);
    // try {
    //   await axios.post(
    //     `${process.env.REACT_APP_BACKEND_URL}/v1/product/addcategory`,
    //     valueInput
    //   );
    //   toast.success("Thêm thành công");
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Thêm thất bại");
    // }
  };

  // Set giá trị
  const handleSetValue = (key, value) => {
    setValueInput({
      ...valueInput,
      [key]: value,
    });
  };

  //Xử lí thay đổi ảnh đại diện
  const imageChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size <= 1024 * 1024) {
        let fileImg = e.target.files[0];
        handleSetValue("images", await toBase64(fileImg));
        // setValueInput({
        //   ...valueInput,
        //   image: await toBase64(fileImg),
        // });
      } else {
        toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 1MB");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postCategory();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center col-span-4 gap-6">
          <div className="border w-44 h-44 border-blue1">
            <img
              src={valueInput?.images || "/imgdf.png"}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="py-3 px-6 font-semibold text-blue6 border-blue6 border-[2px] relative">
              <span>Chọn ảnh</span>
              <input
                type="file"
                onChange={imageChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </button>
            <span className="text-[14px] text-gray1">
              Dung lượng file tối đa 1mb <br /> Định dạng: .JPEG, .PNG
            </span>
          </div>
        </div>
        <FormUIAddProduct title={"Name"}>
          <input
            type="text"
            placeholder="Nhập tên tour"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.name}
            onChange={(e) => {
              handleSetValue("name", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Price"}>
          <input
            type="text"
            placeholder="Nhập giá tour"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.price}
            onChange={(e) => {
              handleSetValue("price", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Start Dates"}>
          <div className="flex items-center gap-[10%]">
            <input
              type="date"
              className="h-[38px] pr-3 border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={valueInput?.startDates}
              onChange={(e) => {
                handleSetValue("startDates", e.target.value);
              }}
            />
            <div className="flex items-center flex-1 gap-5">
              <span>Max Group Size</span>
              <input
                type="text"
                placeholder="Nhập số lượng"
                className="h-[38px] pr-20 border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
                value={valueInput?.maxGroupSize}
                onChange={(e) => {
                  handleSetValue("maxGroupSize", e.target.value);
                }}
              />
            </div>
          </div>
        </FormUIAddProduct>
        <FormUIAddProduct title={"Category"}>
          <div className="relative">
            <p className="absolute top-[50%] flex gap-2 items-center -translate-y-[50%] right-3 text-gray1 text-sm">
              <svg
                width="1"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18558e-08"
                  x2="0.499999"
                  y2="17"
                  stroke="#8B8B8B"
                />
              </svg>
              <span>{valueInput?.category?.length} /120</span>
            </p>
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={valueInput?.category}
              onChange={(e) => {
                handleSetValue("category", e.target.value);
              }}
            />
          </div>
        </FormUIAddProduct>
        <FormUIAddProduct title={"Difficulty"}>
          <div className="flex items-center gap-[10%]">
            <select
              name="difficulty"
              id="difficulty"
              className="h-[38px] pl-3 min-w-[30%] outline-none focus:border-blue6 border border-grayE8 pr-5"
              value={valueInput?.difficulty}
              onChange={(e) => {
                handleSetValue("difficulty", e.target.value);
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <div className="flex items-center flex-1 gap-5">
              <span>Duration</span>
              <input
                type="text"
                name="duration"
                id="duration"
                className="h-[38px] border px-3 min-w-[60%] border-grayE8"
                placeholder="Duration"
                value={valueInput?.duration}
                onChange={(e) => {
                  handleSetValue("duration", e.target.value);
                }}
              />
            </div>
          </div>
        </FormUIAddProduct>
        <FormUIAddProduct title={"Hotel Name"}>
          <input
            type="text"
            placeholder="Nhập tên khách sạn"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.hotelName}
            onChange={(e) => {
              handleSetValue("hotelName", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Hotel Address"}>
          <input
            type="text"
            placeholder="Nhập địa chỉ khách sạn"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.hotelAddress}
            onChange={(e) => {
              handleSetValue("hotelAddress", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Tour Conditions"}>
          <input
            type="text"
            placeholder="Nhập điều kiện tour"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.tourConditions}
            onChange={(e) => {
              handleSetValue("tourConditions", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"VehicleType"}>
          <input
            type="text"
            placeholder="Nhập loại xe"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.vehicleType}
            onChange={(e) => {
              handleSetValue("vehicleType", e.target.value);
            }}
          />
        </FormUIAddProduct>

        <FormUIAddProduct title={"Mô tả sản phẩm"}>
          <TextEditor
            setValues={
              valueInput?.description ||
              convertBase64ToImage(valueInput?.description)
            }
            placeholder="Write something..."
            onChange={(html) => handleSetValue("description", html)}
          ></TextEditor>
        </FormUIAddProduct>
        <div className="flex items-center justify-center mt-5">
          <button className="py-3 px-6 font-semibold text-white bg-blue6 border-blue6 border-[2px]">
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
};

export const FormUIAddProduct = ({
  className,
  classNameTitle,
  title,
  children,
}) => {
  return (
    <div className={`grid grid-cols-6 gap-10 pr-5 mt-6 ${className}`}>
      <span
        className={`col-span-1 text-right whitespace-nowrap leading-9 ${classNameTitle}`}
      >
        {title}
      </span>
      <div className="flex flex-col col-span-5 gap-2">{children}</div>
    </div>
  );
};

export default AddTour;
