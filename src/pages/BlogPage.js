import React from "react";
import Hearder from "../components/Hearder";
import BlogContent from "../components/BlogContent";
import BlogHearder from "../components/BlogHearder";
import Footer from "../components/Footer";

const data1 = [
  {
    title: "Chèo xuồng ba lá - tham quan vườn trái cây ở miền Tây có gì vui?",
    link: "/15.jpg",
    detail:
      "Chèo xuồng ba lá tham quan vườn trái cây là hoạt động được rất nhiều du khách ưa thích khi có dịp du lịch miền Tây. Nếu chưa một lần trải nghiệm thì hãy cùng Tour Bốn Phương tìm hiểu kỹ hơn về chuyến du lịch “chèo xuồng ba lá - tham quan vườn trái cây” tại các điểm ở miền Tây bạn nhé!",
  },
  {
    title:
      "Đờn ca tài tử Nam Bộ - Nét văn hóa đặc trưng của người dân vùng sông nước",
    link: "/16.jpg",
    detail:
      "Đờn ca tài tử Nam Bộ từ lâu đã trở thành một bộ môn nghệ thuật nổi tiếng khắp mọi nơi. Nhiều du khách về miền Tây nếu lỡ một lần nghe qua từng lời ca tiếng hát đều bị mê hoặc đến khó quên.  Hãy cùng Tour Bốn Phương tìm hiểu ngay trong bài viết sau bạn nhé!",
  },
  {
    title:
      "Nhà thờ Cha Diệp Bạc Liêu - Địa điểm du lịch tâm linh nổi tiếng ở miền Tây",
    link: "/17.jpg",
    detail:
      "Nhà thờ Cha Diệp là nơi lưu dấu những câu chuyện về một thời chiến tranh đã đi qua gắn liền với Cha Diệp. Nơi đây không chỉ là chốn về của các tín đồ Công giáo . Hãy cùng Tour Bốn Phương chiêm ngưỡng vẻ đẹp đồ sộ tại nhà thờ Tắc Sậy bạn nhé!",
  },
];
const data2 = [
  {
    title: "Những điều lý thú cần khám phá tại Rừng Tràm Trà sư",
    link: "/18.jpg",
    detail:
      "Bạn đã từng xuôi dòng sông nước Cửu Long để khám phá thiên nhiên hoang dã hay chưa? Đặc biệt là ở Rừng Tràm Trà Sư,bình dị giữa đời thường nhưng lại không kém phần đặc sắc với những điều thú vị cần khám phá. Hãy cùng Tour Bốn Phương tìm về nơi thanh bình này nhé!",
  },
  {
    title: "Tát mương bắt cá - Thú vui của người nông dân miền Tây",
    link: "/19.jpg",
    detail:
      "Miền tây nổi tiếng gạo trắng nước trong, cây trái sum suê, được thiên nhiên ban tặng nhiều sản vật quý. Trong đó, thích thú nhất đó là hoạt động tát mương bắt cá bởi cảm giác tự tay bắt được một cá to quả thật sướng đến mê ly. Hãy cùng Tour Bốn Phương khám phá điều thú vui này bạn nhé!",
  },
  {
    title: "Những Địa Điểm Nổi Tiếng Ở TPHCM Nhất Định Phải Đến Khi Đi Du Lịch",
    link: "/20.webp",
    detail:
      "Vậy khi đến với Thành Phố Hồ Chí Minh xinh đẹp thì chơi gì, đi đâu? Nếu đây cũng là điều mà bạn đang thắc mắc hãy cùng Tour Bốn Phương điểm danh top 10 những địa điểm nổi tiếng nhất ở TPHCM.",
  },
];
const data3 = [
  {
    title: "Chuột đồng quay lu món ngon miền Tây Nam Bộ",
    link: "/21.png",
    detail:
      "Đồng Tháp tại khu vực Gáo Giồng nơi có rất nhiều cây tràm, trúc và đây cũng là nơi trú ngụ của chuột đồng,  cũng chính vì vậy mà người dân địa phương nơi đây còn gọi chuột là “sóc tràm”. Chuột đồng nơi đây rất nổi tiếng bởi chúng chế biến được rất nhiều món ngon, đặc biệt là món chuột đồng quay lu. Hãy cùng với Tour Bốn Phương về miền miệt thứ và khám phá nét ẩm thực vô cùng độc đáo với món chuột đồng quay lu này nhé!",
  },
  {
    title: "Các loại mắm thơm ngon nức tiếng ở miền Tây",
    link: "/22.webp",
    detail:
      "Thiên nhiên rất thiện đãi cho vùng đất miền Tây nguồn tài nguyên cá vô tận, đặc biệt là vào mùa nước nổi. Với tính linh hoạt của bà con nơi đây, họ đã tạo ra những loại mắm mang đặc trưng riêng biệt. Đến nay, các loại mắm này đã trở nên phổ biến và được bày bán rộng rãi trên thị trường. Cùng Tour Bốn Phương điểm danh những loại mắm ăn vào là ngất ngây tại miền Tây. ",
  },
  {
    title: "Các loại trái cây theo mùa ở miền Tây ngon bổ rẻ",
    link: "/23.jpg",
    detail:
      "Khi nhắc đến miền Tây thì nhiều người không khỏi xuýt xoa trước những vườn cây ăn trái sum suê, trĩu quả. Mùa nào trái nấy đều không làm cho du khách thất vọng. Nhưng để đến đúng dịp loại trái mà mình thích thì các bạn phải tìm hiểu các loại trái cây theo mùa ở miền Tây. Trong đó, có những loại nức tiếng với hương vị cây nhà lá vườn mà bài viết sau sẽ gửi đến bạn ngay.",
  },
];
const data4 = [
  {
    title: "Khám phá đặc sản nổi tiếng cổ hủ dừa và đuông dừa ở miền Tây",
    link: "/24.jpg",
    detail:
      "Những ai ở miền Tây thì đã quá quen với cổ hủ dừa – đuông dừa nhưng đối với những ai ở xa thì có thể chưa từng thưởng thức qua món ăn này. Tuy nhiên, một khi bạn đã ăn thì khó mà quên đi cái vị ngon béo lạ lẫm. Cùng dõi theo Tour Bốn Phương để khám phá món ăn đầy thú vị này bạn nhé!",
  },
  {
    title: "List 10 Món Ăn Đặc Sản Cần Thơ Mà Bạn Nên Nếm Thử ",
    link: "/25.webp",
    detail:
      "Cần Thơ được mệnh danh là đất Tây Đô( kinh đô của miền Tây), Sau đây Tour Bốn Phương xin gửi đến bạn list 10 món ăn đặc sản cùng với các địa điểm ăn uống tại Cần Thơ.",
  },
  {
    title: "Những Vùng Đất Nổi Tiếng Về Ẩm Thực Ở Miền Tây",
    link: "/26.jpg",
    detail:
      "Miền Tây Việt Nam nổi tiếng với thiên nhiên hài hoà là nơi có nền ẩm thực đa dạng, phong phú. Nếu có cơ hội đến đây, bạn không nên bỏ qua những vùng đất nổi tiếng về ẩm thực Cần Thơ – một trong những nơi mang đậm phong vị của người miền Tây chân chất.",
  },
];

const BlogPage = () => {
  return (
    <div>
      <Hearder></Hearder>
      <BlogHearder title={"Blog"}></BlogHearder>
      <BlogContent text={"Cẩm nang du lịch"} data={data1}></BlogContent>
      <BlogContent data={data2}></BlogContent>
      <BlogContent text={"Đặc sản Việt Nam"} data={data3}></BlogContent>
      <BlogContent data={data4}></BlogContent>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
