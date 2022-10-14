import styles from '../Post.module.scss';
import classNames from 'classnames/bind';
import { partnersImg, postImg3 } from '../../../../assets/images';
const cx = classNames.bind(styles);

function Post3() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={partnersImg.fakeheader} alt="fake-header" />
            </div>
            <div className={cx('block')}>
                <h3 className={cx('sub-title')}>BÀI VIẾT</h3>
                <div className={cx('post-wrapper')}>
                    <h4 className={cx('post-title', 'center-text')}>
                        MÔ HÌNH KINH TẾ TUẦN HOÀN CỦA MINH TIẾN LÊN SÓNG CHƯƠNG TRÌNH CNN
                    </h4>
                    <p className={cx('post-time', 'center-text')}>9 THÁNG 12, 2021</p>
                    <div className={cx('left-text')}>
                        <p className={cx('block1', 'bold-text')}>
                            Mô hình kinh tế tuần hoàn của Minh Tien Group được nhắc đến trong chương trình mang tên
                            “Innovate” của đài CNN về các sáng tạo đột phá đang được giới thiệu tại Triển lãm Thế giới
                            Expo 2020 Dubai.
                        </p>
                        <p className={cx('block1', 'bold-text')}>
                            MÔ HÌNH KINH TẾ TUẦN HOÀN “TỎA SÁNG” TRÊN TRUYỀN HÌNH QUỐC TẾ
                        </p>
                        <p className={cx('block1')}>
                            Đáng chú ý, Nhà Triển lãm Việt Nam với các sản phẩm hướng tới nền kinh tế tuần hoàn trong
                            sản xuất đã chiếm một thời lượng đáng kể của phóng sự.
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg3[0].path} alt="mo-hinh-kinh-te-tuan-hoan-cua-tap-doan-cafe-Minh-Tien" />
                            <p className={cx('img-description', 'center-text')}>
                                Mô hình Kinh tế tuần hoàn của Tập đoàn Cà phê Minh Tiến là “tâm điểm” chú ý tại Nhà
                                triển lãm Việt Nam (Nguồn: FPT)
                            </p>
                        </div>
                        <p className={cx('block1')}>
                            Trong đó, mô hình kinh tế tuần hoàn xoay quanh cây cà phê của Tập đoàn Cà phê Minh Tiến là
                            điểm sáng thu hút sự chú ý của đông đảo khách thăm quan và góp phần tạo nên thành công cho
                            Nhà Triển lãm Việt Nam năm nay.
                        </p>
                        <p className={cx('block1')}>
                            Cụ thể, mô hình này vận hành theo nguyên lý tận dụng giá trị của phụ phẩm từ khâu sản xuất
                            trước làm nguyên liệu đầu vào cho các khâu sản xuất tiếp theo để tái sử dụng hiệu quả, giảm
                            thiểu khai thác tài nguyên tối đa, bảo vệ môi trường trong sản xuất nông nghiệp.
                        </p>
                        <p className={cx('block1')}>
                            Đến với triển lãm năm nay, Tập đoàn Cà phê Minh Tiến mong muốn thúc đẩy giá trị của mô hình
                            kinh tế tuần hoàn tới bạn bè quốc tế; tận dụng mọi cơ hội hợp tác tại thị trường vùng Vịnh
                            giàu tiềm năng; đặc biệt, mang tới thế giới một cái nhìn khác về nền nông nghiệp Việt Nam
                            hiện đại và bền vững.
                        </p>
                        <p className={cx('block1', 'bold-text')}>VIỆT NAM – “NGÔI SAO MỚI” CỦA EXPO 2020 DUBAI</p>
                        <p className={cx('block1')}>
                            Giữa các dự án mang hàm lượng khoa học công nghệ cao đến từ các nền kinh tế hàng đầu thế
                            giới, Việt Nam là một điểm sáng bất ngờ.
                        </p>
                        <p className={cx('block1')}>
                            Mở đầu phần giới thiệu về Việt Nam bằng những hình ảnh ấn tượng của Nhà Triển lãm Việt Nam
                            tại Expo 2020 Dubai, nữ phóng viên Eleni Giokos của CNN bày tỏ sự ngạc nhiên khi bước vào
                            không gian văn hóa đậm chất Việt Nam.
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg3[1].path} alt="mot-so-thanh-tuu-khoa-hoc-noi-bat-cua-Viet-Nam" />
                            <p className={cx('img-description', 'center-text')}>
                                Bên cạnh quảng bá văn hóa, Triển lãm Việt Nam còn giới thiệu một số thành tựu khoa học
                                công nghệ nổi bật của đất nước (Nguồn: FPT)
                            </p>
                        </div>
                        <p className={cx('block1')}>
                            Đây cũng là một điểm mới mà Bộ Văn hóa, Thể thao và Du lịch – đơn vị chủ trì Nhà Triển lãm
                            Việt Nam triển khai so với các kỳ tham dự triển lãm trước, với mong muốn đem lại một hình
                            ảnh toàn diện hơn của Việt Nam tới thế giới.
                        </p>
                        <p className={cx('block1')}>
                            Trong kỳ Triển lãm thế giới lần đầu tiên tổ chức tại Trung Đông từ ngày 1/10/2021-31/3/2022,
                            hơn 190 quốc gia tham gia đều kỳ vọng có thể để lại những ấn tượng sâu đậm nhất không chỉ về
                            văn hóa, bản sắc mà còn cả sự đóng góp vào tiến trình phát triển của nhân loại.
                        </p>
                        <p className={cx('block1')}>
                            Các phát kiến được đề cập trong phóng sự của CNN được chọn lựa từ hàng trăm sáng tạo mà các
                            quốc gia đem tới Expo 2020 Dubai.
                        </p>
                        <p className={cx('block1')}>
                            Đó là mô hình nông nghiệp 3D của Hà Lan, máy bay điện chở khách đầu tiên trên thế giới hạ và
                            cất cánh theo chiều thẳng đứng, hệ thống vận chuyển hàng tự động dưới lòng đất của Đức, sử
                            dụng trí tuệ nhân tạo để chẩn đoán bệnh qua điện thoại thông minh của Anh…
                        </p>
                        <p className={cx('block1')}>
                            Trong lịch sử 170 năm của mình, Triển lãm Thế giới Expo 2020 Dubai từng là nơi ra mắt nhiều
                            phát minh, thành tựu lớn của nhân loại như tháp Eiffel, điện thoại di động, ti vi phát sóng
                            trực tiếp, khóa kéo…
                        </p>
                        <p className={cx('block1')}>
                            Với chủ đề “Kết nối trí tuệ, kiến tạo tương lai”, Expo 2020 Dubai kêu gọi những đóng góp
                            thân thiện môi trường và mang tính bền vững cao cho các thế hệ mai sau.
                        </p>
                        <p className={cx('block1')}>
                            Từ nền tảng EXPO, những sản phẩm “không để lại rác thải” như giày thể thao làm từ bã cà phê
                            của Việt Nam sẽ nhanh chóng trở nên phổ biến và trở thành một phần không thể thiếu của cuộc
                            sống hiện đại.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post3;
