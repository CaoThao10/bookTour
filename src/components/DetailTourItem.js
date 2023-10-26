import React from "react";
import { NavLink } from "react-router-dom";

const DetailTourItem = () => {
  return (
    <div>
      <div>
        <div className="flex items-center text-center  bg-gray-100 p-2 pl-10 cursor-pointer mt-0">
          <div className="flex items-center text-center">
            <span className="leading-5">
              {" "}
              <svg
                width="8"
                height="15"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <NavLink to="/tour" className="leading-5 px-2">
              Tour
            </NavLink>
          </div>
          <div className="flex items-center text-center">
            <span className="leading-5">
              {" "}
              <svg
                width="8"
                height="15"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <NavLink to="/tour" className="leading-5 px-2">
              Miền tây
            </NavLink>
          </div>
          <div className="flex items-center text-center">
            <span className="leading-5">
              {" "}
              <svg
                width="8"
                height="15"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <NavLink to="/detail" className="leading-5 px-2">
              Tour Miền tây 2 ngày 1 đêm
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mx-[150px] mt-[50px] flex flex-col">
        <span className="text-3xl text-[#005294] font-semibold my-2">
          TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM
        </span>
        <div className=" my-2">
          <span>Giá tour gốc/khách:</span>
          <span>1.550.000VNĐ</span>
        </div>
        <NavLink
          to="/"
          className=" my-2 bg-[#fb752e] w-[120px] text-center text-white text-xl font-semibold p-2 rounded-3xl hover:opacity-70"
        >
          ĐẶT NGAY
        </NavLink>
      </div>
      <div className="mx-[150px] my-[50px]">
        <span className="text-xl text-[#005294] font-semibold">
          Chương trình tour
        </span>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <img src="./tour-can-tho-1-ngay-lich-trinh-tour.jpg" alt="" />
          </div>
          <div className="flex">
            {/* <div className="px-5">
              <div className=" border-4 rounded-full w-[66px] h-[66px] flex items-center justify-center">
                <span className="font-semibold">Ngày 1</span>
              </div>
              <div className="flex items-center h-full ml-[30px]">
                <span className="border-4 w-[4px] h-full"></span>
              </div>
              <div className=" border-4 rounded-full w-[66px] h-[66px] flex items-center justify-center">
                <span className="font-semibold">Ngày 1</span>
              </div>
            </div> */}
            <div className="flex flex-col">
              <span className="font-xl font-bold leading-relaxed">
                TP. HCM - MỸ THO - BẾN TRE
              </span>
              <span className="font-xl font-bold leading-relaxed">
                Buổi sáng:
              </span>
              <span className="leading-relaxed text-base">
                - Xe tour và hướng dẫn viên sẽ đón quý khách tại văn phòng công
                ty và khởi hành đi <strong> thành phố Mỹ Tho</strong> , bắt đầu
                hành trình tour miền tây 2 ngày 1 đêm.
              </span>
              <span className="leading-relaxed text-base">
                - Đoàn sẽ dừng chân dùng bữa sáng (chi phí tự túc) tại trạm dừng
                chân <strong>Mekong Rest Stop</strong> - trạm dừng chân nổi
                tiếng với nhiều tiểu cảnh đẹp mô phỏng miền Tây.
              </span>
              <span className="leading-relaxed text-base">
                - Tiếp tục hành trình, đoàn viếng thăm
                <strong>chùa Vĩnh Tràng</strong> - di tích lịch sử - văn hóa cấp
                quốc gia, đồng thời đây cũng là điểm du lịch tâm linh nổi tiếng
                ở miền Tây.
              </span>
              <span className="leading-relaxed text-base">
                - Sau đó, đoàn di chuyển đến bến tàu, xuôi theo dòng sông Tiền
                ngắm cảnh <strong>cù lao Tứ Linh</strong> từ xa và tham quan
                <strong>Cồn Lân - Cồn Phụng.</strong>
              </span>

              <span className="leading-relaxed text-base pl-6">
                + Dùng trà mật ong hoa nhãn tại trại nuôi ong của người dân địa
                phương và chụp ảnh cùng tổ ong.
              </span>
              <span className="leading-relaxed text-base pl-6">
                + Tham quan xưởng sản xuất kẹo dừa, tìm hiểu cách làm kẹo dừa và
                dùng thử kẹo dừa mới ra lò.
              </span>
              <span className="leading-relaxed text-base pl-6">
                + Thưởng thức trái cây theo mùa và lắng nghe giai điệu đờn ca
                tài tử lãng mạn.
              </span>
              <span className="leading-relaxed text-base pl-6">
                + Đi dạo bằng xe ngựa quang đường làng.
              </span>
              <span className="leading-relaxed text-base font-bold">
                Buổi trưa:
              </span>
              <span className="leading-relaxed text-base">
                - Đoàn dùng bữa trưa tại khu du lịch sinh thái
                <strong>Cồn Phụng.</strong>
              </span>
              <span className="leading-relaxed text-base">
                - Sau bữa trưa, đoàn có thời gian tự do tham quan{" "}
                <strong> Cồn Phụng</strong> với những hoạt động giải trí Buổi
                chiều:
              </span>
              <span className="leading-relaxed text-base">
                - Đoàn quay về bến tàu ban đầu và khởi hành đi{" "}
                <strong> Cần Thơ</strong>, tiếp tục hành trình tour miền tây 2
                ngày 1 đêm.
              </span>
              <span className="leading-relaxed text-base">
                - Đến thành phố <strong> Cần Thơ</strong>, đoàn nhận phòng khách
                sạn, nghỉ ngơi và dùng bữa tối trên du thuyền.
              </span>
              <span className="leading-relaxed text-base">
                - Sau bữa tối, đoàn có thời gian tự do khám phá thành phố{" "}
                <strong> Cần Thơ</strong> về đêm với những địa chỉ vui chơi giải
                trí nổi bật.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTourItem;
