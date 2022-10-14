import styles from '../Post.module.scss';
import classNames from 'classnames/bind';
import { partnersImg, postImg2 } from '../../../../assets/images';
const cx = classNames.bind(styles);

function Post2() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={partnersImg.fakeheader} alt="fake-header" />
            </div>
            <div className={cx('block')}>
                <h3 className={cx('sub-title')}>BÀI VIẾT</h3>
                <div className={cx('post-wrapper')}>
                    <h4 className={cx('post-title', 'center-text')}>
                        CHIẾN LƯỢC MỚI CHO CÀ PHÊ VIỆT TIẾN VÀO THỊ TRƯỜNG TRUNG ĐÔNG
                    </h4>
                    <p className={cx('post-time', 'center-text')}>9 THÁNG 12, 2021</p>
                    <div className={cx('left-text')}>
                        <p className={cx('block1', 'bold-text')}>
                            Sau thành công tại Triển lãm Expo 2020 Dubai, Tập đoàn cà phê Minh Tiến đã lọt vào “mắt
                            xanh” của hàng loạt hãng thông tấn quốc tế, trong đó có tờ FoodNavigator-Asia…
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg2[0].path} alt="minh-tien-xuat-hien-tren-trang-chu-FoodNavigator-asia" />
                            <p className={cx('img-description', 'center-text')}>
                                Tập đoàn Cà phê Minh Tiến xuất hiện nổi bật trên trang chủ của tờ FoodNavigator-Asia.
                                (Nguồn: FoodNavigator-Asia).
                            </p>
                        </div>
                        <p className={cx('block1')}>
                            Theo chuyên trang tin tức ngành F&B của Singapore – FoodNavigator-Asia đưa tin về mô hình
                            kinh tế tuần hoàn và hệ sinh thái sản phẩm cũng như chiến lược mở rộng thị trường của Tập
                            đoàn cà phê Minh Tiến. Bài thể hiện góc nhìn của nhà báo chuyên theo dõi mảng F&B khu vực
                            Châu Á – Guan Yu Lim.
                        </p>
                        <p className={cx('block1')}>
                            Tại lễ tôn vinh sản phẩm “Hàng Việt Nam được người tiêu dùng yêu thích” năm 2021, Cà phê hòa
                            tan Coffilia 3in1 “Đại ngàn hòa quyện” của Minh Tiến được vinh danh nằm trong Top 1 những
                            sản phẩm xuất sắc và đạt đủ các tiêu chí bình chọn.
                        </p>
                        <p className={cx('block1', 'bold-text')}>TRUNG ĐÔNG, “MIỀN ĐẤT HỨA” CHO CÀ PHÊ VIỆT</p>
                        <p className={cx('block1')}>
                            Sau thành công tại Triển lãm Expo 2020 Dubai, Tập đoàn cà phê Minh Tiến đã lọt vào “mắt
                            xanh” của hàng loạt hãng thông tấn quốc tế, trong đó có tờ FoodNavigator-Asia.
                        </p>
                        <p className={cx('block1')}>
                            Mới đây, trong buổi phỏng vấn với nhà báo Guan Yu Lim về mô hình kinh tế tuần hoàn và kế
                            hoạch phát triển tại thị trường Trung Đông, bà Nguyễn Thị Hồng Minh – Chủ tịch Tập đoàn cà
                            phê Minh Tiến khẳng định: “Trung Đông là thị trường giàu tiềm năng, các doanh nghiệp đều
                            muốn thâm nhập thị trường này và Minh Tiến cũng không là ngoại lệ.”
                        </p>
                        <p className={cx('block1')}>
                            Theo đó, Minh Tiến đang từng bước xây dựng chiến lược thâm nhập thị trường một cách bài bản,
                            nghiên cứu sản xuất mặt hàng cà phê có chất lượng, quy cách, mẫu mã phù hợp với thói quen
                            tiêu dùng và tiêu chuẩn Halal của các nước Hồi giáo.
                        </p>
                        <p className={cx('block1')}>
                            “Chiến lược mở rộng thị trường của chúng tôi là cung cấp các sản phẩm chất lượng cao, hợp
                            khẩu vị của người Trung Đông, có truy xuất nguồn gốc, tốt cho sức khỏe và thân thiện với môi
                            trường. Nếu nhận được tín hiệu tốt, Minh Tiến sẽ nghiên cứu đẩy mạnh đầu tư vào các thị
                            trường này.”, bà Nguyễn Thị Hồng Minh chia sẻ.
                        </p>
                        <p className={cx('block1')}>
                            Được biết, nhà báo Guan Yu Lim là cây bút kỳ cựu với hơn 1000 bài viết trên tờ
                            FoodNavigator-Asia, chuyên đưa tin, định hướng, phân tích tin tức ngành F&B tại thị trường
                            Trung Đông, Trung Quốc, Nhật Bản và các nước Đông Nam Á.
                        </p>
                        <p className={cx('block1', 'bold-text')}>CƠ HỘI “VÀNG” CHO DOANH NGHIỆP CÀ PHÊ</p>
                        <p className={cx('block1')}>
                            Do điều kiện khí hậu và thổ nhưỡng không phù hợp để canh tác cà phê, trên 90% lượng cà phê
                            tiêu thụ tại Trung Đông được nhập khẩu từ các quốc gia Brazil, Việt Nam và Châu Âu. Đời sống
                            người dân ở mức cao và nhu cầu tiêu thụ cà phê lớn khiến nơi này trở thành “miền đất hứa”
                            cho xuất khẩu cà phê nếu doanh nghiệp Việt Nam có chiến lược tiếp cận đúng đắn.
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg2[1].path} alt="khong-khi-nhon-nhip-tai-mot-quan-ca-phe-dubai" />
                            <p className={cx('img-description', 'center-text')}>
                                Không khí nhộn nhịp tại một quán cà phê tại Dubai (Nguồn: Allegra World Coffee Portal).
                            </p>
                        </div>
                        <p className={cx('block1')}>
                            Cụ thể, Kuwait và các tiểu Vương quốc Ả Rập Thống nhất (UAE) được nhận định có nhiều tiềm
                            năng trong thương mại, đầu tư cho ngành cà phê Việt. Thuộc top 10 quốc gia có GDP cao nhất
                            toàn cầu, tổng kim ngạch nhập khẩu hàng năm của Kuwait xấp xỉ 30 tỷ USD, bao gồm các mặt
                            hàng như nông sản, thực phẩm, điện tử, máy móc… Ngoài ra, quốc gia này có chính sách thuế
                            nhập khẩu ngoài Hiệp hội Hợp tác Vùng Vịnh (GCC) rất ưu đãi, chỉ từ 0%-5%. Đây là điều kiện
                            thuận lợi cho những quốc gia như Việt Nam thúc đẩy xuất khẩu các loại hàng hoá thế mạnh,
                            trong đó có cà phê.
                        </p>
                        <p className={cx('block1')}>
                            Trung tâm thương mại và tài chính của khu vực Trung Đông, UAE là nơi trung chuyển và tái
                            xuất hàng hóa lớn thứ 3 thế giới. Gia nhập thành công vào thị trường này sẽ tạo tiền đề cho
                            các doanh nghiệp Việt tiếp tục mở rộng tới các thị trường lân cận.
                        </p>
                        <p className={cx('block1')}>
                            Hơn nữa, Trung Đông còn được biết đến như một khu vực dẫn đầu trong các công tác bảo vệ môi
                            trường, ứng phó với biến đổi khí hậu, đặc biệt ưa chuộng những sản phẩm “xanh” và tốt cho
                            sức khỏe. Đây được coi là lợi thế của Minh Tiến khi đã áp dụng thành công mô hình kinh tế
                            tuần hoàn vào sản xuất và tạo nên hệ sinh thái sản phẩm phù hợp với người tiêu dùng tại đây.
                        </p>
                        <p className={cx('block1')}>
                            Được biết, mô hình kinh tế tuần hoàn của Minh Tiến vận hành theo nguyên lý tận dụng giá trị
                            của phụ phẩm từ khâu sản xuất trước làm nguyên liệu đầu vào cho các khâu sản xuất tiếp theo.
                            Nhờ đó, doanh nghiệp đã khai thác trọn vẹn “tinh hoa” của sản phẩm, giảm thiểu tối đa tác
                            động tới môi trường.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post2;
