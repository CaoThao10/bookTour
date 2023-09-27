import React from "react";

const ListTour = ({ data }) => {
  return (
    <div>
      <div className="w-full flex justify-start items-start flex-col ">
        <div className=" w-full  flex justify-center items-center">
          <h2 className="text-4xl text-gray-500 font-medium">Danh sách tour</h2>
        </div>
        <div className="mx-[150px] my-5 grid grid-cols-5 gap-2">
          {data.map((item, index) => (
            <ItemTour
              key={index}
              img={item?.img}
              location={item?.location}
              quantity={item?.quantity}
            ></ItemTour>
          ))}
        </div>
      </div>
    </div>
  );
};

function ItemTour({ img, location, quantity }) {
  return (
    <div className=" relative w-[250px] h-[300px] pr-4 mb-5">
      <div className="w-full  h-full ">
        <img
          className="w-full h-full object-cover rounded-md "
          src={img}
          alt=""
        />
      </div>
      <div className="absolute  left-4 bottom-4 text-white">
        <h2 className="text-xl">{location}</h2>
        <h3>{quantity}</h3>
      </div>
    </div>
  );
}

export default ListTour;
