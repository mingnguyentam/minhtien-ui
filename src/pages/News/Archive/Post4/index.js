import styles from '../Post.module.scss';
import classNames from 'classnames/bind';
import { partnersImg, postImg4 } from '../../../../assets/images';
const cx = classNames.bind(styles);

function Post4() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={partnersImg.fakeheader} alt="fake-header" />
            </div>
            <div className={cx('block')}>
                <h3 className={cx('sub-title')}>BÀI VIẾT</h3>
                <div className={cx('post-wrapper')}>
                    <h4 className={cx('post-title', 'center-text')}>KUWAIT VÀ NHỮNG ĐIỀU CÓ THỂ BẠN CHƯA BIẾT</h4>
                    <p className={cx('post-time', 'center-text')}>12 THÁNG 11, 2021</p>
                    <div className={cx('left-text')}>
                        <p className={cx('block1', 'bold-text')}>
                            Không chỉ là quốc gia nổi tiếng về độ thịnh vượng, còn nhiều điều thú vị về Kuwait hẳn sẽ
                            khiến bạn phải bất ngờ. Kuwait được biết đến là một đất nước nằm ở phía bắc ở Đông Ả-rập,
                            ngay cạnh vịnh Ba Tư, sở hữu nguồn tài nguyên dầu mỏ khổng lồ và những công trình “đẳng cấp
                            thế giới”. Nhưng những điều bạn biết chưa phải là tất cả. Có nhiều điều thú vị về Kuwait mà
                            ngay cả người bản địa đôi khi còn không khỏi ngạc nhiên khi nghe tới.
                        </p>
                        <p className={cx('block1', 'bold-text')}>MỘT CƯỜNG QUỐC SIÊU GIÀU CỦA THẬP KỶ TRƯỚC</p>
                        <p className={cx('block1')}>
                            Kuwait là một nền kinh tế tương đối cởi mở, nhỏ và người dân tận hưởng một GDP bình quân đầu
                            người (PPP) 67.970 đô-la. Theo báo cáo World Bank, Kuwait có thứ hạng giàu có ở mức thứ 3
                            tại khu vực Trung Đông và mức thứ 5 trên toàn cầu trong thập kỷ trước.
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg4[0].path} alt="toan-canh-thanh-pho-kuwait" />
                            <p className={cx('img-description', 'center-text')}>
                                Toàn cảnh thủ phủ thành phố Kuwait (Nguồn: Vietnam Embassy at Kuwait).
                            </p>
                        </div>
                        <p className={cx('block1', 'bold-text')}>SỞ HỮU ĐỒNG TIỀN GIÁ TRỊ NHẤT THẾ GIỚI</p>
                        <p className={cx('block1')}>
                            Đơn vị tiền tệ của Kuwait – đồng Dinar (KWD) – được công nhận là một trong những đơn vị tiền
                            tệ có giá trị nhất trên thế giới dựa trên mệnh giá mặt bằng chung. Nền kinh tế Kuwait thịnh
                            vượng và ổn định chủ yếu nhờ vào hoạt động xuất khẩu tài nguyên dầu mỏ. Nhu cầu năng lượng
                            toàn cầu khiến đơn vị tiền tệ của Kuwait có giá trị lớn là điều dễ hiểu. Với 1 USD, bạn sẽ
                            chỉ đổi được 0.3 KWD mà thôi.
                        </p>
                        <p className={cx('block1', 'bold-text')}>QUAN HỆ NGOẠI GIAO VỮNG CHẮC VỚI VIỆT NAM</p>
                        <p className={cx('block1')}>
                            Việt Nam – Kuwait chính thức thiết lập quan hệ ngoại giao ngày 10/01/1976. Kuwait là một
                            trong những quốc gia đầu tiên ở Trung Đông và là nước đầu tiên trong khối Hội đồng hợp tác
                            vùng Vịnh (GCC) thiết lập quan hệ ngoại giao với Việt Nam ngay sau khi Việt Nam giành được
                            độc lập, thống nhất đất nước vào năm 1975.
                        </p>
                        <div className={cx('post-img')}>
                            <img
                                src={postImg4[1].path}
                                alt="quoc-vuong-kuwait-chao-dong-nguyen-chu-tich-nuoc-le-duc-anh"
                            />
                            <p className={cx('img-description', 'center-text')}>
                                Quốc vương Kuwait Jaber Al-ahmed Al-sabah đón chào Chủ tịch nước Lê Đức Anh và phu nhân
                                trong chuyến thăm hữu nghị vào ngày 1/5/1995 (Nguồn: TTXVN).
                            </p>
                        </div>
                        <p className={cx('block1', 'bold-text')}>SỞ HỮU BIỂU TƯỢNG VIỄN THÔNG</p>
                        <p className={cx('block1')}>
                            Tòa tháp Tự do, là một công trình viễn thông có độ cao 372 mét nằm ở trung tâm thành phố
                            Kuwait. Tòa tháp này nằm trong top 05 tòa tháp viễn thông, top 39 công trình xây dựng cao
                            nhất thế giới Ngoài ra, tòa tháp Tự do còn cao hơn tháp Eiffel hơn 10%.
                        </p>
                        <p className={cx('block1', 'bold-text')}>THÁP CHỌC TRỜI CAO NHẤT THẾ GIỚI TRONG TƯƠNG LAI</p>
                        <p className={cx('block1')}>
                            Kuwait hiện đang trong quá trình xây dựng tòa nhà chọc trời cao nhất thế giới. Tòa tháp Burj
                            Mubarak al-Kabir dự kiến có độ cao 1,001m và khánh thành vào năm 2030. Tuyệt tác kiến trúc
                            này được lấy cảm hứng từ chuỗi giai thoại “Ngàn lẻ một đêm” với tham vọng truyền tải sự diệu
                            kì của thế giới Trung Đông.
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg4[2].path} alt="sieu-toa-thap-choc-troi-burj-mubarak-al-kabir" />
                            <p className={cx('img-description', 'center-text')}>
                                Siêu tòa tháp chọc trời Burj Mubarak al-Kabir trong quần thể đô thị tương lai Madinat
                                al-Harper (Nguồn: ResearchGate).
                            </p>
                        </div>
                        <p className={cx('block1', 'bold-text')}>
                            SỞ HỮU NGUỒN TÀI NGUYÊN DẦU MỎ LỚN, TRONG TOP 10 THẾ GIỚI
                        </p>
                        <p className={cx('block1')}>
                            Nền kinh tế Kuwait rất thịnh vượng khi hoạt động khai thác và xuất khẩu xăng dầu đem lại hơn
                            90% nguồn thu nhập cho chính phủ Kuwait. Hiện tại, năng lực khai thác dầu khoáng trung bình
                            trong một ngày của Kuwait lên tới 3.15 triệu thùng. Theo chiến lược phát triển đến năm 2040,
                            Kuwait sẽ đạt được sản lượng trung bình một ngày lên 4.75 triệu thùng.
                        </p>
                        <p className={cx('block1', 'bold-text')}>KHU CÔNG NGHIỆP KHAI THÁC DẦU MỎ KHỔNG LỒ</p>
                        <p className={cx('block1')}>
                            Mỏ dầu Burgan nằm ở phía Đông Nam trong địa phận Kuwait là mỏ dầu lớn thứ 2 của thế giới,
                            chỉ sau mỏ dầu Ghawar của Ả-rập-xê-út. Nhờ vậy, Kuwait có lượng dự trữ tài nguyên dầu mỏ lớn
                            thứ 6 thế giới, với hơn 104 tỉ thùng theo báo cáo vào năm 2020, trong đó hơn 70 tỉ thùng
                            được lưu trữ ở Burgan. Dù đứng từ xa, nhưng những ngọn lửa nghi ngút cùng nhiều cột khói
                            trải dài cả vùng vẫn có thể nhìn rõ bằng mắt thường, chắc hẳn là một cảnh tượng choáng ngợp.
                        </p>
                        <p className={cx('block1', 'bold-text')}>ROBOT TRỰC TIẾP PHẪU THUẬT, ĐIỀU TRỊ CHO BỆNH NHÂN</p>
                        <p className={cx('block1')}>
                            Tại Kuwait, các bác sĩ đã có thể phẫu thuật hoàn toàn bằng sự trợ giúp của robot Da Vinci
                            trong quá trình điều trị cho bệnh nhân. Các bệnh viện đã có hệ thống nhập dữ liệu đồng bộ,
                            trong đó mọi thành viên đội ngũ y bác sĩ đều sử dụng để phục vụ chuyên môn. Kế hoạch Tầm
                            nhìn 2035 của Kuwait sẽ đưa quốc gia dầu mỏ đa dạng hóa nền kinh tế của mình trong đó chuyển
                            đổi số là chiến lược chủ đạo và ngành y tế là mảng đầu tư trọng tâm.
                        </p>
                        <p className={cx('block1', 'bold-text')}>VĂN HÓA PHONG PHÚ, ĐA PHƯƠNG</p>
                        <p className={cx('block1')}>
                            Trung tâm văn hóa Sheik Jaber Al-Ahmad là một nhà hát lớn cũng như là một trung tâm văn hóa
                            của thủ phủ Kuwait. Tổng diện tích toàn bộ công trình hoành tráng, uy nghi này là 214,000
                            mét vuông.
                        </p>
                        <p className={cx('block1', 'bold-text')}>HOLLYWOOD CỦA VÙNG VỊNH</p>
                        <p className={cx('block1')}>
                            Phim truyền hình do Kuwait sản xuất là những bộ phim truyền hình ăn khách nhất của khu vực
                            Vùng Vịnh, hấp dẫn cả những đôi tượng khán giả ở Tunisia. Có thể nói, Kuwait là nơi tập
                            trung phần lớn ngành phim ảnh của cả vùng vịnh khi các phim truyền hình được quay và sản
                            xuất tại Kuwait.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post4;
