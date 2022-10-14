/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Partners.module.scss';
import classNames from 'classnames/bind';
import { Fade } from 'react-awesome-reveal';

import FormValidation from './FormValidation';
import { partnersImg, factorIcon, registerIcon } from '../../assets/images';
import images from '../../assets/images';
import { Link as LinkScroll } from 'react-scroll';
const cx = classNames.bind(styles);
function Partners() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={partnersImg.fakeheader} alt="fake-header" />
            </div>
            <div name="#nong-ho" className={cx('block', 'household')}>
                <div className={cx('sub-title')}>Nông hộ</div>
                <div className={cx('household-wrapper')}>
                    <div className={cx('passion')}>
                        <Fade>
                            {' '}
                            <img className={cx('block1')} src={partnersImg.passion} alt="dam-me" />
                        </Fade>
                        <div className={cx('passion-text', 'block2', 'left-text')}>
                            <h4>Cùng chia sẻ tình yêu cà phê</h4>
                            <LinkScroll to='contact-info' className={cx('line-gold', 'readmore-link', 'bold-text')}>
                                LIÊN HỆ VỚI CHÚNG TÔI
                            </LinkScroll>
                        </div>
                    </div>
                    <div className={cx('benefit')}>
                        <h4>QUYỀN LỢI</h4>
                        <div className={cx('benefit-text')}>
                            <div className={cx('benefit-text-item')}>
                                <h5 className={cx('block1', 'line-gold')}>1. Trợ giá</h5>
                                <p className={cx('block2')}>
                                    Chúng tôi có các chính sách đồng hành trợ giá cùng các nông hộ tại địa phương, góp
                                    phần nâng cao chất lượng cuộc sống và kinh tế của họ thông qua con đường phát triển
                                    chuỗi giá trị cafe bền vững là để tất cả nông hộ có 1 lợi nhuận cao từ công việc cà
                                    phê.
                                </p>
                            </div>
                            <div className={cx('benefit-text-item')}>
                                <h5 className={cx('block1', 'line-gold')}>2. Thu Mua Bền Vững</h5>
                                <p className={cx('block2')}>
                                    Mỗi nông hộ là một mắt xích trong chuỗi cung ứng, những đối tác nông hộ hàng chục
                                    năm là minh chứng cho mối quan hệ được gắn kết bằng niềm tin và tâm huyết dành cho
                                    cà phê.
                                    <br />
                                    <br />
                                    Chúng tôi luôn nỗ lực mang đến lợi ích kinh tế lâu dài và tương lai ổn định cho bà
                                    con nông dân, tôn trọng giá trị và tâm huyết sản xuất.
                                </p>
                            </div>
                            <div className={cx('benefit-text-item')}>
                                <h5 className={cx('block1', 'line-gold')}>3. Hỗ trợ kỹ thuật</h5>
                                <p className={cx('block2')}>
                                    Hỗ trợ, huấn luyện đối tác nông hộ để có vùng nguyên liệu sạch, ổn định theo tiêu
                                    chuẩn 4C và UTZ, kiểm soát chất lượng toàn bộ quy trình, chia sẻ kinh nghiệm, truyền
                                    tải tâm huyết người trồng đến người dùng bằng những hạt cà phê chất lượng cao.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div name="#xuat-khau" className={cx('block', 'export')}>
                <div className={cx('sub-title')}>xuất khẩu</div>
                <div className={cx('export-wrapper')}>
                    <h2>
                        DANH MỤC
                        <br /> CÀ PHÊ
                    </h2>
                    <div className={cx('export-list')}>
                        <h6>Single Origin</h6>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Kona Coffee Beans</td>
                                    <td>Arabica</td>
                                    <td>Hawaii, USA</td>
                                </tr>
                                <tr>
                                    <td>Blue Mountain</td>
                                    <td>Arabica</td>
                                    <td>Jamaica</td>
                                </tr>
                                <tr>
                                    <td>Kenyan AA</td>
                                    <td>Arabica</td>
                                    <td>Kenya</td>
                                </tr>
                                <tr>
                                    <td>Peaberry Beans</td>
                                    <td>Arabica</td>
                                    <td>Tanzania</td>
                                </tr>
                                <tr>
                                    <td>Dark Roast Sumatra</td>
                                    <td>Arabica</td>
                                    <td>Indonesia</td>
                                </tr>
                                <tr>
                                    <td>Sulawesi Toraja</td>
                                    <td>Arabica</td>
                                    <td>Indonesia</td>
                                </tr>
                                <tr>
                                    <td>Kona Coffee Beans</td>
                                    <td>Arabica</td>
                                    <td>Hawaii, USA</td>
                                </tr>
                            </tbody>
                        </table>
                        <h6>Mixed</h6>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Kona Coffee Beans</td>
                                    <td>Arabica</td>
                                    <td>Hawaii, USA</td>
                                </tr>
                                <tr>
                                    <td>Blue Mountain</td>
                                    <td>Arabica</td>
                                    <td>Jamaica</td>
                                </tr>
                                <tr>
                                    <td>Kenyan AA</td>
                                    <td>Arabica</td>
                                    <td>Kenya</td>
                                </tr>
                                <tr>
                                    <td>Peaberry Beans</td>
                                    <td>Arabica</td>
                                    <td>Tanzania</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('export-description')}>
                        <p className={cx('block1')}>
                            Phát triển cà phê dựa vào bản sắc văn hoá bản địa, cũng như thổ nhưỡng, khí hậu và thiên
                            nhiên vùng trồng, vì vậy giá trị và đặc tính khác nhau của từng loại cà phê cũng vì thế mà
                            được bảo toàn.
                        </p>
                        <p className={cx('block1')}>
                            Các nghệ nhân của chúng tôi dành phần lớn thời gian và nỗ lực để nghiên cứu, lưu giữ bản sắc
                            của hạt cà phê, đưa ra tất cả tiềm năng sáng nhất hương vị vốn có trong mỗi loại cà phê, để
                            vị thanh ngọt tự nhiên và các sắc thái hương vị tinh tế nhất.
                        </p>
                        <LinkScroll to='contact-info' className={cx('line-gold', 'readmore-link', 'bold-text')}>
                            LIÊN HỆ VỚI CHÚNG TÔI
                        </LinkScroll>
                    </div>
                </div>
                <Fade>
                    {' '}
                    <img className={cx('img-export')} src={images.highlineImages2} alt="high-line" />
                </Fade>
            </div>
            <div name="#phan-phoi" className={cx('block', 'distribution')}>
                <h3 className={cx('sub-title')}>Phân phối</h3>
                <div className={cx('distribution-wrapper')}>
                    <div className={cx('distribution-text')}>
                        <h4 className={cx('center-text')}>CÁC KÊNH PHÂN PHỐI</h4>
                        <p className={cx('block1', 'center-text')}>
                            Liên hệ với chúng tôi nếu bạn muốn trở thành đối tác <br />
                            phân phối cà phê Minh Tiến
                        </p>
                    </div>
                    <div className={cx('distribution-slider')}>
                        <div className={cx('distribution-slider-item')}>
                            <Fade>
                                <img
                                    className={cx('distribution-slider-item-icon')}
                                    src={factorIcon[0].path}
                                    alt="coffee-icon"
                                />
                            </Fade>
                            <h5>CHUỖI SIÊU THỊ</h5>
                            <p className={cx('block1')}>
                                Intimex Home & Food
                                <br />
                                Hapro Mart
                                <br /> Seika Mart
                                <br /> Fuji Mart
                                <br /> Big C
                            </p>
                        </div>
                        <div className={cx('distribution-slider-item')}>
                            <Fade>
                                <img
                                    className={cx('distribution-slider-item-icon')}
                                    src={factorIcon[1].path}
                                    alt="flower-icon"
                                />
                            </Fade>
                            <h5>COFFEE SHOP</h5>
                            <p className={cx('block1')}>
                                31 Bà Triệu – P. Hàng Bài – Q. Hoàn Kiếm – Hà Nội.
                                <br />
                                75 Hàng Mã – P. Hàng Mã – Q. Hoàn Kiếm – Hà Nội.
                                <br /> 45B Lý Thường Kiệt – P. Trần Hưng Đạo – Q.Hoàn Kiếm – Hà Nội.
                                <br /> 45 Lê Đại Hành – P. Lê Đại Hành – Q. Hai Bà Trưng – Hà Nội.
                            </p>
                        </div>
                        <div className={cx('distribution-slider-item')}>
                            <Fade>
                                <img
                                    className={cx('distribution-slider-item-icon')}
                                    src={factorIcon[2].path}
                                    alt="leaf-icon"
                                />
                            </Fade>
                            <h5>NHÀ PHÂN PHỐI</h5>
                            <p className={cx('block1')}></p>
                        </div>
                    </div>
                    <LinkScroll to='contact-info' className={cx('readmore-link', 'line-gold', 'bold-text')}>
                        XEM CÁC ĐỊA ĐIỂM HIỆN ĐANG CÓ SẢN PHẨM MINH TIẾN
                    </LinkScroll>
                </div>
            </div>
            <div name="#dang-ky" className={cx('block', 'register')}>
                <h3 className={cx('sub-title')}>Đăng ký</h3>
                <div className={cx('distribution-wrapper')}>
                    <div className={cx('distribution-text')}>
                        <h4 className={cx('center-text')}>CÀ PHÊ MỖI NGÀY, MỌI LÚC, MỌI NƠI</h4>
                        <p className={cx('block1', 'center-text')}>
                            Hãy xem bộ sưu tập sản phẩm tuyển chọn của bạn ngay hôm nay.
                        </p>
                    </div>
                    <div className={cx('distribution-slider')}>
                        <div className={cx('distribution-slider-item')}>
                            <img
                                className={cx('distribution-slider-item-icon')}
                                src={registerIcon[0].path}
                                alt="coffee-icon"
                            />
                            <h5>CHỌN LOẠI CÀ PHÊ</h5>
                            <p className={cx('block1')}>Chọn loại cà phê đúng theo gu của bạn</p>
                        </div>
                        <div className={cx('distribution-slider-item')}>
                            <img
                                className={cx('distribution-slider-item-icon')}
                                src={registerIcon[1].path}
                                alt="flower-icon"
                            />
                            <h5>CHỌN LỊCH GIAO HÀNG</h5>
                            <p className={cx('block1')}>
                                Chọn thời gian để tách cà phê nóng hổi có mặt kịp thời ngay lúc bạn cần.
                            </p>
                        </div>
                        <div className={cx('distribution-slider-item')}>
                            <img
                                className={cx('distribution-slider-item-icon')}
                                src={registerIcon[2].path}
                                alt="leaf-icon"
                            />
                            <h5>GIAO HÀNG ĐẾN MUÔN NƠI</h5>
                            <p className={cx('block1')}>
                                Bất cứ nơi nào, bạn cũng có thể nhận cà phê tươi ngon ngay tức thì.
                            </p>
                        </div>
                    </div>
                    <LinkScroll to='contact-info' className={cx('readmore-link', 'line-gold', 'bold-text')}>
                        LIÊN HỆ VỚI CHÚNG TÔI ĐỂ BIẾT THÊM CHI TIẾT
                    </LinkScroll>
                </div>
            </div>
            <div className={cx('block', 'contact')}>
                <h3 className={cx('sub-title')}>Liên hệ</h3>
                <div className={cx('contact-wrapper')}>
                    <h4 className={cx('contact-text', 'left-text')}>
                        Cho chúng tôi biết chúng tôi có thể làm gì cho bạn
                    </h4>
                    <FormValidation />
                </div>
            </div>
            <div name='contact-info' className={cx('contact-info', 'left-text')}>
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <div className={cx('contact-info-description')}>
                    <p className={cx('c1')}>
                        <span>Cơ sở 1</span>Số 75 Hàng Mã – P. Hàng Mã – Q. Hoàn Kiếm – Hà Nội
                    </p>
                    <p className={cx('c2')}>
                        <span>Cơ sở 2</span>Số 137 Chùa Láng- P. Láng Thượng- Q. Đống Đa, Hà Nội
                    </p>
                    <p className={cx('c3')}>
                        <span>Trụ sở</span>Geleximco Building số 36 Hoàng Cầu,
                        <br />
                        P. Ô Chợ Dừa- Q. Đống Đa- Hà Nội
                    </p>
                    <p className={cx('c4')}>
                        <span>Phone</span>0372.589.589
                    </p>
                    <p className={cx('c5')}>
                        <span>Mobile</span>0242.20.44.666
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Partners;
