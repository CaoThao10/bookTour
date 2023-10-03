import React from "react";
import Hearder from "../components/Hearder";
import BlogContent from "../components/BlogContent";
import BlogHearder from "../components/BlogHearder";
import Footer from "../components/Footer";

const data1 = [
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/15.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/16.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/17.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
];
const data2 = [
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/18.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/19.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/20.webp",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
];
const data3 = [
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/21.png",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/22.webp",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/23.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
];
const data4 = [
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/24.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/25.webp",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    link: "/26.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores ut sunt maxime ipsa illo sequi laborum cumque blanditiis enim a laudantium, ipsum, repudiandae sit accusantium iure quidem at similique.",
  },
];

const BlogPage = () => {
  return (
    <div>
      <Hearder></Hearder>
      <BlogHearder></BlogHearder>
      <BlogContent text={"Cẩm nang du lịch"} data={data1}></BlogContent>
      <BlogContent data={data2}></BlogContent>
      <BlogContent text={"Đặc sản miền Tây"} data={data3}></BlogContent>
      <BlogContent data={data4}></BlogContent>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
