// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  // Check if click is outside nav and menu is open
  if (!nav.contains(event.target) && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Close mobile menu when clicking on navigation links
  const navLinksItems = document.querySelectorAll(".nav-links a");
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      const navLinksContainer = document.getElementById("navLinks");
      navLinksContainer.classList.remove("active");
    });
  });

  // Scroll animation
  const els = document.querySelectorAll(".scroll-animate");
  console.log("[DEBUG] scroll-animate count =", els.length);

  if (els.length === 0) {
    console.warn(
      "[DEBUG] Không tìm thấy .scroll-animate - kiểm tra selector / HTML."
    );
  } else {
    // Fallback nếu trình duyệt không hỗ trợ IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      console.warn("[DEBUG] No IntersectionObserver - fallback to scroll check");
      const check = () => {
        els.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight - 50) {
            el.classList.add("animate", "show");
          }
        });
      };
      window.addEventListener("scroll", check);
      check();
    } else {
      const obs = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("[DEBUG] in view ->", entry.target);
              entry.target.classList.add("animate", "show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      els.forEach((el) => obs.observe(el));
    }
  }

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".stat-card, .tip-card, .gallery-item, .video-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    const observer2 = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

    observer2.observe(el);
  });
});

// Detail page content data
const detailContent = {
  water: {
    title: "💧 Tiết Kiệm Nước - Bảo Vệ Nguồn Sống",
    image: "https://bcp.cdnchinhphu.vn/Uploaded/nguyendieuhuong/2021_03_22/bao%20ve%20nguon%20nuoc.jpg",
    content: `
            <p>Nước là nguồn tài nguyên quý giá và hữu hạn. Việt Nam đang đối mặt với tình trạng khan hiếm nước sạch ở nhiều vùng, đặc biệt là các khu vực đô thị và vùng khô hạn. Việc tiết kiệm nước không chỉ giúp giảm chi phí sinh hoạt mà còn góp phần bảo vệ môi trường.</p>
            
            <h3>Tại sao cần tiết kiệm nước?</h3>
            <ul>
                <li><strong>Nguồn nước đang cạn kiệt:</strong> Chỉ 0.5% lượng nước trên Trái Đất là nước ngọt có thể sử dụng</li>
                <li><strong>Ô nhiễm nguồn nước:</strong> Rác thải và hóa chất đang làm ô nhiễm các sông, hồ, ao</li>
                <li><strong>Biến đổi khí hậu:</strong> Hạn hán và lũ lụt ngày càng diễn ra thường xuyên hơn</li>
                <li><strong>Tăng trưởng dân số:</strong> Nhu cầu sử dụng nước ngày càng tăng cao</li>
            </ul>

            <h3>Các biện pháp tiết kiệm nước hiệu quả:</h3>
            
            <div class="highlight">
                <strong>1. Trong nhà tắm:</strong>
                <ul>
                    <li>Tắm vòi sen thay vì bồn tắm (tiết kiệm đến 50 lít nước/lần tắm)</li>
                    <li>Tắt vòi nước khi xoa xà phòng, gội đầu</li>
                    <li>Lắp đặt vòi sen tiết kiệm nước</li>
                    <li>Giảm thời gian tắm xuống 5-7 phút</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>2. Trong nhà bếp:</strong>
                <ul>
                    <li>Rửa rau củ trong chậu thay vì để nước chảy</li>
                    <li>Tận dụng nước vo gạo để tưới cây hoặc lau nhà</li>
                    <li>Chỉ chạy máy rửa chén khi đầy bát đĩa</li>
                    <li>Sửa ngay vòi nước bị rò rỉ (1 vòi rỉ có thể lãng phí 20 lít/ngày)</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>3. Giặt giũ:</strong>
                <ul>
                    <li>Giặt đầy máy mới chạy để tiết kiệm nước và điện</li>
                    <li>Chọn chế độ giặt phù hợp với lượng quần áo</li>
                    <li>Tận dụng nước giặt lần cuối để lau nhà, tưới cây</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>4. Ngoài trời:</strong>
                <ul>
                    <li>Thu gom nước mưa để tưới cây, rửa xe</li>
                    <li>Tưới cây vào sáng sớm hoặc chiều tối để giảm bay hơi</li>
                    <li>Sử dụng vòi phun sương thay vì vòi nước thường</li>
                    <li>Trồng cây bản địa ít cần nước</li>
                </ul>
            </div>

            <h3>Lợi ích khi tiết kiệm nước:</h3>
            <ul>
                <li>✅ Giảm 30-50% chi phí tiền nước hàng tháng</li>
                <li>✅ Bảo vệ nguồn nước ngầm và nước mặt</li>
                <li>✅ Giảm lượng nước thải cần xử lý</li>
                <li>✅ Góp phần ứng phó với biến đổi khí hậu</li>
                <li>✅ Để lại nguồn nước sạch cho thế hệ tương lai</li>
            </ul>

            <p><strong>Hãy nhớ:</strong> Mỗi giọt nước bạn tiết kiệm hôm nay là một đóng góp cho tương lai của hành tinh!</p>
        `,
  },
  electricity: {
    title: "🔌 Tiết Kiệm Điện - Giảm Phát Thải Carbon",
    image: "https://lctech.vn/wp-content/uploads/2025/05/CAC-BIEN-PHAP-GIAM-PHAT-THAI-KHI-NHA-KINH.jpg",
    content: `
            <p>Việt Nam đang trong giai đoạn phát triển nhanh với nhu cầu điện năng tăng cao. Tuy nhiên, phần lớn điện năng vẫn được sản xuất từ nhiệt điện than - nguồn gây ô nhiễm môi trường nghiêm trọng. Tiết kiệm điện không chỉ giúp giảm hóa đơn mà còn góp phần giảm phát thải khí nhà kính.</p>

            <h3>Tác động của việc lãng phí điện:</h3>
            <ul>
                <li>🏭 Tăng phát thải CO2 và các khí nhà kính</li>
                <li>🌡️ Góp phần vào hiện tượng ấm lên toàn cầu</li>
                <li>💰 Chi phí sinh hoạt tăng cao</li>
                <li>⚡ Nguy cơ quá tải lưới điện vào giờ cao điểm</li>
            </ul>

            <h3>Cách tiết kiệm điện hiệu quả:</h3>

            <div class="highlight">
                <strong>1. Chiếu sáng thông minh:</strong>
                <ul>
                    <li>Thay đổi bóng đèn LED (tiết kiệm đến 80% so với bóng sợi đốt)</li>
                    <li>Tắt đèn khi ra khỏi phòng</li>
                    <li>Tận dụng ánh sáng tự nhiên ban ngày</li>
                    <li>Lau chùi bóng đèn thường xuyên để tăng hiệu suất</li>
                    <li>Sơn tường màu sáng để phản chiếu ánh sáng tốt hơn</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>2. Thiết bị điện tử:</strong>
                <ul>
                    <li>Rút phích cắm khi không sử dụng (tránh chế độ standby)</li>
                    <li>Tắt màn hình máy tính khi không dùng</li>
                    <li>Sạc điện thoại đầy rồi rút ra ngay</li>
                    <li>Không để sạc điện thoại cắm suốt đêm</li>
                    <li>Sử dụng ổ cắm có công tắc để dễ dàng ngắt điện</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>3. Điều hòa nhiệt độ:</strong>
                <ul>
                    <li>Đặt nhiệt độ ở 26°C (mỗi độ giảm = tăng 5-10% điện năng)</li>
                    <li>Vệ sinh lưới lọc điều hòa 2 tuần/lần</li>
                    <li>Đóng cửa phòng khi bật điều hòa</li>
                    <li>Sử dụng quạt kết hợp để phân bổ không khí</li>
                    <li>Không để điều hòa hoạt động khi không có người</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>4. Tủ lạnh:</strong>
                <ul>
                    <li>Không mở tủ lạnh quá lâu hoặc quá thường xuyên</li>
                    <li>Để thức ăn nguội hẳn mới cho vào tủ</li>
                    <li>Không để tủ lạnh quá đầy hoặc quá ít đồ</li>
                    <li>Vệ sinh gioăng cửa tủ lạnh thường xuyên</li>
                    <li>Đặt tủ lạnh cách tường ít nhất 10cm</li>
                </ul>
            </div>

            <h3>Lợi ích:</h3>
            <ul>
                <li>💵 Tiết kiệm 20-40% hóa đơn tiền điện</li>
                <li>🌍 Giảm phát thải CO2 khoảng 500kg/năm</li>
                <li>♻️ Kéo dài tuổi thọ thiết bị điện</li>
                <li>🏡 Ngôi nhà mát mẻ và thân thiện môi trường hơn</li>
            </ul>
        `,
  },
  plastic: {
    title: "🛍️ Giảm Rác Thải Nhựa - Cứu Đại Dương",
    image: "https://media.mae.gov.vn/Image/6dcd8d2c-545a-5f42-7b37-a805d5fb4e7b/2025/6/5/8-0506_0c812bfaad.jpg",
    content: `
            <p>Việt Nam là một trong 5 quốc gia thải nhiều rác nhựa ra biển nhất thế giới với 1.8 triệu tấn/năm. Nhựa mất 400-1000 năm mới phân hủy, gây hại nghiêm trọng cho sinh vật biển và chuỗi thức ăn.</p>

            <h3>Thực trạng đáng báo động:</h3>
            <ul>
                <li>🌊 Hơn 8 triệu tấn nhựa được thải ra biển mỗi năm</li>
                <li>🐢 90% chim biển và rùa biển có nhựa trong cơ thể</li>
                <li>🐟 Microplastic đã xâm nhập vào chuỗi thức ăn của con người</li>
                <li>♻️ Chỉ 9% nhựa trên thế giới được tái chế</li>
                <li>🗑️ Người Việt dùng trung bình 2500 túi nilon/năm</li>
            </ul>

            <h3>Các bước đơn giản để giảm nhựa:</h3>

            <div class="highlight">
                <strong>1. Khi đi chợ/siêu thị:</strong>
                <ul>
                    <li>✅ Mang túi vải, túi canvas tái sử dụng</li>
                    <li>✅ Chọn mua rau củ không bọc nilon</li>
                    <li>✅ Dùng hộp/túi đựng thực phẩm có sẵn</li>
                    <li>✅ Từ chối túi nilon khi mua ít món</li>
                    <li>✅ Ưu tiên sản phẩm đóng gói tối thiểu</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>2. Trong sinh hoạt hàng ngày:</strong>
                <ul>
                    <li>🥤 Mang bình nước cá nhân thay vì mua nước đóng chai</li>
                    <li>☕ Dùng cốc/ly riêng khi mua đồ uống</li>
                    <li>🥢 Mang theo đũa, thìa, dĩa cá nhân</li>
                    <li>🧴 Mua sản phẩm dạng rắn (dầu gội, sữa tắm)</li>
                    <li>🪥 Dùng bàn chải tre thay vì nhựa</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>3. Từ chối nhựa một lần:</strong>
                <ul>
                    <li>🚫 Nói KHÔNG với ống hút nhựa</li>
                    <li>🚫 Từ chối muống, dĩa nhựa khi mua đồ ăn mang về</li>
                    <li>🚫 Không dùng màng bọc thực phẩm một lần</li>
                    <li>🚫 Tránh mua đồ chơi nhựa rẻ tiền, kém chất lượng</li>
                </ul>
            </div>

            <h3>Ảnh hưởng tích cực khi giảm nhựa:</h3>
            <ul>
                <li>🌊 Bảo vệ đại dương và sinh vật biển</li>
                <li>🍃 Giảm ô nhiễm môi trường đất và nước</li>
                <li>💪 Bảo vệ sức khỏe con người khỏi microplastic</li>
                <li>💰 Tiết kiệm chi phí mua sắm</li>
                <li>🌱 Góp phần xây dựng tương lai bền vững</li>
            </ul>
        `,
  },
  recycle: {
    title: "♻️ Phân Loại Rác - Bước Đầu Của Tái Chế",
    image: "https://www.scdi.org.vn/upload/images/6.%20Tin%20t%E1%BB%A9c/Tin%20t%E1%BB%A9c%20CHUNG/Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20c%E1%BB%A7a%20SCDI/b%E1%BA%A3n%20tin%20m%C3%B4i%20tr%C6%B0%E1%BB%9Dng/phan-loai-rac.jpg",
    content: `
            <p>Mỗi ngày, người Việt Nam thải ra khoảng 64,000 tấn rác, nhưng chỉ có 12% được tái chế. Phân loại rác tại nguồn là giải pháp quan trọng giúp tăng tỷ lệ tái chế.</p>

            <h3>Hướng dẫn phân loại rác chi tiết:</h3>

            <div class="highlight">
                <strong>🟢 THÙNG XANH - Rác Tái Chế:</strong>
                <ul>
                    <li>Giấy: Báo, sách vở cũ, hộp carton</li>
                    <li>Kim loại: Lon nước ngọt, hộp sữa</li>
                    <li>Nhựa: Chai nước, hộp nhựa</li>
                    <li>Thủy tinh: Chai lọ thủy tinh</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>🟡 THÙNG VÀNG - Rác Hữu Cơ:</strong>
                <ul>
                    <li>🥬 Thức ăn thừa, vỏ rau củ quả</li>
                    <li>☕ Bã trà, bã cà phê</li>
                    <li>🌾 Lá cây, cành cây nhỏ</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>🔴 THÙNG ĐỎ - Rác Thải Nguy Hại:</strong>
                <ul>
                    <li>🔋 Pin, ắc quy</li>
                    <li>💡 Bóng đèn huỳnh quang</li>
                    <li>💊 Thuốc hết hạn</li>
                </ul>
            </div>

            <h3>Quy trình phân loại rác tại nhà:</h3>
            <ol>
                <li>Chuẩn bị 3-4 thùng rác có nắp đậy</li>
                <li>Dán nhãn rõ ràng cho mỗi thùng</li>
                <li>Rửa sạch bao bì trước khi bỏ vào thùng tái chế</li>
                <li>Thu gom và đổ rác đúng giờ quy định</li>
            </ol>

            <h3>Lợi ích:</h3>
            <ul>
                <li>🌍 Giảm 60% rác thải chôn lấp</li>
                <li>♻️ Tăng tỷ lệ tái chế lên 40-50%</li>
                <li>💰 Có thể bán phế liệu kiếm thêm thu nhập</li>
                <li>🏡 Khu dân cư sạch sẽ hơn</li>
            </ul>
        `,
  },
  transport: {
    title: "🚲 Giao Thông Xanh - Không Khí Trong Lành",
    image: "https://nangluongsachvietnam.vn/userfile/User/dohuong/images/2025/11/08/gt-20251120155910596.png",
    content: `
            <p>Giao thông là nguồn gây ô nhiễm không khí lớn nhất tại các thành phố Việt Nam, chiếm 70% lượng khí thải. Việc chuyển sang phương tiện xanh không chỉ giảm ô nhiễm mà còn cải thiện sức khỏe.</p>

            <h3>Thực trạng giao thông:</h3>
            <ul>
                <li>🏍️ Hơn 65 triệu xe máy đang lưu hành</li>
                <li>🚗 Mỗi xe ô tô thải ra 4.6 tấn CO2/năm</li>
                <li>😷 85% thành phố lớn có chất lượng không khí xấu</li>
            </ul>

            <h3>Các phương án giao thông xanh:</h3>

            <div class="highlight">
                <strong>🚶 1. Đi bộ (< 1km):</strong>
                <ul>
                    <li>✅ Tốt nhất cho sức khỏe - đốt cháy 200 calo/giờ</li>
                    <li>✅ Không tốn phí, không gây ô nhiễm</li>
                    <li>✅ Giảm stress, tăng sự sáng tạo</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>🚲 2. Đạp xe (1-5km):</strong>
                <ul>
                    <li>✅ Giảm 500g CO2 so với xe máy/chuyến đi</li>
                    <li>✅ Đốt cháy 400-700 calo/giờ</li>
                    <li>✅ Tiết kiệm 100% chi phí xăng</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>🚌 3. Xe buýt/xe công cộng:</strong>
                <ul>
                    <li>✅ Giảm 95% khí thải so với lái xe riêng</li>
                    <li>✅ Tiết kiệm 80% chi phí di chuyển</li>
                    <li>✅ Không lo tìm chỗ đậu xe</li>
                </ul>
            </div>

            <h3>Lợi ích giao thông xanh:</h3>
            <ul>
                <li>💪 Cải thiện sức khỏe - giảm 30% nguy cơ bệnh tim</li>
                <li>💰 Tiết kiệm 3-5 triệu đồng/tháng</li>
                <li>🌍 Giảm 1 tấn CO2/năm</li>
                <li>😊 Giảm stress, tăng niềm vui</li>
            </ul>
        `,
  },
  plant: {
    title: "🌿 Trồng Cây Xanh - Phổi Xanh Cho Ngôi Nhà",
    image: "https://life.thanhcong.vn/wp-content/uploads/2024/02/cay.jpg",  
    content: `
            <p>Cây xanh là "máy lọc không khí tự nhiên" giúp hấp thụ CO2, sản xuất oxy và loại bỏ các chất độc hại. Một cây trưởng thành có thể hấp thụ 21kg CO2/năm và cung cấp oxy cho 2 người.</p>

            <h3>Lợi ích của cây xanh:</h3>
            <ul>
                <li>🌬️ Lọc không khí, loại bỏ 87% chất độc hại</li>
                <li>😌 Giảm stress, cải thiện tâm trạng 40%</li>
                <li>❄️ Làm mát tự nhiên, giảm nhiệt độ 2-8°C</li>
                <li>💧 Tăng độ ẩm không khí</li>
            </ul>

            <h3>Top cây lọc không khí tốt nhất:</h3>

            <div class="highlight">
                <strong>🌿 1. Cây lưỡi hổ:</strong>
                <ul>
                    <li>✅ Hấp thụ CO2 ban đêm, thải O2</li>
                    <li>✅ Loại bỏ formaldehyde, benzene</li>
                    <li>✅ Dễ trồng, ít tưới nước</li>
                    <li>✅ Phù hợp: Phòng ngủ</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>🪴 2. Trầu bà:</strong>
                <ul>
                    <li>✅ Loại bỏ formaldehyde, CO, benzene</li>
                    <li>✅ Phát triển nhanh, dễ chăm sóc</li>
                    <li>✅ Trồng được trong nước hoặc đất</li>
                </ul>
            </div>

            <div class="highlight">
                <strong>🌵 3. Xương rồng:</strong>
                <ul>
                    <li>✅ Hấp thụ bức xạ từ điện tử</li>
                    <li>✅ Không cần chăm sóc nhiều</li>
                    <li>✅ Phù hợp: Bàn làm việc</li>
                </ul>
            </div>

            <h3>Hướng dẫn trồng cây:</h3>
            <ol>
                <li>Lót sỏi ở đáy chậu để thoát nước</li>
                <li>Cho đất vào 1/3 chậu</li>
                <li>Đặt cây vào giữa, điều chỉnh độ cao</li>
                <li>Lấp đất xung quanh, nhẹ nhàng nén chặt</li>
                <li>Tưới nước vừa đủ</li>
            </ol>

            <h3>Chăm sóc cây xanh:</h3>
            <ul>
                <li>💧 Tưới nước: 2-3 lần/tuần</li>
                <li>☀️ Ánh sáng: Đủ ánh sáng nhưng tránh nắng trực tiếp</li>
                <li>✂️ Cắt tỉa: Bỏ lá vàng, cành khô</li>
                <li>🌱 Bón phân: 1 lần/tháng</li>
            </ul>

            <h3>Lợi ích không ngờ:</h3>
            <ul>
                <li>🏡 Tăng giá trị ngôi nhà lên 15%</li>
                <li>💰 Tiết kiệm tiền mua rau 500k-1tr/tháng</li>
                <li>😴 Cải thiện giấc ngủ</li>
                <li>🌍 Góp phần giảm hiệu ứng nhà kính</li>
            </ul>
        `,
  },
};

