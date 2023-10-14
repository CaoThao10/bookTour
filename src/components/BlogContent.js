import React from "react";

const BlogContent = ({ data, text }) => {
  //   console.log(data);
  return (
    <div>
      <div className="mt-10">
        <h2 className="flex items-center justify-center text-3xl font-medium text-[#0052b0] text-center w-full">
          {text}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-2 mx-40 mt-6">
        {data.map((item, index) => (
          <BlogItem
            key={index}
            title={item?.title}
            link={item?.link}
            detail={item?.detail}
          ></BlogItem>
        ))}
      </div>
    </div>
  );
};

function BlogItem({ title, link, detail }) {
  return (
    <div className="w-[380px] h-[360px] ">
      <div className="w-[380px] h-[190px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={link}
          alt=""
        />
      </div>
      <div className="flex items-center flex-col mt-3">
        <h2 className="text-xl text-xl font-medium">{title}</h2>
        <h2 className="border-b-2 w-[90px] border-black"></h2>
        <h3 className=" h-full text-base text-[#606060] p-3 overflow-hidden overflow-ellipsis h-[7rem] line-clamp-6 ">
          {detail}
        </h3>
        <button className="border rounded-2xl px-2 py-1 hover:bg-cyan-500">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default BlogContent;
