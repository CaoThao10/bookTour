import React from "react";

const Popular = ({ title, data }) => {
  return (
    <div>
      <div className="flex justify-center my-4">
        <h2 className="text-4xl text-gray-500 font-medium">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-2 w-[100%]  ">
        {data.map((item, index) => (
          <ItemPopular
            key={index}
            img={item?.img}
            title={item?.title}
            price={item?.price}
            link={item?.link}
          ></ItemPopular>
        ))}
      </div>
    </div>
  );
};

function ItemPopular({ img, title, price, link }) {
  return (
    <div className="flex items-center justify-center">
      <div className=" mx-1 w-[100%] h-[100%] object-cover relative ">
        <img
          src={img}
          alt=""
          className="h-[100%] w-[100%] boder rounded-md opacity-90 "
        />
        <div className="absolute bottom-1 flex flex-col items-center justify-center w-full mb-3">
          <h3 className="flex  items-center justify-center text-center  text-white text-3xl">
            {title}
          </h3>
          <h4 className="flex  items-center justify-center text-center  text-white text-2xl">
            Giá: {price} VNĐ
          </h4>
          <a href={link}>
            <button className="border rounded-xl px-2 py-1 text-white hover:bg-yellow-400 hover:border-transparent">
              Đặt ngay
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popular;
