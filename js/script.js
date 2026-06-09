// ==========================================
// 1. DANH SÁCH DỮ LIỆU SẢN PHẨM PANASONIC LUMIX
// ==========================================
const productlist = [

  {
    id: 1,
    name: "Panasonic Lumix S5 MARK I",
    price: "20.000.000 VNĐ",
    oldPrice: "26.000.000 VNĐ",
    image: "../assets/images/lumixs5.jpg",
    productLink: "chi-tiet.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S5 là chiếc máy ảnh mirrorless full-frame nhỏ gọn và đa năng, được thiết kế dành cho các nhiếp ảnh gia, nhà sáng tạo nội dung và nhà làm phim muốn sở hữu hiệu năng mạnh mẽ trong một thân máy linh hoạt. Trang bị cảm biến CMOS Full-frame 24.2MP cùng bộ xử lý Venus Engine tiên tiến, máy mang lại chất lượng hình ảnh sắc nét, màu sắc chân thực và khả năng kiểm soát nhiễu ấn tượng trong điều kiện thiếu sáng. Hệ thống chống rung 5 trục Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ảnh và quay video cầm tay. Lumix S5 hỗ trợ quay video 4K 10-bit chất lượng cao với nhiều tùy chọn cấu hình màu chuyên nghiệp như V-Log, đáp ứng tốt nhu cầu hậu kỳ và sản xuất nội dung chuyên nghiệp. Máy sở hữu thân hình nhỏ gọn hơn đáng kể so với các dòng full-frame truyền thống nhưng vẫn duy trì độ bền cao nhờ thiết kế chống bụi và chống ẩm. Màn hình xoay lật cảm ứng cùng kính ngắm điện tử OLED sắc nét giúp người dùng dễ dàng sáng tạo trong nhiều góc chụp khác nhau. Với sự cân bằng hoàn hảo giữa chất lượng hình ảnh, khả năng quay phim chuyên nghiệp, kích thước gọn nhẹ và mức giá hấp dẫn, Panasonic Lumix S5 là lựa chọn lý tưởng cho những người muốn bước vào hệ sinh thái full-frame của Lumix."
  },
  {
    id: 2,
    name: "Panasonic Lumix S5 MARK II",
    price: "44.490.000 VNĐ",
    oldPrice: "46.490.000 VNĐ",
    image: "../assets/images/lumixs52.jpg",
    productLink: "chi-tiet.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S5 Mark II là chiếc máy ảnh mirrorless full-frame thế hệ mới được phát triển dành cho các nhiếp ảnh gia, nhà sáng tạo nội dung và nhà làm phim chuyên nghiệp. Trang bị cảm biến CMOS Full-frame 24.2MP cùng bộ xử lý hình ảnh tiên tiến, máy mang lại chất lượng ảnh sắc nét, màu sắc trung thực và khả năng hoạt động ổn định trong nhiều điều kiện ánh sáng khác nhau. Đây cũng là mẫu Lumix đầu tiên được trang bị hệ thống lấy nét theo pha Phase Hybrid AF, giúp cải thiện đáng kể tốc độ và độ chính xác khi theo dõi chủ thể, khắc phục hoàn toàn những hạn chế của công nghệ lấy nét tương phản trên các thế hệ trước. Công nghệ chống rung Active I.S. kết hợp Dual I.S. 2 mang đến khả năng quay video cầm tay cực kỳ ổn định, phù hợp cho nhu cầu sản xuất nội dung hiện đại. Lumix S5 Mark II hỗ trợ quay video 6K, ghi hình 10-bit 4:2:2 và tích hợp V-Log, đáp ứng tốt các yêu cầu hậu kỳ chuyên nghiệp. Thân máy được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm cùng hệ thống tản nhiệt chủ động cho phép ghi hình liên tục trong thời gian dài mà không lo quá nhiệt. Với sự kết hợp giữa chất lượng hình ảnh vượt trội, khả năng lấy nét hiện đại, hiệu năng quay phim mạnh mẽ và độ bền cao, Panasonic Lumix S5 Mark II là một trong những chiếc máy ảnh full-frame đa năng và đáng giá nhất hiện nay."
  },
  {
    id: 3,
    name: "Panasonic Lumix S5 Mark II X",
    price: "51.490.000 VNĐ",
    oldPrice: "54.490.000 VNĐ",
    image: "../assets/images/lumixs52x.jpg",
    productLink: "chi-tiet.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S5 Mark II X là chiếc máy ảnh mirrorless full-frame chuyên nghiệp được phát triển dành riêng cho các nhà làm phim, nhà sáng tạo nội dung và những người yêu cầu khả năng quay video ở mức cao nhất. Trang bị cảm biến CMOS Full-frame 24.2MP cùng bộ xử lý hình ảnh thế hệ mới, máy mang lại chất lượng hình ảnh sắc nét, màu sắc chính xác và hiệu suất hoạt động mạnh mẽ trong mọi điều kiện tác nghiệp. Hệ thống lấy nét theo pha Phase Hybrid AF giúp nhận diện và theo dõi chủ thể nhanh chóng, chính xác và ổn định khi quay video hoặc chụp ảnh liên tiếp. Công nghệ chống rung Active I.S. kết hợp Dual I.S. 2 hỗ trợ ghi hình cầm tay mượt mà, giảm thiểu rung lắc hiệu quả. Lumix S5 Mark II X nổi bật với khả năng quay video 6K chất lượng cao, hỗ trợ Apple ProRes, RAW Video Output, All-Intra Recording và ghi hình trực tiếp vào ổ cứng SSD thông qua cổng USB-C. Máy còn hỗ trợ truyền phát trực tiếp qua mạng IP và kết nối USB, đáp ứng nhu cầu sản xuất nội dung chuyên nghiệp hiện đại. Thiết kế ngoại thất màu đen nhám đặc trưng mang đến vẻ ngoài mạnh mẽ và chuyên nghiệp hơn so với phiên bản S5 Mark II tiêu chuẩn. Với hiệu năng quay phim hàng đầu, hệ thống lấy nét hiện đại, khả năng ghi hình linh hoạt cùng độ bền cao, Panasonic Lumix S5 Mark II X là lựa chọn lý tưởng cho những nhà sáng tạo muốn sở hữu một chiếc máy ảnh full-frame chuyên nghiệp phục vụ cho các dự án sản xuất nội dung và điện ảnh chất lượng cao."
  },
  {
    id: 4,
    name: "Panasonic Lumix S1",
    price: "49.990.000 VNĐ",
    oldPrice: "58.000.000 VNĐ",
    image: "../assets/images/S1.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S1 là chiếc máy ảnh mirrorless full-frame đa năng được thiết kế dành cho các nhiếp ảnh gia và nhà sáng tạo nội dung chuyên nghiệp. Trang bị cảm biến CMOS Full-frame 24.2MP kết hợp bộ xử lý hình ảnh Venus Engine mạnh mẽ, máy mang lại chất lượng ảnh sắc nét, màu sắc trung thực và dải tương phản động rộng trong nhiều điều kiện ánh sáng khác nhau. Hệ thống chống rung 5 trục trong thân máy kết hợp công nghệ Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ảnh và quay video cầm tay. Lumix S1 hỗ trợ quay video 4K chất lượng cao, khả năng ghi hình 10-bit chuyên nghiệp cùng nhiều tùy chọn cấu hình màu phục vụ nhu cầu hậu kỳ. Thân máy được chế tạo từ hợp kim magie chắc chắn, có khả năng chống bụi, chống ẩm và hoạt động ổn định trong môi trường khắc nghiệt. Kính ngắm điện tử OLED độ phân giải cao cùng màn hình xoay lật linh hoạt mang lại trải nghiệm sử dụng thoải mái và chính xác. Với hiệu năng mạnh mẽ, độ bền cao và khả năng cân bằng xuất sắc giữa nhiếp ảnh và quay phim, Panasonic Lumix S1 là lựa chọn lý tưởng cho những người dùng đang tìm kiếm một chiếc máy ảnh full-frame chuyên nghiệp và đáng tin cậy."
  },
  {
    id: 5,
    name: "Panasonic Lumix S1H",
    price: "117.000.000 VNĐ",
    oldPrice: "130.000.000 VNĐ",
    image: "../assets/images/S1H.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S1H là chiếc máy ảnh mirrorless full-frame được thiết kế chuyên biệt cho lĩnh vực làm phim chuyên nghiệp, mang đến khả năng quay video vượt trội cùng chất lượng hình ảnh điện ảnh ấn tượng. Trang bị cảm biến CMOS Full-frame 24.2MP kết hợp bộ xử lý Venus Engine mạnh mẽ, máy cung cấp dải tương phản rộng, khả năng tái tạo màu sắc chính xác và hiệu suất hoạt động ổn định trong nhiều điều kiện ánh sáng khác nhau. Lumix S1H là mẫu máy ảnh đầu tiên trên thế giới đạt chứng nhận của Netflix dành cho sản xuất nội dung gốc, khẳng định năng lực của máy trong môi trường làm việc chuyên nghiệp. Máy hỗ trợ quay video 6K 24fps, 5.9K 30fps và 4K 60fps 10-bit với V-Log tích hợp sẵn, mang lại khả năng hậu kỳ linh hoạt và chất lượng hình ảnh điện ảnh cao cấp. Hệ thống tản nhiệt chủ động bằng quạt giúp ghi hình liên tục trong thời gian dài mà không gặp giới hạn nhiệt độ. Công nghệ chống rung Dual I.S. 2 cùng thân máy hợp kim magie chống bụi, chống ẩm và chống đóng băng giúp S1H hoạt động bền bỉ trong những môi trường khắc nghiệt. Với khả năng quay phim hàng đầu, độ tin cậy cao và chất lượng hình ảnh chuyên nghiệp, Panasonic Lumix S1H là lựa chọn lý tưởng cho các nhà làm phim, nhà sản xuất nội dung và những dự án điện ảnh đòi hỏi tiêu chuẩn khắt khe."
  },
  {
    id: 6,
    name: "Panasonic Lumix S1R",
    price: "89.990.000 VNĐ",
    oldPrice: "99.000.000 VNĐ",
    image: "../assets/images/S1R.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S1R là chiếc máy ảnh mirrorless full-frame cao cấp được thiết kế dành cho các nhiếp ảnh gia chuyên nghiệp yêu cầu độ phân giải cực cao và chất lượng hình ảnh hàng đầu. Trang bị cảm biến CMOS Full-frame 47.3MP cùng bộ xử lý Venus Engine mạnh mẽ, máy mang lại độ chi tiết vượt trội, màu sắc chính xác và dải tương phản rộng, đáp ứng xuất sắc các nhu cầu chụp ảnh phong cảnh, chân dung, quảng cáo và thương mại. Hệ thống chống rung 5 trục trong thân máy kết hợp công nghệ Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ảnh ở tốc độ màn trập thấp. Lumix S1R còn sở hữu chế độ High Resolution Mode cho phép tạo ra những bức ảnh có độ phân giải siêu cao lên đến 187MP, mang lại khả năng tái tạo chi tiết ấn tượng cho các tác vụ chuyên nghiệp. Thân máy được chế tạo từ hợp kim magie chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Kính ngắm điện tử OLED độ phân giải cực cao cùng màn hình cảm ứng linh hoạt giúp nâng cao trải nghiệm sử dụng và khả năng kiểm soát hình ảnh. Bên cạnh khả năng chụp ảnh xuất sắc, máy vẫn hỗ trợ quay video 4K chất lượng cao, đáp ứng nhu cầu sáng tạo đa dạng. Với độ phân giải hàng đầu, chất lượng hoàn thiện cao cấp và hiệu năng mạnh mẽ, Panasonic Lumix S1R là lựa chọn lý tưởng cho những nhiếp ảnh gia chuyên nghiệp đang tìm kiếm một chiếc máy ảnh full-frame có khả năng tái tạo chi tiết ở mức cao nhất."
  },
  {
    id: 7,
    name: "Panasonic Lumix S 24-105mm f4 Macro O.I.S",
    price: "23.900.000 VNĐ",
    oldPrice: "28.000.000 VNĐ",
    image: "../assets/images/Lumix24105.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S 24-105mm F4 Macro O.I.S là ống kính zoom đa dụng cao cấp dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để đáp ứng nhiều nhu cầu từ chụp phong cảnh, chân dung, du lịch đến quay video chuyên nghiệp. Với dải tiêu cự linh hoạt 24-105mm cùng khẩu độ cố định f/4 trên toàn dải zoom, ống kính mang lại chất lượng hình ảnh ổn định và khả năng thích ứng cao trong nhiều tình huống chụp khác nhau. Hệ thống quang học tiên tiến bao gồm các thấu kính phi cầu và thấu kính ED giúp giảm quang sai, tăng độ sắc nét và tái tạo màu sắc trung thực trên toàn khung hình. Điểm nổi bật của ống kính là khả năng chụp macro với độ phóng đại tối đa 0.5x, cho phép ghi lại các chi tiết cận cảnh ấn tượng mà không cần sử dụng ống kính chuyên dụng riêng. Công nghệ chống rung quang học O.I.S kết hợp cùng hệ thống chống rung trong thân máy Lumix giúp giảm rung hiệu quả khi chụp ảnh và quay video cầm tay. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và êm ái, phù hợp cho cả nhiếp ảnh lẫn quay phim. Thân ống kính được thiết kế chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với sự kết hợp giữa chất lượng quang học cao, khả năng macro linh hoạt và dải tiêu cự đa dụng, Panasonic Lumix S 24-105mm F4 Macro O.I.S là một trong những ống kính toàn diện và đáng sở hữu nhất dành cho người dùng hệ máy Lumix S."
  },
  {
    id: 8,
    name: "Panasonic Lumix S 14-28mm f4-5.6 Macro",
    price: "19.300.000 VNĐ",
    oldPrice: "23.500.000 VNĐ",
    image: "../assets/images/lumixs1428.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S 14-28mm F4-5.6 Macro là ống kính zoom góc siêu rộng nhỏ gọn dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để phục vụ nhu cầu chụp phong cảnh, kiến trúc, du lịch và quay video sáng tạo. Với dải tiêu cự từ 14mm đến 28mm, ống kính mang đến góc nhìn rộng ấn tượng, giúp người dùng dễ dàng ghi lại những khung cảnh hùng vĩ hoặc không gian nội thất rộng lớn. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính đặc biệt giúp giảm méo hình, quang sai màu và duy trì độ sắc nét cao trên toàn khung hình. Điểm nổi bật của Lumix S 14-28mm F4-5.6 Macro là khả năng chụp cận cảnh với độ phóng đại tối đa 0.5x ở tiêu cự 28mm, cho phép ghi lại các chi tiết nhỏ một cách ấn tượng mà không cần sử dụng ống kính macro chuyên dụng. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không gây tiếng ồn, rất phù hợp cho nhu cầu quay video. Với trọng lượng nhẹ và kích thước nhỏ gọn, ống kính mang lại sự linh hoạt tối đa khi di chuyển hoặc tác nghiệp ngoài trời. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong nhiều điều kiện thời tiết khác nhau. Nhờ sự kết hợp giữa góc nhìn siêu rộng, khả năng chụp macro linh hoạt và thiết kế cơ động, Panasonic Lumix S 14-28mm F4-5.6 Macro là lựa chọn lý tưởng cho những người dùng muốn sở hữu một ống kính đa năng phục vụ cả nhiếp ảnh và quay phim."
  },

  // --- HỆ M43 (MICRO FOUR THIRDS)  ---
  {
    id: 9,
    name: "Panasonic Lumix DMC-G7",
    price: "7.000.000 VNĐ",
    oldPrice: "11.000.000 VNĐ",
    image: "../assets/images/G7.png", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix DMC-G7 là chiếc máy ảnh mirrorless Micro Four Thirds được thiết kế dành cho người mới bắt đầu và những nhà sáng tạo nội dung muốn tiếp cận nhiếp ảnh một cách dễ dàng với chi phí hợp lý. Trang bị cảm biến Live MOS 16MP cùng bộ xử lý Venus Engine, máy mang lại chất lượng hình ảnh sắc nét, màu sắc sống động và hiệu suất hoạt động ổn định trong nhiều điều kiện chụp khác nhau. Lumix G7 là một trong những mẫu máy tiên phong trong phân khúc hỗ trợ quay video 4K, cho phép ghi hình với độ chi tiết cao và khả năng trích xuất ảnh 8MP trực tiếp từ video thông qua tính năng 4K Photo. Hệ thống lấy nét DFD (Depth From Defocus) giúp tăng tốc độ lấy nét tự động, mang lại khả năng bắt nét nhanh và chính xác khi chụp các chủ thể chuyển động. Kính ngắm điện tử OLED độ phân giải cao cùng màn hình cảm ứng xoay lật hoàn toàn giúp người dùng dễ dàng sáng tạo ở nhiều góc chụp khác nhau. Thiết kế thân máy nhỏ gọn, trọng lượng nhẹ và giao diện điều khiển thân thiện giúp Lumix G7 trở thành người bạn đồng hành lý tưởng trong các chuyến du lịch, học tập và sáng tạo nội dung hàng ngày. Với sự kết hợp giữa khả năng chụp ảnh tốt, quay video 4K và mức giá dễ tiếp cận, Panasonic Lumix DMC-G7 là lựa chọn phù hợp cho những ai muốn bước chân vào thế giới máy ảnh không gương lật."
  },
  {
    id: 10,
    name: "Panasonic Lumix DMC-G8 ",
    price: "9.000.000 VNĐ",
    oldPrice: "15.000.000 VNĐ",
    image: "../assets/images/G8.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix DMC-G8 là chiếc máy ảnh mirrorless Micro Four Thirds đa năng được thiết kế dành cho những người yêu nhiếp ảnh, du lịch và sáng tạo nội dung. Trang bị cảm biến Live MOS 16MP không sử dụng bộ lọc low-pass cùng bộ xử lý Venus Engine, máy mang lại hình ảnh sắc nét, màu sắc trung thực và độ chi tiết cao. Hệ thống chống rung 5 trục trong thân máy kết hợp công nghệ Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ảnh và quay video cầm tay, mang đến những khung hình ổn định hơn trong nhiều điều kiện tác nghiệp khác nhau. Lumix G8 hỗ trợ quay video 4K chất lượng cao cùng tính năng 4K Photo, cho phép người dùng ghi lại những khoảnh khắc chuyển động nhanh và trích xuất ảnh độ phân giải 8MP trực tiếp từ video. Hệ thống lấy nét DFD với tốc độ phản hồi nhanh giúp bắt nét chính xác ngay cả với các chủ thể đang di chuyển. Thân máy được hoàn thiện chắc chắn với khả năng chống bụi và chống ẩm, giúp hoạt động ổn định trong những điều kiện thời tiết không thuận lợi. Màn hình cảm ứng xoay lật linh hoạt kết hợp kính ngắm điện tử OLED sắc nét mang đến trải nghiệm sử dụng thuận tiện cho cả chụp ảnh và quay phim. Với sự cân bằng giữa hiệu năng, độ bền và tính linh hoạt, Panasonic Lumix DMC-G8 là lựa chọn lý tưởng cho những người muốn sở hữu một chiếc máy ảnh nhỏ gọn nhưng vẫn đáp ứng tốt các nhu cầu sáng tạo nội dung hiện đại."
  },
  {
    id: 11,
    name: "Panasonic Lumix DMC-G9",
    price: "15.000.000 VNĐ",
    oldPrice: "21.000.000 VNĐ",
    image: "../assets/images/G9.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix DMC-G9 là chiếc máy ảnh mirrorless Micro Four Thirds cao cấp được phát triển dành cho các nhiếp ảnh gia chuyên chụp thể thao, động vật hoang dã và những chủ thể chuyển động nhanh. Trang bị cảm biến Live MOS 20.3MP kết hợp bộ xử lý Venus Engine mạnh mẽ, máy mang lại chất lượng hình ảnh sắc nét, màu sắc chân thực và tốc độ xử lý vượt trội. Hệ thống chống rung Dual I.S. 2 lên đến 6.5 stop giúp giảm rung hiệu quả khi chụp ảnh cầm tay với tốc độ màn trập thấp hoặc sử dụng ống kính tele. Lumix G9 nổi bật với khả năng chụp liên tiếp cực nhanh lên đến 20 hình/giây với lấy nét liên tục và 60 hình/giây khi khóa nét, giúp ghi lại chính xác những khoảnh khắc quyết định. Hệ thống lấy nét DFD 225 điểm có tốc độ phản hồi chỉ 0.04 giây, mang lại khả năng theo dõi chủ thể nhanh chóng và chính xác. Máy còn hỗ trợ quay video 4K 60fps chất lượng cao cùng chế độ High Resolution Mode tạo ra hình ảnh lên đến 80MP nhờ công nghệ dịch chuyển cảm biến. Thân máy được chế tạo từ hợp kim magie chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, phù hợp cho các điều kiện tác nghiệp khắc nghiệt. Với hiệu năng mạnh mẽ, tốc độ vượt trội và độ bền cao, Panasonic Lumix DMC-G9 là một trong những chiếc máy ảnh Micro Four Thirds toàn diện và đáng giá nhất dành cho những người đam mê nhiếp ảnh chuyên nghiệp."
  },
  {
    id: 12,
    name: "Panasonic Lumix DMC-GH5",
    price: "11.500.000 VNĐ",
    oldPrice: "18.000.000 VNĐ",
    image: "../assets/images/Gh5.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix DMC-GH5 là chiếc máy ảnh mirrorless Micro Four Thirds huyền thoại được thiết kế dành cho các nhà làm phim và nhà sáng tạo nội dung chuyên nghiệp. Trang bị cảm biến Live MOS 20.3MP không sử dụng bộ lọc low-pass cùng bộ xử lý Venus Engine mạnh mẽ, máy mang lại hình ảnh sắc nét, màu sắc chính xác và khả năng tái tạo chi tiết ấn tượng. Lumix GH5 nổi tiếng nhờ khả năng quay video vượt trội trong phân khúc với hỗ trợ ghi hình 4K 60fps và 4K 10-bit 4:2:2 nội bộ, mang đến chất lượng hình ảnh chuyên nghiệp phục vụ cho các dự án thương mại, quảng cáo và sản xuất nội dung. Hệ thống chống rung Dual I.S. 2 kết hợp chống rung trong thân máy và chống rung quang học trên ống kính giúp ghi hình cầm tay ổn định hơn, giảm thiểu rung lắc hiệu quả. Hệ thống lấy nét DFD 225 điểm hoạt động nhanh chóng và chính xác trong nhiều điều kiện khác nhau. Máy được trang bị hai khe cắm thẻ SD UHS-II, màn hình cảm ứng xoay lật linh hoạt cùng kính ngắm điện tử OLED độ phân giải cao, đáp ứng tốt nhu cầu tác nghiệp chuyên nghiệp. Thân máy hợp kim magie chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng giúp GH5 hoạt động bền bỉ trong môi trường khắc nghiệt. Với khả năng quay phim tiên tiến, độ tin cậy cao và hệ sinh thái Micro Four Thirds phong phú, Panasonic Lumix DMC-GH5 vẫn là một trong những lựa chọn được yêu thích nhất đối với các nhà làm phim và nhà sáng tạo nội dung trên toàn thế giới."
  },
  {
    id: 13,
    name: "Panasonic Lumix DMC-GH6",
    price: "25.000.000 VNĐ",
    oldPrice: "35.000.000 VNĐ",
    image: "../assets/images/Gh6.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix DMC-GH6 là chiếc máy ảnh mirrorless Micro Four Thirds cao cấp được phát triển dành cho các nhà làm phim, nhà sáng tạo nội dung và nhiếp ảnh gia chuyên nghiệp yêu cầu hiệu năng quay video hàng đầu. Trang bị cảm biến Live MOS 25.2MP thế hệ mới cùng bộ xử lý Venus Engine mạnh mẽ, máy mang lại chất lượng hình ảnh sắc nét, màu sắc chân thực và dải tương phản rộng. Lumix GH6 nổi bật với khả năng quay video chuyên nghiệp như 5.7K 60fps, 4K 120fps và hỗ trợ ghi hình Apple ProRes trực tiếp trong máy, đáp ứng tốt các yêu cầu sản xuất nội dung chất lượng cao. Hệ thống tản nhiệt chủ động bằng quạt cho phép ghi hình liên tục trong thời gian dài mà không bị giới hạn bởi nhiệt độ. Công nghệ chống rung Dual I.S. 2 lên đến 7.5 stop giúp quay video cầm tay ổn định hơn và hỗ trợ chụp ảnh trong điều kiện ánh sáng yếu. Hệ thống lấy nét DFD tốc độ cao cùng khả năng chụp liên tiếp mạnh mẽ giúp máy đáp ứng tốt cả nhu cầu quay phim lẫn nhiếp ảnh. Lumix GH6 còn được trang bị màn hình cảm ứng xoay lật linh hoạt, kính ngắm điện tử độ phân giải cao, khe cắm thẻ CFexpress Type B và SD UHS-II, mang lại khả năng lưu trữ và vận hành chuyên nghiệp. Với hiệu năng video vượt trội, khả năng tản nhiệt hiệu quả và độ bền cao, Panasonic Lumix DMC-GH6 là một trong những chiếc máy ảnh Micro Four Thirds mạnh mẽ nhất dành cho các nhà sáng tạo nội dung hiện đại."
  },
  {
    id: 14,
    name: "Panasonic Lumix DMC-G9 MARK II",
    price: "28.500.000 VNĐ",
    oldPrice: "36.000.000 VNĐ",
    image: "../assets/images/G92.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix G9 Mark II là chiếc máy ảnh mirrorless Micro Four Thirds cao cấp được phát triển dành cho các nhiếp ảnh gia, nhà sáng tạo nội dung và nhà làm phim cần hiệu năng mạnh mẽ trong một thân máy nhỏ gọn. Trang bị cảm biến BSI CMOS 25.2MP thế hệ mới cùng bộ xử lý Venus Engine tiên tiến, máy mang lại chất lượng hình ảnh sắc nét, màu sắc trung thực và khả năng hoạt động ổn định trong nhiều điều kiện ánh sáng khác nhau. Đây là mẫu máy Micro Four Thirds đầu tiên của Lumix được trang bị hệ thống lấy nét theo pha Phase Hybrid AF với 779 điểm lấy nét, giúp cải thiện đáng kể khả năng nhận diện và theo dõi chủ thể. Công nghệ chống rung Dual I.S. 2 lên đến 8 stop mang lại hiệu quả chống rung hàng đầu, hỗ trợ chụp ảnh và quay video cầm tay ổn định hơn. Lumix G9 Mark II còn nổi bật với khả năng chụp liên tiếp lên đến 75 hình/giây, quay video 5.7K 60fps, hỗ trợ V-Log và ghi hình trực tiếp vào ổ SSD qua cổng USB-C. Thân máy được thiết kế chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đáp ứng tốt các điều kiện tác nghiệp chuyên nghiệp. Với sự kết hợp giữa tốc độ vượt trội, khả năng lấy nét hiện đại, hiệu năng video mạnh mẽ và hệ sinh thái ống kính Micro Four Thirds phong phú, Panasonic Lumix G9 Mark II là một trong những chiếc máy ảnh toàn diện và mạnh mẽ nhất trong phân khúc hiện nay."
  },
  {
    id: 15,
    name: "Panasonic Leica 12 60 f2.8-4 O.I.S ",
    price: "21.890.000 VNĐ",
    oldPrice: "25.500.000 VNĐ",
    image: "../assets/images/1260.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "m43",
    desc: "Panasonic Leica DG Vario-Elmarit 12-60mm F2.8-4.0 ASPH. POWER O.I.S là ống kính zoom đa dụng cao cấp dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng quang học hàng đầu. Với dải tiêu cự tương đương 24-120mm trên full-frame, ống kính đáp ứng linh hoạt nhiều thể loại nhiếp ảnh như phong cảnh, chân dung, du lịch, đời thường và quay video. Khẩu độ biến thiên từ f/2.8 đến f/4 mang lại khả năng thu sáng tốt, hỗ trợ chụp trong điều kiện ánh sáng yếu và tạo hiệu ứng xóa phông tự nhiên. Hệ thống quang học tiên tiến bao gồm các thấu kính phi cầu và thấu kính ED giúp giảm quang sai, tăng độ sắc nét và tái tạo màu sắc trung thực trên toàn khung hình. Công nghệ chống rung quang học POWER O.I.S kết hợp với chống rung trong thân máy Lumix thông qua Dual I.S. 2 mang lại khả năng chống rung hiệu quả khi chụp ảnh và quay video cầm tay. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và êm ái, đáp ứng tốt cả nhu cầu nhiếp ảnh lẫn quay phim. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong nhiều điều kiện tác nghiệp khác nhau. Với chất lượng quang học chuẩn Leica, dải tiêu cự linh hoạt và thiết kế bền bỉ, Panasonic Leica DG Vario-Elmarit 12-60mm F2.8-4.0 ASPH. POWER O.I.S là một trong những ống kính đa dụng xuất sắc nhất dành cho người dùng hệ Micro Four Thirds."
  },
  {
    id: 16,
    name: "Panasonic Lumix 12 35 f2.8 O.I.S ",
    price: "25.000.000 VNĐ",
    oldPrice: "29.900.000 VNĐ",
    image: "../assets/images/1235.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "m43",
    desc: "Panasonic Lumix G X Vario 12-35mm F2.8 III ASPH. POWER O.I.S là ống kính zoom tiêu chuẩn cao cấp dành cho hệ máy ảnh Micro Four Thirds, được thiết kế để đáp ứng nhu cầu của các nhiếp ảnh gia và nhà sáng tạo nội dung chuyên nghiệp. Với dải tiêu cự tương đương 24-70mm trên full-frame cùng khẩu độ lớn f/2.8 cố định trên toàn dải zoom, ống kính mang lại khả năng thu sáng ấn tượng, hiệu ứng xóa phông đẹp mắt và hiệu năng ổn định trong nhiều điều kiện chụp khác nhau. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu, UED và UHR giúp giảm quang sai, tăng độ sắc nét và tái tạo màu sắc chính xác trên toàn khung hình. Công nghệ chống rung quang học POWER O.I.S kết hợp với hệ thống chống rung trong thân máy Lumix thông qua Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ảnh và quay video cầm tay. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, rất phù hợp cho nhu cầu quay phim chuyên nghiệp. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong nhiều điều kiện tác nghiệp khác nhau. Với chất lượng quang học xuất sắc, khẩu độ lớn f/2.8 và thiết kế nhỏ gọn đặc trưng của hệ Micro Four Thirds, Panasonic Lumix G X Vario 12-35mm F2.8 III ASPH. POWER O.I.S là lựa chọn lý tưởng cho những người dùng cần một ống kính zoom tiêu chuẩn chuyên nghiệp, linh hoạt và đáng tin cậy."
  },
  {
    id: 17,
    name: "Panasonic Leica 25 f1.4",
    price: "14.990.000 VNĐ",
    oldPrice: "18.000.000 VNĐ",
    image: "../assets/images/25.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "m43",
    desc: "Panasonic Leica DG Summilux 25mm F1.4 II ASPH là ống kính prime tiêu chuẩn cao cấp dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng hình ảnh vượt trội trong một thiết kế nhỏ gọn. Với tiêu cự tương đương 50mm trên full-frame cùng khẩu độ lớn F1.4, ống kính mang đến góc nhìn tự nhiên gần với mắt người, phù hợp cho nhiều thể loại nhiếp ảnh như chân dung, đường phố, đời thường và quay video sáng tạo. Khẩu độ F1.4 giúp thu sáng hiệu quả trong điều kiện thiếu sáng, đồng thời tạo hiệu ứng bokeh mềm mại và tách chủ thể ấn tượng. Hệ thống quang học sử dụng các thấu kính phi cầu chất lượng cao giúp giảm quang sai, tăng độ sắc nét và tái tạo màu sắc trung thực trên toàn khung hình. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và êm ái, đáp ứng tốt cả nhu cầu chụp ảnh lẫn quay phim. Phiên bản II được nâng cấp khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt, mang lại độ bền và độ tin cậy cao hơn cho người dùng chuyên nghiệp. Với chất lượng quang học chuẩn Leica, khẩu độ lớn F1.4 cùng khả năng tái tạo hình ảnh giàu chiều sâu và cảm xúc, Panasonic Leica DG Summilux 25mm F1.4 II ASPH là lựa chọn lý tưởng cho những người yêu thích nhiếp ảnh và sáng tạo nội dung trên hệ Micro Four Thirds."
  },
  {
    id: 18,
    name: "Panasonic Leica 100-400mm f/4.0-6.3",
    price: "35.990.000 VNĐ",
    oldPrice: "42.000.000 VNĐ",
    image: "../assets/images/100400.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "m43",
    desc: "Panasonic Leica DG Vario-Elmar 100-400mm F4-6.3 II ASPH. POWER O.I.S là ống kính tele zoom cao cấp dành cho hệ máy ảnh Micro Four Thirds, được thiết kế cho các nhiếp ảnh gia yêu thích chụp động vật hoang dã, thể thao, hàng không và thiên nhiên. Với dải tiêu cự tương đương 200-800mm trên full-frame, ống kính mang lại khả năng tiếp cận các chủ thể ở khoảng cách rất xa mà vẫn duy trì chất lượng hình ảnh sắc nét và độ chi tiết cao. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính đặc biệt bao gồm thấu kính ED và phi cầu giúp giảm quang sai màu, tăng độ tương phản và duy trì hiệu suất quang học trên toàn dải zoom. Công nghệ chống rung quang học POWER O.I.S kết hợp với hệ thống chống rung trong thân máy thông qua Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ở tiêu cự dài hoặc quay video cầm tay. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và ổn định, hỗ trợ theo dõi các chủ thể chuyển động tốc độ cao. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong những môi trường tác nghiệp khắc nghiệt. Mặc dù sở hữu dải tiêu cự cực lớn, ống kính vẫn duy trì trọng lượng tương đối gọn nhẹ nhờ lợi thế của hệ Micro Four Thirds. Với khả năng zoom vượt trội, chất lượng quang học chuẩn Leica và tính cơ động cao, Panasonic Leica DG Vario-Elmar 100-400mm F4-6.3 II ASPH. POWER O.I.S là lựa chọn lý tưởng cho những nhiếp ảnh gia cần một ống kính siêu tele mạnh mẽ và đáng tin cậy."
  },
  {
    id: 19,
    name: "Panasonic Lumix S1 MARK II E",
    price: "72.000.000 VNĐ",
    oldPrice: "73.000.000 VNĐ",
    image: "../assets/images/S1iie.jpg", 
    productLink: "chi-tiet.html", 
    cat: "camera",system: "fullframe",
    desc: "Panasonic Lumix S1IIE là chiếc máy ảnh mirrorless full-frame được thiết kế dành cho những nhà sáng tạo nội dung, nhiếp ảnh gia và nhà làm phim chuyên nghiệp. Sở hữu cảm biến full-frame kết hợp bộ xử lý hình ảnh thế hệ mới, máy mang lại chất lượng ảnh sắc nét, màu sắc chân thực và khả năng tái tạo chi tiết ấn tượng trong nhiều điều kiện ánh sáng khác nhau. Hệ thống lấy nét tự động thông minh với khả năng nhận diện chủ thể chính xác giúp theo dõi người, động vật và các đối tượng chuyển động một cách hiệu quả. Công nghệ chống rung trong thân máy hỗ trợ chụp ảnh và quay video cầm tay ổn định hơn, giảm thiểu hiện tượng rung lắc. Lumix S1IIE còn nổi bật với khả năng quay video chất lượng cao, đáp ứng nhu cầu sản xuất nội dung từ vlog, quảng cáo đến các dự án điện ảnh chuyên nghiệp. Thiết kế chắc chắn cùng khả năng chống bụi và chống ẩm giúp máy hoạt động bền bỉ trong nhiều môi trường khác nhau. Bên cạnh đó, màn hình linh hoạt, giao diện trực quan và các tùy chọn kết nối hiện đại mang đến trải nghiệm sử dụng thuận tiện và hiệu quả. Với sự kết hợp giữa hiệu năng mạnh mẽ, chất lượng hình ảnh vượt trội và khả năng quay phim chuyên nghiệp, Lumix S1IIE là lựa chọn lý tưởng cho những ai đang tìm kiếm một chiếc máy ảnh đa năng, đáng tin cậy và sẵn sàng đồng hành trong mọi hành trình sáng tạo."
  },
  {
    id: 20,
    name: "Panasonic Lumix S9",
    price: "32.500.000 VNĐ",
    oldPrice: "36.500.000 VNĐ",
    image: "../assets/images/S9.jpg", 
    productLink: "chi-tiet.html", 
    cat: "camera",system: "fullframe",
    desc: "Panasonic Lumix S9 là chiếc máy ảnh mirrorless full-frame nhỏ gọn nhất trong dòng Lumix S, được thiết kế dành riêng cho các nhà sáng tạo nội dung, vlogger và người yêu nhiếp ảnh hiện đại. Trang bị cảm biến CMOS Full-frame 24.2MP cùng bộ xử lý hình ảnh thế hệ mới, Lumix S9 mang lại chất lượng ảnh sắc nét, màu sắc chân thực và khả năng chụp thiếu sáng ấn tượng. Hệ thống lấy nét theo pha Phase Hybrid AF giúp nhận diện và theo dõi chủ thể nhanh chóng, chính xác trong nhiều tình huống khác nhau. Công nghệ chống rung 5 trục Dual I.S.2 kết hợp Active I.S. hỗ trợ quay video cầm tay ổn định, giảm thiểu rung lắc hiệu quả. Máy hỗ trợ quay video 6K Open Gate và 4K chất lượng cao, cho phép linh hoạt cắt khung hình phù hợp với nhiều nền tảng mạng xã hội. Điểm nổi bật của Lumix S9 là tính năng REAL TIME LUT giúp áp dụng màu sắc điện ảnh trực tiếp trên máy mà không cần hậu kỳ phức tạp, đồng thời kết nối nhanh với ứng dụng Lumix Lab để chia sẻ nội dung lên điện thoại chỉ trong vài thao tác. Với thiết kế thời trang, trọng lượng nhẹ cùng hiệu năng mạnh mẽ của một cảm biến full-frame, Panasonic Lumix S9 là lựa chọn lý tưởng cho những người muốn sở hữu chất lượng hình ảnh chuyên nghiệp trong một thân máy nhỏ gọn và linh hoạt."
  },
    {
    id: 21,
    name: "Panasonic Lumix S1 MARK II ",
    price: "83.000.000 VNĐ",
    oldPrice: "87.000.000 VNĐ",
    image: "../assets/images/S1ii.jpg", 
    productLink: "chi-tiet.html", 
    cat: "camera",system: "fullframe",
    desc: "Panasonic Lumix S1II là chiếc máy ảnh mirrorless full-frame cao cấp được phát triển dành cho các nhiếp ảnh gia chuyên nghiệp và nhà sáng tạo nội dung yêu cầu hiệu năng hàng đầu. Sở hữu cảm biến CMOS full-frame thế hệ mới cùng bộ xử lý hình ảnh mạnh mẽ, máy mang lại chất lượng ảnh vượt trội với độ chi tiết cao, dải tương phản rộng và khả năng tái tạo màu sắc chính xác trong nhiều điều kiện ánh sáng khác nhau. Hệ thống lấy nét theo pha Phase Hybrid AF kết hợp công nghệ nhận diện chủ thể bằng AI giúp theo dõi người, động vật và phương tiện một cách nhanh chóng, ổn định và chính xác. Công nghệ chống rung 5 trục trong thân máy hỗ trợ chụp ảnh tốc độ thấp và quay video cầm tay mượt mà hơn. Lumix S1II nổi bật với khả năng quay video chuyên nghiệp, hỗ trợ ghi hình độ phân giải cao, dải tương phản rộng cùng nhiều định dạng màu sắc phục vụ cho quá trình hậu kỳ chuyên sâu. Thân máy được chế tạo từ hợp kim magie chắc chắn, có khả năng chống bụi, chống ẩm và hoạt động ổn định trong môi trường khắc nghiệt. Bên cạnh đó, kính ngắm điện tử độ phân giải cao, màn hình xoay lật linh hoạt và hệ thống kết nối hiện đại giúp tối ưu trải nghiệm sử dụng trong cả nhiếp ảnh lẫn quay phim. Với sự kết hợp giữa hiệu năng mạnh mẽ, độ bền cao và các công nghệ hình ảnh tiên tiến, Panasonic Lumix S1II là lựa chọn lý tưởng cho những người sáng tạo muốn sở hữu một chiếc máy ảnh full-frame chuyên nghiệp đáp ứng tốt mọi nhu cầu tác nghiệp."
  },
 {
    id: 22,
    name: "Panasonic Lumix DMC-GH 7",
    price: "56.000.000 VNĐ",
    oldPrice: "59.000.000 VNĐ",
    image: "../assets/images/Gh7.jpg", 
    productLink: "chi-tiet.html",
    cat: "camera", system: "m43",
    desc: "Panasonic Lumix GH7 là mẫu máy ảnh mirrorless Micro Four Thirds cao cấp được thiết kế dành cho các nhà làm phim, nhà sáng tạo nội dung và nhiếp ảnh gia chuyên nghiệp. Trang bị cảm biến BSI CMOS 25.2MP thế hệ mới cùng bộ xử lý Venus Engine mạnh mẽ, GH7 mang đến chất lượng hình ảnh sắc nét, màu sắc trung thực và hiệu suất hoạt động vượt trội trong nhiều điều kiện tác nghiệp khác nhau. Hệ thống lấy nét theo pha Phase Hybrid AF với khả năng nhận diện chủ thể bằng AI giúp theo dõi người, động vật và phương tiện nhanh chóng, chính xác hơn so với các thế hệ GH trước đây. Công nghệ chống rung Dual I.S. 2 lên đến 7.5 stop hỗ trợ chụp ảnh và quay video cầm tay ổn định, giảm thiểu rung lắc hiệu quả. Lumix GH7 nổi bật với khả năng quay video chuyên nghiệp như 5.7K 60fps, 4K 120fps, Apple ProRes và ghi hình trực tiếp vào ổ SSD thông qua cổng USB-C. Máy còn hỗ trợ ghi hình 32-bit Float Audio khi sử dụng bộ chuyển đổi âm thanh chuyên dụng, giúp nâng cao chất lượng thu âm trong các dự án chuyên nghiệp. Thân máy được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong môi trường khắc nghiệt. Với hiệu năng mạnh mẽ, khả năng quay phim hàng đầu cùng hệ sinh thái ống kính Micro Four Thirds phong phú, Panasonic Lumix GH7 là lựa chọn lý tưởng cho những nhà sáng tạo muốn sở hữu một công cụ sản xuất nội dung chuyên nghiệp, linh hoạt và đáng tin cậy."
  },
  {
    id: 23,
    name: "Super-Vario-Elmarit-SL 14-24 f/2.8 ASPH.",
    price: "65.000.000 VNĐ",
    oldPrice: "67.000.000 VNĐ",
    image: "../assets/images/1424.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Leica Super-Vario-Elmarit-SL 14-24mm f/2.8 ASPH. là ống kính zoom góc siêu rộng cao cấp được phát triển cho hệ máy ảnh full-frame ngàm L, đáp ứng nhu cầu của các nhiếp ảnh gia phong cảnh, kiến trúc, nội thất và quay phim chuyên nghiệp. Với dải tiêu cự 14-24mm kết hợp khẩu độ lớn f/2.8 cố định trên toàn dải zoom, ống kính mang lại khả năng thu sáng xuất sắc, chất lượng hình ảnh vượt trội và hiệu ứng phối cảnh ấn tượng ngay cả trong điều kiện ánh sáng phức tạp. Hệ thống quang học tiên tiến bao gồm nhiều thấu kính phi cầu và thấu kính đặc biệt giúp giảm thiểu hiện tượng méo hình, quang sai màu và bóng ma, đồng thời duy trì độ sắc nét cao từ trung tâm đến rìa ảnh. Cơ chế lấy nét tự động nhanh, chính xác và vận hành êm ái đáp ứng tốt cả nhu cầu chụp ảnh lẫn quay video. Thân ống kính được chế tạo từ kim loại cao cấp với khả năng chống bụi và chống ẩm, đảm bảo độ bền và độ tin cậy trong những môi trường làm việc khắc nghiệt. Mặc dù sở hữu hiệu năng quang học hàng đầu, Leica Super-Vario-Elmarit-SL 14-24mm f/2.8 ASPH. vẫn duy trì thiết kế cân đối, tối ưu cho việc sử dụng cùng các thân máy Leica SL và Panasonic Lumix S Series. Đây là lựa chọn lý tưởng cho những người dùng chuyên nghiệp đang tìm kiếm một ống kính góc siêu rộng có chất lượng quang học xuất sắc, độ sắc nét vượt trội và khả năng sáng tạo không giới hạn.="
  },
  {
    id: 24,
    name: "LUMIX S PRO 16-35mm F4",
    price: "33.480.000 VNĐ",
    oldPrice: "37.480.000 VNĐ",
    image: "../assets/images/1635.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S PRO 16-35mm F4 là ống kính zoom góc siêu rộng cao cấp thuộc dòng S PRO dành cho hệ máy ảnh full-frame ngàm L. Với dải tiêu cự linh hoạt từ 16-35mm cùng khẩu độ cố định f/4 trên toàn dải zoom, ống kính đáp ứng xuất sắc nhu cầu chụp phong cảnh, kiến trúc, nội thất, du lịch và quay video chuyên nghiệp. Hệ thống quang học gồm 12 thấu kính trong 9 nhóm, tích hợp các thấu kính phi cầu, ED và UHR giúp giảm thiểu quang sai, méo hình và hiện tượng viền tím, mang lại độ sắc nét cao trên toàn khung hình. Khoảng cách lấy nét tối thiểu chỉ 25cm cho phép người dùng dễ dàng sáng tạo với các góc chụp cận cảnh độc đáo. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính kép hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đặc biệt phù hợp cho nhu cầu quay video. Với trọng lượng chỉ khoảng 500g cùng đường kính filter tiêu chuẩn 77mm, Lumix S PRO 16-35mm F4 mang lại sự cân bằng lý tưởng giữa chất lượng quang học và tính cơ động khi sử dụng ngoài thực địa. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định ở nhiệt độ thấp, đáp ứng tốt các điều kiện tác nghiệp khắc nghiệt. Nhờ chất lượng hình ảnh vượt trội, độ sắc nét cao và khả năng tái tạo màu sắc đặc trưng của dòng S PRO, Lumix S PRO 16-35mm F4 là lựa chọn lý tưởng cho những nhiếp ảnh gia và nhà làm phim đang tìm kiếm một ống kính góc siêu rộng chuyên nghiệp, linh hoạt và đáng tin cậy."
  },

    {
    id: 25,
    name: "Panasonic Lumix S 20-60mm F3.5-5.6",
    price: "15.990.000 VNĐ",
    oldPrice: "17.990.000 VNĐ",
    image: "../assets/images/2060.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S 20-60mm F3.5-5.6 là ống kính zoom tiêu chuẩn nhỏ gọn dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để mang lại sự linh hoạt tối đa cho nhu cầu chụp ảnh và quay video hằng ngày. Với dải tiêu cự độc đáo từ 20mm đến 60mm, ống kính cung cấp góc nhìn rộng hơn đáng kể so với các ống kính kit truyền thống, rất phù hợp cho phong cảnh, kiến trúc, du lịch, đường phố và sáng tạo nội dung. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu và ED giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh cao trên toàn dải zoom. Khoảng cách lấy nét gần chỉ 15cm ở góc rộng cho phép chụp cận cảnh ấn tượng với khả năng tái tạo chi tiết tốt. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không gây tiếng ồn, đáp ứng hiệu quả cả nhu cầu chụp ảnh lẫn quay video. Với trọng lượng chỉ khoảng 350g, Lumix S 20-60mm F3.5-5.6 mang lại tính cơ động cao, phù hợp cho các chuyến đi và sử dụng hàng ngày. Thân ống kính được thiết kế chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt, đảm bảo độ bền và độ tin cậy lâu dài. Với chất lượng quang học tốt, thiết kế nhỏ gọn và dải tiêu cự linh hoạt, Panasonic Lumix S 20-60mm F3.5-5.6 là lựa chọn lý tưởng cho những người dùng hệ Lumix S đang tìm kiếm một ống kính đa năng để đồng hành trong mọi hành trình sáng tạo."
  },

  {
    id: 26,
    name: "Panasonic Lumix S PRO 14mm F1.8",
    price: "37.490.000 VNĐ",
    oldPrice: "40.490.000 VNĐ",
    image: "../assets/images/14.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S PRO 14mm F1.8 là ống kính prime góc siêu rộng cao cấp dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để đáp ứng nhu cầu của các nhiếp ảnh gia phong cảnh, thiên văn, kiến trúc và nhà làm phim chuyên nghiệp. Với tiêu cự 14mm cùng khẩu độ lớn F1.8, ống kính mang lại góc nhìn cực rộng, khả năng thu sáng vượt trội và hiệu ứng phối cảnh ấn tượng, đặc biệt phù hợp cho chụp bầu trời đêm, phong cảnh rộng lớn và các không gian nội thất. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu, ED và UED giúp giảm méo hình, quang sai màu và hiện tượng lóe sáng, đồng thời duy trì độ sắc nét cao trên toàn khung hình ngay cả khi sử dụng ở khẩu độ tối đa. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không gây tiếng ồn, đáp ứng tốt cả nhu cầu chụp ảnh lẫn quay video chuyên nghiệp. Với trọng lượng nhẹ và thiết kế nhỏ gọn hơn nhiều so với các ống kính góc siêu rộng khẩu lớn truyền thống, Lumix S PRO 14mm F1.8 mang lại tính cơ động cao mà vẫn đảm bảo chất lượng quang học hàng đầu. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với độ sắc nét vượt trội, khẩu độ F1.8 lớn và góc nhìn siêu rộng ấn tượng, Panasonic Lumix S PRO 14mm F1.8 là lựa chọn lý tưởng cho những người sáng tạo đang tìm kiếm một ống kính chuyên nghiệp để ghi lại những khung hình rộng lớn với chất lượng hình ảnh xuất sắc."
  },
    {
    id: 27,
    name: "Panasonic Lumix S PRO 70-200mm F2.8 O.I.S",
    price: "64.590.000 VNĐ",
    oldPrice: "65.590.000 VNĐ",
    image: "../assets/images/70200.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S PRO 70-200mm F2.8 O.I.S là ống kính tele zoom chuyên nghiệp cao cấp dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để đáp ứng những yêu cầu khắt khe nhất trong lĩnh vực nhiếp ảnh thể thao, chân dung, sự kiện, động vật hoang dã và quay video chuyên nghiệp. Với dải tiêu cự linh hoạt 70-200mm cùng khẩu độ lớn F2.8 cố định trên toàn dải zoom, ống kính mang lại khả năng thu sáng vượt trội, hiệu ứng xóa phông mượt mà và hiệu suất ổn định trong mọi điều kiện ánh sáng. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu, UED và ED giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh xuất sắc từ trung tâm đến rìa khung hình. Công nghệ chống rung quang học O.I.S kết hợp với hệ thống chống rung trong thân máy Lumix giúp giảm rung hiệu quả khi chụp ảnh và quay video ở tiêu cự dài. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính kép hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, phù hợp cho cả nhiếp ảnh và quay phim chuyên nghiệp. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong những môi trường tác nghiệp khắc nghiệt. Với chất lượng quang học đạt chuẩn S PRO, khẩu độ F2.8 lớn và độ hoàn thiện cao cấp, Panasonic Lumix S PRO 70-200mm F2.8 O.I.S là lựa chọn lý tưởng cho những người dùng chuyên nghiệp đang tìm kiếm một ống kính tele zoom mạnh mẽ và đáng tin cậy."
  },
{
    id: 28,
    name: "Panasonic Lumix S 70-300mm F4.5-5.6 Macro O.I.S",
    price: "26.900.000 VNĐ",
    oldPrice: "28.900.000 VNĐ",
    image: "../assets/images/70300.jpg", 
    productLink: "chi-tiet.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S 70-300mm F4.5-5.6 Macro O.I.S là ống kính tele zoom đa dụng dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để phục vụ nhiều thể loại nhiếp ảnh như động vật hoang dã, thể thao, chân dung, du lịch và quay video. Với dải tiêu cự linh hoạt từ 70mm đến 300mm, ống kính cho phép người dùng dễ dàng tiếp cận các chủ thể ở khoảng cách xa mà vẫn duy trì chất lượng hình ảnh sắc nét và độ chi tiết cao. Hệ thống quang học tiên tiến sử dụng các thấu kính ED và UED giúp giảm quang sai màu, tăng độ tương phản và tái tạo màu sắc trung thực trên toàn dải zoom. Điểm nổi bật của ống kính là khả năng chụp macro với độ phóng đại tối đa 0.5x, cho phép ghi lại các chi tiết cận cảnh ấn tượng mà không cần sử dụng ống kính macro chuyên dụng. Công nghệ chống rung quang học O.I.S kết hợp với hệ thống chống rung trong thân máy Lumix giúp giảm rung hiệu quả khi chụp ở tiêu cự dài hoặc quay video cầm tay. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không gây tiếng ồn, đáp ứng tốt cả nhu cầu chụp ảnh lẫn ghi hình. Thân ống kính được thiết kế chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt, mang lại độ bền và độ tin cậy cao. Với sự kết hợp giữa khả năng zoom xa, chức năng macro tiện lợi và thiết kế gọn nhẹ, Panasonic Lumix S 70-300mm F4.5-5.6 Macro O.I.S là lựa chọn lý tưởng cho những người dùng hệ Lumix S đang tìm kiếm một ống kính tele đa năng và linh hoạt."
  },
  {
    id: 29,
    name: "Panasonic Lumix S PRO 24-70mm F2.8",
    price: "52.990.000 VNĐ",
    oldPrice: "56.990.000 VNĐ",
    image: "../assets/images/2470.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "fullframe",
    desc: "Panasonic Lumix S PRO 24-70mm F2.8 là ống kính zoom tiêu chuẩn chuyên nghiệp cao cấp dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để đáp ứng những yêu cầu khắt khe nhất của các nhiếp ảnh gia và nhà làm phim chuyên nghiệp. Với dải tiêu cự linh hoạt từ 24mm đến 70mm cùng khẩu độ lớn F2.8 cố định trên toàn dải zoom, ống kính mang lại khả năng thu sáng vượt trội, hiệu ứng xóa phông đẹp mắt và hiệu suất ổn định trong nhiều điều kiện ánh sáng khác nhau. Hệ thống quang học đạt tiêu chuẩn nghiêm ngặt của dòng S PRO, sử dụng nhiều thấu kính phi cầu, UHR và ED giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh xuất sắc trên toàn khung hình. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính kép hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đáp ứng hiệu quả cả nhu cầu chụp ảnh lẫn quay video. Thiết kế lấy nét trong giúp duy trì sự cân bằng khi sử dụng trên gimbal và các hệ thống hỗ trợ quay phim chuyên nghiệp. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong những môi trường tác nghiệp khắc nghiệt. Với chất lượng quang học hàng đầu, khẩu độ F2.8 lớn và dải tiêu cự đa dụng, Panasonic Lumix S PRO 24-70mm F2.8 được xem là một trong những ống kính quan trọng nhất trong hệ sinh thái Lumix S, phù hợp cho các thể loại nhiếp ảnh từ chân dung, sự kiện, du lịch đến sản xuất nội dung và quay phim chuyên nghiệp."
},
{
    id: 30,
    name: "Panasonic Lumix S PRO 50mm F1.4",
    price: "49.990.000 VNĐ",
    oldPrice: "53.990.000 VNĐ",
    image: "../assets/images/50f14.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "fullframe",
    desc: "Panasonic Lumix S PRO 50mm F1.4 là ống kính prime cao cấp thuộc dòng S PRO dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để mang lại chất lượng hình ảnh ở mức cao nhất cho các nhiếp ảnh gia và nhà làm phim chuyên nghiệp. Với tiêu cự tiêu chuẩn 50mm kết hợp khẩu độ cực lớn F1.4, ống kính tạo ra góc nhìn tự nhiên gần với mắt người, đồng thời mang lại khả năng thu sáng vượt trội và hiệu ứng bokeh mềm mại, giàu chiều sâu. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu và thấu kính có độ khúc xạ cao giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh xuất sắc ngay cả khi sử dụng ở khẩu độ lớn nhất. Ống kính tái tạo màu sắc trung thực, độ tương phản cao và khả năng chuyển vùng nét sang vùng mờ mượt mà, rất phù hợp cho chụp chân dung, thời trang, đám cưới, quảng cáo và quay phim chuyên nghiệp. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính hoạt động nhanh chóng, chính xác và gần như không gây tiếng ồn, đáp ứng tốt cả nhu cầu chụp ảnh lẫn ghi hình. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong nhiều điều kiện tác nghiệp khác nhau. Với chất lượng quang học đạt chuẩn khắt khe của dòng S PRO, khẩu độ F1.4 lớn và khả năng tái tạo hình ảnh đẳng cấp, Panasonic Lumix S PRO 50mm F1.4 là lựa chọn lý tưởng cho những người dùng chuyên nghiệp đang tìm kiếm một ống kính tiêu chuẩn hàng đầu cho hệ Lumix S."
},
{
    id: 31,
    name: "Panasonic Lumix S 85mm F1.8",
    price: "15.990.000 VNĐ",
    oldPrice: "17.990.000 VNĐ",
    image: "../assets/images/85.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "fullframe",
    desc: "Panasonic Lumix S 85mm F1.8 là ống kính prime tele ngắn dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để mang lại chất lượng hình ảnh cao cấp trong một thân hình nhỏ gọn và linh hoạt. Với tiêu cự 85mm cùng khẩu độ lớn F1.8, ống kính tạo ra hiệu ứng xóa phông mềm mại, khả năng tách chủ thể ấn tượng và góc nhìn lý tưởng cho nhiếp ảnh chân dung, thời trang, sự kiện và quay video chuyên nghiệp. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính đặc biệt giúp giảm quang sai màu, tăng độ sắc nét và duy trì chất lượng hình ảnh đồng đều từ trung tâm đến rìa khung hình. Khẩu độ F1.8 cho phép thu sáng hiệu quả trong điều kiện ánh sáng yếu, đồng thời tạo nên những bức ảnh có chiều sâu và cảm xúc hơn. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, rất phù hợp cho cả chụp ảnh và quay phim. Thiết kế lấy nét trong giúp duy trì kích thước ổn định khi sử dụng trên gimbal hoặc các hệ thống hỗ trợ quay video. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với chất lượng quang học vượt trội, trọng lượng nhẹ và khả năng tái tạo hậu cảnh đẹp mắt, Panasonic Lumix S 85mm F1.8 là lựa chọn lý tưởng cho những người dùng hệ Lumix S đang tìm kiếm một ống kính chân dung chuyên nghiệp, nhỏ gọn và đáng tin cậy."
},
{
    id: 32,
    name: "Panasonic Lumix S 35mm F1.8",
    price: "15.990.000 VNĐ",
    oldPrice: "17.990.000 VNĐ",
    image: "../assets/images/35.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "fullframe",
    desc: "Panasonic Lumix S 35mm F1.8 là ống kính prime góc rộng tiêu chuẩn dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để mang lại sự cân bằng hoàn hảo giữa chất lượng hình ảnh, tính linh hoạt và kích thước nhỏ gọn. Với tiêu cự 35mm cùng khẩu độ lớn F1.8, ống kính phù hợp cho nhiều thể loại nhiếp ảnh như đường phố, du lịch, đời thường, chân dung môi trường và quay video sáng tạo. Khẩu độ F1.8 cho phép thu sáng hiệu quả trong điều kiện ánh sáng yếu, đồng thời tạo hiệu ứng xóa phông tự nhiên và khả năng tách chủ thể ấn tượng. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính đặc biệt giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh cao trên toàn khung hình. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đáp ứng tốt cả nhu cầu chụp ảnh lẫn quay phim chuyên nghiệp. Thiết kế lấy nét trong giúp hạn chế hiện tượng focus breathing, mang lại trải nghiệm quay video mượt mà hơn. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với chất lượng quang học xuất sắc, trọng lượng nhẹ và khả năng sử dụng linh hoạt trong nhiều tình huống khác nhau, Panasonic Lumix S 35mm F1.8 là lựa chọn lý tưởng cho những người dùng hệ Lumix S đang tìm kiếm một ống kính prime đa năng phục vụ cả nhiếp ảnh và quay video chuyên nghiệp."
},
{
    id: 33,
    name: "Panasonic Lumix S 24mm F1.8",
    price: "15.990.000 VNĐ",
    oldPrice: "17.990.000 VNĐ",
    image: "../assets/images/24.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "fullframe",
    desc: "Panasonic Lumix S 24mm F1.8 là ống kính prime góc rộng cao cấp dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để đáp ứng nhu cầu của các nhiếp ảnh gia và nhà sáng tạo nội dung yêu thích sự linh hoạt và chất lượng hình ảnh vượt trội. Với tiêu cự 24mm cùng khẩu độ lớn F1.8, ống kính mang lại góc nhìn rộng lý tưởng cho nhiếp ảnh phong cảnh, kiến trúc, du lịch, đường phố và quay video chuyên nghiệp. Khẩu độ F1.8 cho khả năng thu sáng hiệu quả trong điều kiện ánh sáng yếu, đồng thời tạo hiệu ứng xóa phông tự nhiên và tăng khả năng tách chủ thể khi chụp ở khoảng cách gần. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính đặc biệt giúp giảm quang sai, hạn chế hiện tượng méo hình và duy trì độ sắc nét cao trên toàn khung hình. Hệ thống lấy nét tự động sử dụng động cơ tuyến tính hoạt động nhanh chóng, chính xác và gần như không gây tiếng ồn, rất phù hợp cho cả chụp ảnh và quay phim. Thiết kế lấy nét trong giúp giảm hiện tượng focus breathing, mang lại chuyển động khung hình tự nhiên hơn khi quay video. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với chất lượng quang học xuất sắc, trọng lượng nhẹ và khả năng sử dụng linh hoạt trong nhiều tình huống khác nhau, Panasonic Lumix S 24mm F1.8 là lựa chọn lý tưởng cho những người dùng hệ Lumix S đang tìm kiếm một ống kính góc rộng chuyên nghiệp phục vụ cả nhiếp ảnh và sáng tạo nội dung hiện đại."
},
{
    id: 34,
    name: "Panasonic Lumix S 100mm F2.8 Macro",
    price: "24.990.000 VNĐ",
    oldPrice: "27.990.000 VNĐ",
    image: "../assets/images/100macro.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "fullframe",
    desc: "Panasonic Lumix S 100mm F2.8 Macro là ống kính macro cao cấp dành cho hệ máy ảnh full-frame ngàm L, được thiết kế để mang lại khả năng chụp cận cảnh chuyên nghiệp trong một thân hình nhỏ gọn và nhẹ nhàng. Với tiêu cự 100mm cùng khẩu độ F2.8, ống kính cho phép ghi lại những chi tiết cực nhỏ với độ sắc nét cao, đồng thời tạo hiệu ứng xóa phông mềm mại và khả năng tách chủ thể ấn tượng. Khả năng phóng đại 1:1 thực thụ giúp tái hiện chính xác kích thước của chủ thể trên cảm biến, rất phù hợp cho nhiếp ảnh macro, sản phẩm, thiên nhiên, côn trùng và chân dung. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính đặc biệt giúp giảm quang sai màu, tăng độ tương phản và duy trì chất lượng hình ảnh xuất sắc từ trung tâm đến rìa khung hình. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và êm ái, đồng thời được trang bị công tắc giới hạn khoảng lấy nét giúp tăng tốc độ lấy nét trong từng tình huống cụ thể. Thiết kế lấy nét trong giúp chiều dài ống kính không thay đổi khi lấy nét, tạo sự thuận tiện khi chụp ở khoảng cách gần hoặc sử dụng trên gimbal. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với chất lượng quang học vượt trội, khả năng macro 1:1 chuyên nghiệp và thiết kế nhỏ gọn hàng đầu phân khúc, Panasonic Lumix S 100mm F2.8 Macro là lựa chọn lý tưởng cho những người dùng hệ Lumix S muốn khám phá thế giới vi mô hoặc tạo ra những bức ảnh chân dung giàu chiều sâu và cảm xúc."
},
{
    id: 35,
    name: "Panasonic Leica 9mm F1.7",
    price: "12.990.000 VNĐ",
    oldPrice: "14.990.000 VNĐ",
    image: "../assets/images/9mm.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "m43",
    desc: "Panasonic Leica DG Summilux 9mm F1.7 ASPH là ống kính prime góc siêu rộng cao cấp dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng quang học vượt trội trong một thiết kế nhỏ gọn và linh hoạt. Với tiêu cự tương đương 18mm trên full-frame cùng khẩu độ lớn F1.7, ống kính mang đến góc nhìn rộng ấn tượng, khả năng thu sáng mạnh mẽ và hiệu ứng phối cảnh độc đáo, rất phù hợp cho nhiếp ảnh phong cảnh, kiến trúc, du lịch, vlog và quay video sáng tạo. Hệ thống quang học tiên tiến sử dụng các thấu kính phi cầu và thấu kính đặc biệt giúp giảm méo hình, hạn chế quang sai màu và duy trì độ sắc nét cao trên toàn khung hình. Khoảng cách lấy nét tối thiểu chỉ 9.5cm cho phép người dùng chụp cận cảnh với hiệu ứng phối cảnh mạnh mẽ và khả năng tách chủ thể ấn tượng. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đáp ứng tốt cho cả chụp ảnh lẫn quay phim. Thiết kế lấy nét trong giúp hạn chế hiện tượng focus breathing, mang lại trải nghiệm quay video mượt mà và chuyên nghiệp hơn. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và hoạt động ổn định trong điều kiện thời tiết khắc nghiệt. Với chất lượng quang học chuẩn Leica, khẩu độ F1.7 lớn và thiết kế nhỏ gọn đặc trưng của hệ Micro Four Thirds, Panasonic Leica DG Summilux 9mm F1.7 ASPH là lựa chọn lý tưởng cho những người sáng tạo nội dung và nhiếp ảnh gia đang tìm kiếm một ống kính góc siêu rộng chất lượng cao để đồng hành trong mọi hành trình sáng tạo."
},
{
    id: 36,
    name: "Panasonic Leica 15mm F1.7",
    price: "10.990.000 VNĐ",
    oldPrice: "12.990.000 VNĐ",
    image: "../assets/images/15mm.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "m43",
    desc: "Panasonic Leica DG Summilux 15mm F1.7 ASPH là ống kính prime góc rộng cao cấp dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng hình ảnh xuất sắc trong một thiết kế nhỏ gọn và tinh tế. Với tiêu cự tương đương 30mm trên full-frame cùng khẩu độ lớn F1.7, ống kính mang đến góc nhìn linh hoạt, phù hợp cho nhiều thể loại nhiếp ảnh như đường phố, du lịch, phong cảnh, đời thường và sáng tạo nội dung. Khẩu độ F1.7 cho khả năng thu sáng hiệu quả trong điều kiện ánh sáng yếu, đồng thời tạo hiệu ứng xóa phông tự nhiên và tăng khả năng tách chủ thể. Hệ thống quang học tiên tiến sử dụng các thấu kính phi cầu chất lượng cao giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh đồng đều trên toàn khung hình. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đáp ứng tốt cho cả nhu cầu chụp ảnh và quay video. Điểm nổi bật của ống kính là vòng chỉnh khẩu độ vật lý trên thân ống, mang lại trải nghiệm điều khiển trực quan theo phong cách nhiếp ảnh cổ điển. Với trọng lượng nhẹ và kích thước nhỏ gọn, Panasonic Leica DG Summilux 15mm F1.7 ASPH là người bạn đồng hành lý tưởng cho những ai yêu thích sự cơ động mà vẫn yêu cầu chất lượng quang học cao cấp. Thân ống kính được hoàn thiện chắc chắn với thiết kế sang trọng đặc trưng của Leica, mang đến sự kết hợp hoàn hảo giữa hiệu năng, tính thẩm mỹ và trải nghiệm sử dụng chuyên nghiệp."
},
{
    id: 37,
    name: "Panasonic Leica 42.5mm F1.2 Nocticron",
    price: "33.990.000 VNĐ",
    oldPrice: "36.990.000 VNĐ",
    image: "../assets/images/425.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "m43",
    desc: "Panasonic Leica DG Nocticron 42.5mm F1.2 ASPH. POWER O.I.S là ống kính chân dung cao cấp hàng đầu dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng quang học đỉnh cao và khả năng tái tạo hình ảnh giàu cảm xúc. Với tiêu cự tương đương 85mm trên full-frame cùng khẩu độ cực lớn F1.2, ống kính tạo ra hiệu ứng xóa phông mềm mại, khả năng tách chủ thể xuất sắc và độ sâu trường ảnh ấn tượng, đặc biệt phù hợp cho nhiếp ảnh chân dung, thời trang, đám cưới và nghệ thuật. Hệ thống quang học tiên tiến sử dụng các thấu kính phi cầu, ED và UHR giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh vượt trội ngay cả khi chụp ở khẩu độ tối đa. Khẩu độ F1.2 không chỉ hỗ trợ chụp trong điều kiện thiếu sáng mà còn tạo nên hiệu ứng bokeh mượt mà đặc trưng của dòng Nocticron. Công nghệ chống rung quang học POWER O.I.S giúp giảm rung hiệu quả khi chụp cầm tay, đặc biệt hữu ích trong môi trường ánh sáng yếu. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và êm ái, đáp ứng tốt cho cả chụp ảnh và quay video. Ống kính còn được trang bị vòng chỉnh khẩu độ vật lý mang lại trải nghiệm điều khiển trực quan và chuyên nghiệp. Với chất lượng quang học chuẩn Leica, độ sắc nét xuất sắc, bokeh đẹp mắt và khả năng tái tạo hình ảnh giàu chiều sâu, Panasonic Leica DG Nocticron 42.5mm F1.2 ASPH. POWER O.I.S được xem là một trong những ống kính chân dung tốt nhất từng được phát triển cho hệ Micro Four Thirds."
},
{
    id: 38,
    name: "Panasonic Leica 10-25mm F1.7",
    price: "44.990.000 VNĐ",
    oldPrice: "47.990.000 VNĐ",
    image: "../assets/images/1025.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "m43",
    desc: "Panasonic Leica DG Vario-Summilux 10-25mm F1.7 ASPH là ống kính zoom khẩu độ lớn cao cấp dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng hình ảnh tiệm cận các ống kính prime chuyên nghiệp. Với dải tiêu cự tương đương 20-50mm trên full-frame cùng khẩu độ F1.7 cố định trên toàn dải zoom, ống kính cung cấp khả năng thu sáng vượt trội, hiệu ứng xóa phông đẹp mắt và hiệu năng ổn định trong mọi điều kiện ánh sáng. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu, UHR và ED giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh xuất sắc từ trung tâm đến rìa khung hình. Dải tiêu cự linh hoạt giúp ống kính phù hợp cho nhiều thể loại như phong cảnh, đường phố, chân dung môi trường, sự kiện và quay video chuyên nghiệp. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đồng thời thiết kế hạn chế hiện tượng focus breathing giúp mang lại trải nghiệm quay phim mượt mà hơn. Ống kính được trang bị vòng chỉnh khẩu độ vật lý cùng cơ chế chuyển đổi khẩu độ không khấc, đáp ứng nhu cầu làm phim chuyên nghiệp. Thân ống kính được hoàn thiện chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong các môi trường tác nghiệp khắc nghiệt. Với chất lượng quang học chuẩn Leica, khẩu độ F1.7 cố định độc đáo và khả năng thay thế nhiều ống kính prime trong một thiết bị duy nhất, Panasonic Leica DG Vario-Summilux 10-25mm F1.7 ASPH được xem là một trong những ống kính zoom xuất sắc nhất từng được phát triển cho hệ Micro Four Thirds."
},
{
    id: 39,
    name: "Panasonic Leica 25-50mm F1.7",
    price: "42.990.000 VNĐ",
    oldPrice: "45.990.000 VNĐ",
    image: "../assets/images/2550.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "m43",
    desc: "Panasonic Leica DG Vario-Summilux 25-50mm F1.7 ASPH là ống kính zoom khẩu độ lớn cao cấp dành cho hệ máy ảnh Micro Four Thirds, được phát triển với sự hợp tác giữa Panasonic và Leica nhằm mang lại chất lượng hình ảnh ngang tầm các ống kính prime chuyên nghiệp. Với dải tiêu cự tương đương 50-100mm trên full-frame cùng khẩu độ F1.7 cố định trên toàn dải zoom, ống kính cung cấp khả năng thu sáng vượt trội, hiệu ứng xóa phông mềm mại và độ sâu trường ảnh ấn tượng. Dải tiêu cự này đặc biệt phù hợp cho chân dung, sự kiện, phỏng vấn, quay phim thương mại và sáng tạo nội dung chuyên nghiệp. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính phi cầu, UHR và ED giúp giảm quang sai, tăng độ sắc nét và duy trì chất lượng hình ảnh xuất sắc trên toàn khung hình ngay cả ở khẩu độ lớn nhất. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đồng thời được tối ưu để hạn chế hiện tượng focus breathing khi quay video. Ống kính còn được trang bị vòng chỉnh khẩu độ vật lý với khả năng chuyển đổi giữa chế độ có khấc và không khấc, đáp ứng nhu cầu làm phim chuyên nghiệp. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong các điều kiện tác nghiệp khắc nghiệt. Khi kết hợp cùng Leica 10-25mm F1.7, người dùng có thể sở hữu bộ đôi zoom F1.7 liên tục tương đương dải tiêu cự 20-100mm trên full-frame, mang lại sự linh hoạt vượt trội mà vẫn duy trì chất lượng quang học hàng đầu. Với hiệu năng xuất sắc, khẩu độ lớn độc đáo và chất lượng hình ảnh chuẩn Leica, Panasonic Leica DG Vario-Summilux 25-50mm F1.7 ASPH là một trong những ống kính zoom cao cấp và ấn tượng nhất dành cho hệ Micro Four Thirds."
},
{
    id: 40,
    name: "Panasonic Lumix G X 35-100mm F2.8 II",
    price: "24.990.000 VNĐ",
    oldPrice: "27.990.000 VNĐ",
    image: "../assets/images/35100.jpg",
    productLink: "chi-tiet.html",
    cat: "lens",
    system: "m43",
    desc: "Panasonic Lumix G X Vario 35-100mm F2.8 II POWER O.I.S là ống kính tele zoom chuyên nghiệp cao cấp dành cho hệ máy ảnh Micro Four Thirds, được thiết kế để mang lại hiệu năng mạnh mẽ trong một thân hình nhỏ gọn và cơ động. Với dải tiêu cự tương đương 70-200mm trên full-frame cùng khẩu độ lớn F2.8 cố định trên toàn dải zoom, ống kính đáp ứng xuất sắc các nhu cầu chụp chân dung, thể thao, sự kiện, động vật và quay video chuyên nghiệp. Hệ thống quang học tiên tiến sử dụng nhiều thấu kính ED và UED giúp giảm quang sai màu, tăng độ sắc nét và duy trì chất lượng hình ảnh cao trên toàn khung hình. Công nghệ chống rung quang học POWER O.I.S kết hợp với hệ thống chống rung trong thân máy Lumix thông qua Dual I.S. 2 giúp giảm rung hiệu quả khi chụp ở tiêu cự dài hoặc quay video cầm tay. Hệ thống lấy nét tự động hoạt động nhanh chóng, chính xác và gần như không phát ra tiếng ồn, đáp ứng tốt cho cả nhu cầu nhiếp ảnh và làm phim. Thiết kế lấy nét trong và zoom trong giúp chiều dài ống kính không thay đổi khi sử dụng, tạo sự cân bằng lý tưởng trên gimbal và các hệ thống hỗ trợ quay phim. Thân ống kính được chế tạo chắc chắn với khả năng chống bụi, chống ẩm và chống đóng băng, đảm bảo độ bền cao trong nhiều điều kiện tác nghiệp khác nhau. Với chất lượng quang học xuất sắc, khẩu độ F2.8 cố định và kích thước nhỏ gọn vượt trội so với các ống kính 70-200mm dành cho full-frame, Panasonic Lumix G X Vario 35-100mm F2.8 II POWER O.I.S là lựa chọn lý tưởng cho những người dùng Micro Four Thirds đang tìm kiếm một ống kính tele chuyên nghiệp mạnh mẽ và linh hoạt."
},
];

