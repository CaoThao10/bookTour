import React from "react";
import Hearder from "../components/Hearder";
import Popular from "../components/Popular";
import Tour from "../components/Tour";
import ListTour from "../components/ListTour";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const dataPopular1 = [
  {
    img: "/3.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },

  {
    img: "/4.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },

  {
    img: "/5.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },
];
const dataPopular2 = [
  {
    img: "/6.jpeg",
    title: "Lorem, ipsum dolor.",
    price: "1.000.000",
    link: "/",
  },

  {
    img: "/7.jpg",
    title: "Lorem ipsum dolor sit.",
    price: "1.000.000",
    link: "/",
  },

  {
    img: "/8.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },
];

const dataListTour = [
  {
    img: "/hanoi.jpg",
    location: "Ha Noi",
    quantity: "3 tour",
  },
  {
    img: "/hcm.jpg",
    location: "Ho Chi Minh",
    quantity: "5 tour",
  },
  {
    img: "/dalat.jpg",
    location: "Da Lat",
    quantity: "5 tour",
  },
  {
    img: "/hanoi.jpg",
    location: "Ha Noi",
    quantity: "3 tour",
  },
  {
    img: "/hcm.jpg",
    location: "Ho Chi Minh",
    quantity: "5 tour",
  },
  {
    img: "/hanoi.jpg",
    location: "Ha Noi",
    quantity: "3 tour",
  },
  {
    img: "/hcm.jpg",
    location: "Ho Chi Minh",
    quantity: "5 tour",
  },
];

const dataListBlog = [
  {
    img: "./mientay1.png",
    title: "Cẩm nang du lịch",
    note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ipsum aut libero optio. Amet laudantium, qui minima nobis nostrum sunt accusamus mollitia vel aperiam rem. Iste optio voluptatem earum ea.",
  },
  {
    img: "./mientay.jpg",
    title: "Cẩm nang du lịch",
    note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ipsum aut libero optio. Amet laudantium, qui minima nobis nostrum sunt accusamus mollitia vel aperiam rem. Iste optio voluptatem earum ea.",
  },
];

const Home = () => {
  return (
    <div>
      <Hearder img={"/2.jpg"}></Hearder>
      <Popular title={"Tour nổi bật trong tháng"} data={dataPopular1}></Popular>
      <Popular data={dataPopular2}></Popular>
      <Tour></Tour>
      <ListTour data={dataListTour}></ListTour>
      <Blog data={dataListBlog}></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
