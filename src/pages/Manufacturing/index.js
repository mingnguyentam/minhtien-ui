import styles from './Manufacturing.module.scss';
import classNames from 'classnames/bind';
import { Fade } from 'react-awesome-reveal';


import AreasSlide from '../Home/AreasSlide';
import images from '../../assets/images';
import videos from '../../assets/videos';
import { manufacturingImg } from '../../assets/images';
const cx = classNames.bind(styles);

function Manufacturing() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={manufacturingImg.fakeheader} alt="fake-header"></img>
            </div>
            <div name='#nha-xuong' className={cx('factory', 'block')}>
                <h3 className={cx('sub-title')}>Nhà xưởng</h3>
                <div className={cx('factory-wrapper')}>
                    <img src={manufacturingImg.factory1} alt="nha-xuong-1" />
                    <div className={cx('factory-text')}>
                        <div className={cx('factory-text-item')}>
                            <h6>Nhà xưởng</h6>
                            <h5>NHÀ MÁY CỦA NHỮNG ƯỚC MƠ</h5>
                            <p className={cx('block1')}>
                                Nhà máy sơ chế cà phê của Minh Tiến luôn được đặt ngay tại vùng trồng để đảm bảo quả
                                tươi luôn được làm sạch trong vòng 24h kể từ khi hái.
                            </p>
                            <p className={cx('block1')}>
                                Chúng tôi dồn toàn bộ tâm huyết, sức lực để đảm bảo tính nguyên bản của hạt cà phê. Từ
                                đây, chúng tôi nuôi dưỡng khát vọng nâng tầm giá trị cà phê qua từng khâu chế biến hằng
                                ngày
                            </p>
                        </div>
                        <div className={cx('factory-text-item')}>
                            <h6>Nhà xưởng</h6>
                            <h5>NHÀ MÁY CỦA NHỮNG ƯỚC MƠ</h5>
                            <p className={cx('block1')}>
                                Nhà máy sơ chế cà phê của Minh Tiến luôn được đặt ngay tại vùng trồng để đảm bảo quả
                                tươi luôn được làm sạch trong vòng 24h kể từ khi hái.
                            </p>
                            <p className={cx('block1')}>
                                Chúng tôi dồn toàn bộ tâm huyết, sức lực để đảm bảo tính nguyên bản của hạt cà phê. Từ
                                đây, chúng tôi nuôi dưỡng khát vọng nâng tầm giá trị cà phê qua từng khâu chế biến hằng
                                ngày
                            </p>
                        </div>
                    </div>
                </div>
                <Fade>
                    <div className={cx('factory-img')}>
                        <img src={manufacturingImg.factory2} alt="nha-xuong-2" />
                        <img src={manufacturingImg.factory3} alt="nha-xuong-3" />
                    </div>
                </Fade>
            </div>
            <div name='#vung-trong' className="block">
                <h3 className={cx('sub-title')}>Vùng trồng</h3>
                <div className="">
                    <AreasSlide />
                </div>
            </div>
            <div name='#quy-trinh-san-xuat' className={cx('production-process', 'block')}>
                <h3 className={cx('sub-title')}>Quy trình sản xuất</h3>
                <div className={cx('production-process-wrapper')}>
                    <h2>Từ hạt giống đến hạt cà phê</h2>
                    <div className={cx('process-content')}>
                        <div className={cx('process-content-item')}>
                            <input type="checkbox" id="process-content-item-1" checked />
                            <label for="process-content-item-1" className={cx('process-content-heading')}>
                                1. GIEO TRỒNG
                            </label>
                            <div className={cx('process-content-text')}>
                                <p className={cx('block1')}>
                                    Mỗi mùa mưa tới, Minh Tiến lại thử nghiệm gieo trồng những giống cà phê mới.
                                </p>
                                <p className={cx('block1')}>
                                    Từng cây con được vun trên nền đất thổ nhưỡng tốt, tắm mình trong ánh nắng và nước
                                    mỗi ngày.
                                </p>
                                <p className={cx('block1')}>
                                    Qua thời gian, được chăm bón bởi bàn tay người nông dân lành nghề, áp dụng phương
                                    thức canh tác của chuyên gia, cây cà phê vươn mình lấy tinh hoa đất trời, mạnh mẽ
                                    trưởng thành.
                                </p>
                            </div>
                        </div>
                        <div className={cx('process-content-item')}>
                            <input type="checkbox" id="process-content-item-2" />
                            <label for="process-content-item-2" className={cx('process-content-heading')}>
                                2. THU HOẠCH
                            </label>
                            <div className={cx('process-content-text')}>
                                <p className={cx('block1')}>
                                    Từ những sơn nguyên bạt ngàn một màu trắng tinh khôi của hoa cà phê đầu năm, những
                                    quả non xanh nhú dần, chờ tắm đủ nắng sẽ chuyển sang đỏ mọng vào những tháng cuối
                                    năm.
                                </p>
                                <p className={cx('block1')}>
                                    Mỗi vùng trồng có thời gian rộ quả chín khác nhau, nhưng nương vào sắc đỏ của quả cà
                                    phê, người nông dân Minh Tiến biết rõ thời điểm thu hoạch thích hợp.
                                </p>
                                <p className={cx('block1')}>
                                    Từng quả chín mọng được hái cẩn thận bằng tay, chắt chiu công sức người gieo trồng,
                                    mang bản sắc vùng trồng đến từng nhà máy.
                                </p>
                            </div>
                        </div>
                        <div className={cx('process-content-item')}>
                            <input type="checkbox" id="process-content-item-3" />
                            <label for="process-content-item-3" className={cx('process-content-heading')}>
                                3. XÁT VỎ
                            </label>
                            <div className={cx('process-content-text')}>
                                <p className={cx('block1')}>
                                    Lớp vỏ ngoài cùng lớp thịt nhớt được chà xát, đánh nhớt kĩ càng. Từ đó, hạt cà phê tiếp
                                    tục được chà bỏ vỏ thóc, vỏ lụa, để lộ hạt cà phê xanh bóng, mượt mà.
                                </p>
                            </div>
                        </div>
                        <div className={cx('process-content-item')}>
                            <input type="checkbox" id="process-content-item-4" />
                            <label for="process-content-item-4" className={cx('process-content-heading')}>
                                4. PHƠI XẤY
                            </label>
                            <div className={cx('process-content-text')}>
                                <p className={cx('block1')}>
                                    Hạt cà phê căng mọng được tắm mình dưới ánh nắng, bay dần lượng nước trong mình. Minh
                                    Tiến áp dụng cả phương pháp phơi giàn và sấy trong quy trình sản xuất để đảm bảo lượng
                                    nước trong hạt đạt tiêu chuẩn xuất khẩu, giữ trọn hương vị thơm ngon đến tay người tiêu
                                    dùng.
                                </p>
                            </div>
                        </div>
                        <div className={cx('process-content-item')}>
                            <input type="checkbox" id="process-content-item-5" />
                            <label for="process-content-item-5" className={cx('process-content-heading')}>
                                5. PHÂN LOẠI HẠT
                            </label>
                            <div className={cx('process-content-text')}>
                                <p className={cx('block1')}>
                                    Từng hạt cà phê được đưa vào máy sàng, phân loại theo từng kích thước hạt để chất
                                    lượng sản xuất được đồng đều.
                                </p>

                                <p className={cx('block1')}>
                                    Những quả lỗi còn sót lại được tỉ mỉ loại bỏ bằng tay, bởi những công nhân cẩn thận,
                                    chăm chút cho từng hạt cà phê như chính cuộc sống của mình.
                                </p>
                            </div>
                        </div>
                        <div className={cx('process-content-item')}>
                            <input type="checkbox" id="process-content-item-6" />
                            <label for="process-content-item-6" className={cx('process-content-heading')}>
                                6. RANG
                            </label>
                            <div className={cx('process-content-text')}>

                                <p className={cx('block1')}>
                                    Từ hạt cà phê xanh, dưới sức nóng của nhiệt độ và bàn tay thợ lành nghề, hạt cà phê
                                    chuyển dần sang màu nâu đặc trưng thường thấy. Tùy thuộc vào mục đích sử dụng, cà phê
                                    được rang ở từng cấp độ khác nhau, bung tỏa hương vị bản sắc của chính mình cách trọn
                                    vẹn nhất.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('intro-video')}>
                <video muted loop autoPlay playsInline poster={images.videothump1}>
                    <source
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/process.mp4"
                        type="video/mp4"
                    />
                    <source src={videos.video1} type="video/mp4" />
                </video>
            </div>
            <Fade>
                <div className={cx('high-line')}>
                    <img src={images.highlineImages1} alt='hight-line-content-1' />
                </div>
            </Fade>
        </div>
    );
}

export default Manufacturing;