function addproduct(id, name, price, image, hyperlink) {
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col");

    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden border rounded shadow-sm bg-white");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid object-fit-contain h-100 p-2"); 
    productImage.appendChild(img);

    const productInfor = document.createElement("div");
    productInfor.setAttribute("class", "product-infor mt-2 text-center");

    const productName = document.createElement("p");
    productName.setAttribute("class", "fw-bold mb-1 text-truncate px-1 small");
    productName.textContent = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-semibold mb-2 small");
    productPrice.textContent = price;

    const btnGroup = document.createElement("div");
    btnGroup.setAttribute("class", "d-flex gap-1 px-1");

    const productLink = document.createElement("a");
    productLink.textContent = "Chi tiết";
    productLink.setAttribute("href", hyperlink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm flex-grow-1 fw-medium text-white px-1");
    productLink.style.fontSize = "12px";

    const addCartBtn = document.createElement("button");
    addCartBtn.innerHTML = '<i class="bi bi-cart-plus-fill"></i>';
    addCartBtn.setAttribute("class", "btn btn-danger btn-sm px-2");
    addCartBtn.setAttribute("title", "Thêm nhanh vào giỏ");
    addCartBtn.setAttribute("onclick", `addToCart(${id})`);

    btnGroup.appendChild(productLink);
    btnGroup.appendChild(addCartBtn);

    productInfor.appendChild(productName);
    productInfor.appendChild(productPrice);
    productInfor.appendChild(btnGroup);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfor);

    const listContainer = document.getElementById("product-list");
    if (listContainer) {
        listContainer.appendChild(productItem);
    }
}

