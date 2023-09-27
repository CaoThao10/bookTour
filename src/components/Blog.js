import React from "react";

const Blog = ({ data }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full flex justify-start items-start flex-col">
          <div className=" w-full  flex justify-center items-center">
            <h2 className="text-4xl text-gray-500 font-medium">Blog</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-5">
          {data.map((item, index) => (
            <ItemBlog
              key={index}
              img={item?.img}
              title={item?.title}
              note={item?.note}
            ></ItemBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

function ItemBlog({ img, title, note }) {
  return (
    <div className="w-[625px] h-[425px]  relative">
      <div className=" w-full h-full ">
        <img
          className="w-[100%] h-full object-cover rounded-md"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute bottom-2 text-white px-3">
        <h2 className="text-2xl">{title}</h2>
        <h3>{note}</h3>
        <a className="flex flex-col items-center justify-center mt-1" href="/">
          <button className="rounded-xl border hover:border-transparent px-2 py-1 hover:bg-yellow-400">
            Xem thêm
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