// Open detail page
function openModal(topic) {
  const detailPage = document.getElementById("detailPage");
  const detailContentEl = document.getElementById("detailContent");

  const content = detailContent[topic];
  if (content) {
    detailContentEl.innerHTML = `
      <h2>${content.title}</h2>
      <img 
        src="${content.image}" 
        alt="${content.title}"
        style="
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 12px;
          margin: 20px 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        "
      />
      ${content.content}
    `;
    detailPage.style.display = "block";
    document.body.style.overflow = "hidden";
    detailPage.scrollTop = 0;
  }
}

// Close detail page
function closeDetailPage() {
  const detailPage = document.getElementById("detailPage");
  detailPage.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close when clicking outside
window.onclick = function (event) {
  const detailPage = document.getElementById("detailPage");
  if (event.target == detailPage) {
    closeDetailPage();
  }
};

// Close with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeDetailPage();
  }
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".stat-card, .tip-card, .gallery-item, .video-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

//solutions
$('#solutionsCarousel').on('slid.bs.carousel', function (e) {
  var $activeItem = $(e.relatedTarget);
  var title = $activeItem.data('title');
  var desc = $activeItem.data('desc');

  // Cập nhật nội dung
  $('#mobileCaption .mobile-caption-title').html(title);
  $('#mobileCaption .mobile-caption-desc').html(desc);
});

emailjs.init("W_uViW_gk9L4xvk8t");

function handleSubmit(e) {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Kiểm tra dữ liệu
  if (!name || !email || !subject || !message) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  // Gửi email qua EmailJS
  emailjs
    .send("service_yz2org8", "template_k9cmq21", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    })
    .then(() => {
      alert("Gửi thành công! Cảm ơn bạn đã liên hệ.");
      e.target.reset();
    })
    .catch((error) => {
      console.error("Lỗi gửi:", error);
      alert("Gửi thất bại, vui lòng thử lại sau.");
    });
}
