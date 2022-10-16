import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CoreValue.module.scss';
import images from '../../../assets/images';
const cx = classNames.bind(styles);
function CoreValue() {
    const [slide, setSlide] = useState(0);
    const handleSlide = (arg) => {
        setSlide(arg);
    };
    return (
        <div className={cx('core-value-wrapper')}>
            <nav className={cx('core-value-nav')}>
                <p>Chúng tôi duy trì thương hiệu dựa trên các giá trị cốt lõi</p>
                <ul>
                    <li
                        className={cx(`${slide === 0 ? 'active' : ''}`)}
                        onClick={() => {
                            handleSlide(0);
                        }}
                    >
                        Gia Đình
                    </li>
                    <li
                        className={cx(`${slide === 1 ? 'active' : ''}`)}
                        onClick={() => {
                            handleSlide(1);
                        }}
                    >
                        Đam mê
                    </li>
                    <li
                        className={cx(`${slide === 2 ? 'active' : ''}`)}
                        onClick={() => {
                            handleSlide(2);
                        }}
                    >
                        Bền vững
                    </li>
                </ul>
            </nav>
            <div className={cx('core-value-content')}>
                <div
                    className={cx('core-value-item', `${slide === 0 ? 'active' : ''}`)}
                    style={{ left: `-${slide * 33.33333}%` }}
                >
                    <div className={cx('core-value-media')}>
                        <div className={cx('core-value-img')}>
                            <img src={images.corevalue1} alt="gia-tri-cot-loi-1" />
                        </div>
                        <p className={cx('core-value-slogan')}>
                            “Chúng tôi tạo ra một gia đình lớn nơi có nền văn hóa ấm áp và thân thuộc, nơi mọi thành
                            viên cùng nhau theo đuổi đam mê và chăm chút cho từng sản phẩm nhằm mang đến những tách cafe
                            chất lượng và trải nghiệm thoải mái, gắn kết mọi người bằng niềm vui và sự sẻ chia.”
                        </p>
                    </div>
                    <div className={cx('core-value-tab')}>
                        <article>
                            <h5>CHIA SẺ</h5>
                            <p>
                                Chia sẻ trách nhiệm và niềm đam mê với công việc và tâm huyết, tình yêu chân chính với
                                cafe chất lượng đến với người dùng.
                            </p>
                        </article>
                        <article>
                            <h5>GẮN KẾT</h5>
                            <p>
                                Chúng tôi luôn đề cao tri thức tập thể, tinh thần chiến thắng và sự gắn kết của các
                                thành viên.
                            </p>
                        </article>
                        <article>
                            <h5>TỰ THỨC</h5>
                            <p>
                                Luôn tự thức trong công việc nhằm đảm bảo chất lượng cao nhất. Từ ý thức cao của từng
                                thành viên tạo dựng nên ý thức và chuẩn mực tập thể.
                            </p>
                        </article>
                    </div>
                </div>
                <div
                    className={cx('core-value-item', `${slide === 1 ? 'active' : ''}`)}
                    style={{ left: `-${slide * 33.33333}%` }}
                >
                    <div className={cx('core-value-media')}>
                        <div className={cx('core-value-img')}>
                            <img src={images.corevalue2} alt="gia-tri-cot-loi-1" />
                        </div>
                        <p className={cx('core-value-slogan')}>
                            “Được tạo ra bởi tình yêu lớn đối với cây cafe và người trồng cà phê Việt Nam. Minh Tiến
                            dùng đam mê tạo nên ý nghĩa đích thực cho từng tách cà phê gửi đến khách hàng. Những ý nghĩa
                            này thăng hoa, tạo nên hạnh phúc và niềm vui nơi thực khách.”
                        </p>
                    </div>
                    <div className={cx('core-value-tab')}>
                        <article>
                            <h5>TÂM HUYẾT</h5>
                            <p>
                                Chúng tôi sử dụng động lực và cam kết của mình để tiếp thêm năng lượng, gắn kết và
                                truyền cảm hứng cho người khác cùng theo đuổi mục tiêu chung.
                            </p>
                        </article>
                        <article>
                            <h5>KIÊN TRÌ</h5>
                            <p>
                                Chúng tôi kiên trì trong hành trình nâng cao phẩm chất và giá trị thực của hạt cafe, bên
                                cạnh đó giúp người dùng tái định nghĩa và khám phá lại hương vị cà phê chuẩn mực mỗi
                                ngày.
                            </p>
                        </article>
                        <article>
                            <h5>SÁNG TẠO</h5>
                            <p>
                                Chủ động tạo cơ hội bằng cách liên kết các giá trị với đam mê sáng tạo, tự cải tạo hệ
                                thống sản xuất nhằm tăng chất lượng – năng suất đáp ứng trải nghiệm đa dạng người dùng.
                            </p>
                        </article>
                    </div>
                </div>
                <div
                    className={cx('core-value-item', `${slide === 2 ? 'active' : ''}`)}
                    style={{ left: `-${slide * 33.33333}%` }}
                >
                    <div className={cx('core-value-media')}>
                        <div className={cx('core-value-img')}>
                            <img src={images.corevalue3} alt="gia-tri-cot-loi-1" />
                        </div>
                        <p className={cx('core-value-slogan')}>
                            “Phát triển hệ sinh thái bền vững thông qua các yếu tố xã hội, kinh tế, môi trường. Minh
                            Tiến liên kết chặt chẽ với Nông hộ và phát triển các vùng trồng để đảm bảo hạt cafe có phẩm
                            chất cao – ổn định. Chúng tôi đồng hành xây dựng giá trị cafe cao đảm bảo lợi ích lâu dài
                            cho nông hộ trong chuỗi cung ứng.”
                        </p>
                    </div>
                    <div className={cx('core-value-tab')}>
                        <article>
                            <h5>ĐỒNG HÀNH</h5>
                            <p>
                                Mỗi nông hộ là một mối liên kết đặc biệt và là một đối tác đồng hành trong trong sứ mệnh
                                sản xuất hạt cà phê chất lượng.
                            </p>
                        </article>
                        <article>
                            <h5>CAM KẾT</h5>
                            <p>
                                Không có con đường nào khác để tăng giá trị cafe bằng việc phát triển cafe chất lượng
                                cao đáp ứng tiêu chuẩn thế giới, đó là sự cam kết không chỉ ở chất lượng sản phẩm đáp
                                ứng nhu cầu trải nghiệm người dùng mà còn ở tính bền vững trong mối quan hệ với Nông hộ.
                            </p>
                        </article>
                        <article>
                            <h5>NGUYÊN BẢN</h5>
                            <p>
                                Mỗi một sản phẩm được làm ra từ cái tâm của người làm nghề, chân thật và minh bạch, từ
                                vùng nguyên liệu, quá trình sản xuất, khâu chế biến và kiểm soát chất lượng đến hương vị
                                cà phê 100% nguyên bản.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoreValue;