function updateCartBadge() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("lumix_cart")) || [];
    } catch (e) {
        cart = [];
    }
    
    let totalQty = 0;
    cart.forEach(function(item) {
        let qty = parseInt(item.quantity, 10);
        totalQty += isNaN(qty) ? 1 : qty;
    });
    
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.textContent = totalQty;
    }
}

function addToCart(productId) {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("lumix_cart")) || [];
    } catch (e) {
        cart = [];
    }

    let found = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            let currentQty = parseInt(cart[i].quantity, 10);
            cart[i].quantity = (isNaN(currentQty) ? 1 : currentQty) + 1;
            found = true;
            break;
        }
    }

    if (!found) {
        let productData = productlist.find(function(p) {
            return p.id === productId;
        });
        if (productData) {
            cart.push({
                id: productData.id,
                name: productData.name,
                price: productData.price,
                image: productData.image,
                quantity: 1
            });
        }
    }

    localStorage.setItem("lumix_cart", JSON.stringify(cart));
    updateCartBadge();
    alert("Đã thêm sản phẩm vào giỏ hàng thành công! 🎉");
}

function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    if (isNaN(productId)) return;

    const currentProduct = productlist.find(function(item) {
        return item.id === productId;
    });

    if (currentProduct) {
        const detailName = document.getElementById("detail-name");
        if (detailName) detailName.textContent = currentProduct.name;

        const detailImg = document.getElementById("detail-img");
        if (detailImg) {
            detailImg.setAttribute("src", currentProduct.image);
            detailImg.setAttribute("alt", currentProduct.name);
        }

        const detailPrice = document.getElementById("detail-price");
        if (detailPrice) detailPrice.textContent = currentProduct.price;

        const detailOldPrice = document.getElementById("detail-old-price");
        if (detailOldPrice && currentProduct.oldPrice) {
            detailOldPrice.textContent = currentProduct.oldPrice;
        }

        const detailDesc = document.getElementById("detail-desc");
        if (detailDesc) detailDesc.textContent = currentProduct.desc;
        
        const addToCartBtn = document.getElementById("add-to-cart-btn");
        if (addToCartBtn) {
            addToCartBtn.setAttribute("onclick", `addToCart(${currentProduct.id})`);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateCartBadge();
    renderProductDetail();

    const featuredProducts = productlist.slice(0, 8);

    featuredProducts.forEach(function(product) {
        addproduct(
            product.id,
            product.name,
            product.price,
            product.image.replace("../", ""),
            product.productLink
        );
    });
});