import styles from '../Post.module.scss';
import classNames from 'classnames/bind';
import { partnersImg, postImg1 } from '../../../../assets/images';
const cx = classNames.bind(styles);

function Post1() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={partnersImg.fakeheader} alt="fake-header" />
            </div>
            <div className={cx('block')}>
                <h3 className={cx('sub-title')}>BÀI VIẾT</h3>
                <div className={cx('post-wrapper')}>
                    <h4 className={cx('post-title', 'center-text')}>
                        COFFILIA ĐƯỢC VINH DANH TOP 1 HÀNG VIỆT NAM ĐƯỢC NGƯỜI TIÊU DÙNG YÊU THÍCH
                    </h4>
                    <p className={cx('post-time', 'center-text')}>9 THÁNG 12, 2021</p>
                    <div className={cx('left-text')}>
                        <p className={cx('block1', 'bold-text')}>
                            Ngày 10/11, cà phê hòa tan Coffilia 3in1 được vinh danh là Top 1 “Hàng Việt Nam được người
                            tiêu dùng yêu thích”, khẳng định chất lượng sản phẩm và uy tín của Tập đoàn Cà phê Minh
                            Tiến.
                        </p>
                        <p className={cx('block1')}>
                            Chương trình bình chọn “Hàng Việt Nam được người tiêu dùng yêu thích” năm 2021 là hoạt động
                            tiêu biểu hưởng ứng cuộc vận động “Người Việt Nam ưu tiên dùng hàng Việt Nam” do Bộ Chính
                            trị phát động, nhằm tuyên truyền, nâng cao nhận thức cho các doanh nghiệp có ý thức sản xuất
                            hàng hóa chất lượng cao, khẳng định thương hiệu và nâng cao niềm tự hào về sản phẩm Việt
                            Nam.
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg1[0].path} alt="coffilia-vinh-danh-top-1-hang-viet-nam" />
                            <p className={cx('img-description', 'center-text')}>
                                Sản phẩm Cà phê hòa tan Coffilia được vinh danh Top 1 “Hàng Việt Nam được người tiêu
                                dùng yêu thích”
                            </p>
                        </div>
                        <p className={cx('block1')}>
                            Hoạt động bình chọn được tổ chức từ tháng 06 đến tháng 11/2021 thông qua website
                            binhchonhangviet.com.vn và phiếu bình chọn trực tiếp. Bên cạnh đánh giá từ người tiêu dùng,
                            Ban tổ chức chấm điểm theo những tiêu chí như: Tăng trưởng trong hoạt động kinh doanh; Nộp
                            ngân sách nhà nước đủ, kịp thời; Tuân thủ các quy định của pháp luật về doanh nghiệp, đầu
                            tư, chế độ đối với người lao động; Tích cực tham gia đóng góp cho cộng đồng, xã hội.
                        </p>
                        <p className={cx('block1')}>
                            Tại lễ tôn vinh sản phẩm “Hàng Việt Nam được người tiêu dùng yêu thích” năm 2021, Cà phê hòa
                            tan Coffilia 3in1 “Đại ngàn hòa quyện” của Minh Tiến được vinh danh nằm trong Top 1 những
                            sản phẩm xuất sắc và đạt đủ các tiêu chí bình chọn.
                        </p>
                        <p className={cx('block1')}>
                            Bà Nguyễn Thị Hồng Minh, Chủ tịch Hội đồng quản trị Tập đoàn Cà phê Minh Tiến chia sẻ: “Danh
                            hiệu “Top 1 Hàng Việt Nam được người tiêu dùng yêu thích” là niềm vinh dự và tự hào của Tập
                            đoàn; đồng thời, chứng minh sự hài lòng và tin dùng của khách hàng với sản phẩm Cà phê hòa
                            tan Coffilia. Danh hiệu không chỉ giúp Minh Tiến khẳng định uy tín, vị thế thương hiệu mà
                            còn là chìa khóa mở ra những cơ hội mới để doanh nghiệp đứng vững tại thị trường nội địa và
                            tự tin vươn ra quốc tế.”
                        </p>
                        <div className={cx('post-img')}>
                            <img src={postImg1[1].path} alt="coffilia-vinh-danh-top-1-hang-viet-nam" />
                            <p className={cx('img-description', 'center-text')}>
                                Các dòng sản phẩm Cà phê hòa tan Coffilia.
                            </p>
                        </div>
                        <p className={cx('block1')}>
                            Với tôn chỉ “Làm thật – Chất lượng thật”, sản phẩm Cà phê hòa tan 3in1 Coffilia “Đại ngàn
                            hòa quyện” được cấu thành từ những hạt cà phê tinh túy vùng Tây Bắc, Lâm Đồng, Khe Sanh cho
                            tới Parksong (Lào) và đạt các tiêu chuẩn khắt khe của quốc tế như 4C và UTZ.
                        </p>
                        <p className={cx('block1')}>
                            Ứng dụng công nghệ sấy lạnh hiện đại của Nhật Bản, không sử dụng hương liệu và chất bảo
                            quản, sản phẩm lưu giữ hầu hết hương vị nguyên bản của hạt cà phê. Ngoài ra, thương hiệu cà
                            phê Coffilia còn được chọn làm tặng phẩm ngoại giao của Việt Nam tại Dubai, Kuwait, Áo, Bỉ
                            và nhiều quốc gia khác.
                        </p>
                        <p className={cx('block1')}>
                            Tập đoàn Cà phê Minh Tiến, doanh nghiệp có bề dày 30 năm lịch sử là một trong những đơn vị
                            xuất khẩu cà phê hàng đầu Việt Nam. Nhờ khát khao nâng tầm chất lượng hạt cà phê Việt cùng
                            việc liên tục trau dồi, học hỏi kinh nghiệm từ các vùng trồng cà phê khác trên thế giới,
                            Minh Tiến hiện là đối tác tin tưởng của nhiều tập đoàn cà phê lớn trên toàn cầu.
                        </p>
                        <p className={cx('block1')}>
                            Đồng thời, Minh Tiến là doanh nghiệp tiên phong áp dụng mô hình kinh tế tuần hoàn trong sản
                            xuất cà phê, hướng tới phát triển bền vững, giảm thiểu tối đa tác động tiêu cực tới môi
                            trường.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post1;
