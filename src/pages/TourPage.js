import React from "react";
import Hearder from "../components/Hearder";
import TourDetail from "../components/TourDetail";
import Footer from "../components/Footer";

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
  return (
    <div>
      <Hearder></Hearder>
      <TourDetail data={dataTour}></TourDetail>
      <Footer></Footer>
    </div>
  );
};

export default TourPage;
