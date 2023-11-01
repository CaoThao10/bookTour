import React from "react";
import Hearder from "../components/Hearder";
import TourDetail from "../components/TourDetail";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const dataTour = [
  {
    img: "/hanoi.jpg",
    location: "Ha Noi",
    cost: "3.000.000",
    sales: "1.500.00",
  },
  {
    img: "/hcm.jpg",
    location: "Ho Chi Minh",
    cost: "3.000.000",
    sales: "1.500.00",
  },
  {
    img: "/dalat.jpg",
    location: "Da Lat",
    cost: "3.000.000",
    sales: "1.500.00",
  },
  {
    img: "/hanoi.jpg",
    location: "Ha Noi",
    cost: "3.000.000",
    sales: "1.500.00",
  },
];

const TourPage = () => {
  const fetchTours = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/tour/all-tour`
      );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const { data: tours } = useQuery(["tours"], () => fetchTours());
  return (
    <div>
      <Hearder></Hearder>
      <TourDetail data={tours}></TourDetail>
      <Footer></Footer>
    </div>
  );
};

export default TourPage;
