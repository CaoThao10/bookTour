import React from "react";
import Footer from "../components/Footer";
import Hearder from "../components/Hearder";

const PricePage = () => {
  return (
    <div>
      <Hearder></Hearder>
      <div className=" bg-[#f9f9f9] py-3 px-[7%]">
        <span>Trang chủ {">"} Bảng giá</span>
      </div>
      <div className="px-[7%] flex justify-center items-center flex-col mt-5 gap-5">
        <h2 className="font-semibold text-[28px] text-[#005294]">Bảng giá</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>MÃ</th>
              <th>LỊCH TRÌNH TOUR</th>
              <th>THỜI GIAN</th>
              <th>LỊCH KHỞI HÀNH</th>
              <th>PHƯƠNG TIỆN</th>
              <th>GIÁ TOUR</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PricePage;
