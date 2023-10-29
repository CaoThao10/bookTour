import React, { useEffect } from "react";
import Hearder from "../components/Hearder";
import Popular from "../components/Popular";
import Tour from "../components/Tour";
import ListTour from "../components/ListTour";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

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
  // {
  //   img: "/hanoi.jpg",
  //   location: "Ha Noi",
  //   quantity: "3 tour",
  // },
  // {
  //   img: "/hcm.jpg",
  //   location: "Ho Chi Minh",
  //   quantity: "5 tour",
  // },
];

const Home = () => {
  const [tourFeatured, setTourFeatured] = React.useState([]);
  const [tourHot, setTourHot] = React.useState([]);
  const fetchTours = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/v1/tour/all-tour");
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const { data: tours } = useQuery(["tours"], () => fetchTours());
  useEffect(() => {
    if (tours?.length > 0) {
      setTourFeatured(tours.filter((tour) => tour.featured === true));
      setTourHot(tours.filter((tour) => tour.tourHot === true));
    }
  }, [tours]);

  const fetchPost = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/v1/post");
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const { data: posts } = useQuery(["posts"], () => fetchPost());
  return (
    <div>
      <Hearder img={"/bien.jpg"}></Hearder>
      <Popular title={"Tour nổi bật trong tháng"} data={tourFeatured}></Popular>
      {/* <Popular data={dataPopular2}></Popular> */}
      <Tour data={tourHot}></Tour>
      <ListTour data={dataListTour}></ListTour>
      <Blog data={posts?.posts}></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
