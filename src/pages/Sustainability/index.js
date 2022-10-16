import styles from './Sustainability.module.scss';
import classNames from 'classnames/bind';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';

import { SustainabilityDrawing } from '../../components/Drawing';
import images from '../../assets/images';
import { sustainabilityImg } from '../../assets/images';
import { factorIcon } from '../../assets/images';
import videos from '../../assets/videos';

const cx = classNames.bind(styles);
function Sustainability() {
    // Handle drawing
    const [height1, setHeight1] = useState(0);
    const [height2, setHeight2] = useState(0);
    const block1 = useRef();
    const block2 = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
            const drawOffsetTop = block1.current.getBoundingClientRect().top + window.pageYOffset;
            setHeight1(drawOffsetTop);
            setHeight2(block2.current.getBoundingClientRect().top + window.pageYOffset);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro-video')}>
                <video muted loop autoPlay playsInline poster={images.videothump1}>
                    <source
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/TVC_30s_Minh-Tiến_1.mp4"
                        type="video/mp4"
                    />
                    <source src={videos.video1} type="video/mp4" />
                </video>
                <div className={cx('intro-video-content', 'center-block')}>
                    <Fade direction={'up'}>
                        <div className={cx('brand-description', 'text-fly', 'video-intro-title')}>
                            Chuỗi cung ứng bền vững <br />
                            được dựa trên giá trị hạnh phúc và nguyên bản
                        </div>
                    </Fade>
                    <LinkScroll to="#nguyen-ban">
                        <button className={cx('next-btn')}>
                            <img className={cx('next-btn-img')} src={images.arrowBtn} alt="next-button" />
                        </button>
                    </LinkScroll>
                </div>
            </div>
            <div name='#nguyen-ban' ref={block1} className={cx('original', 'block')}>
                <SustainabilityDrawing className={cx('drawing-block1')} height={1387.78} offsetTop={height1} />
                <h3 className={cx('sub-title')}>Nguyên bản</h3>
                <div className={cx('original-wrapper')}>
                    <div className={cx('original-meta')}>
                        <h4>
                            Tại Minh Tiến, chúng tôi tin vào chuỗi cung ứng bền vững được dựa trên giá trị hạnh phúc và
                            nguyên bản
                        </h4>
                        <p className={cx('block1')}>
                            Sự bền vững về kinh tế, môi trường, xã hội có thể đo lường được trong mọi việc chúng tôi
                            làm. Với chúng tôi, đó là hành trình với sự cải tiến liên tục và thúc đẩy thông qua quan hệ
                            đối tác trong chuỗi cung ứng.
                        </p>
                        <p className={cx('block2')}>
                            Các vùng trồng và nông trại của Minh Tiến được xây dựng dựa trên sự cam kết vì mục tiêu: đưa
                            hạt cà phê về lại đúng với giá trị nguyên bản.
                        </p>
                    </div>
                    <Fade>
                        <div className={cx('original-img')}>
                            <img src={sustainabilityImg.original} alt="nguyen-ban" />
                        </div>
                    </Fade>
                </div>
            </div>
            <div className={cx('factor', 'block')}>
                <div className={cx('factor-wrapper')}>
                   <Fade direction={'up'}>
                        <h2>
                            Minh Tiến xây dựng <br /> mô hình cà phê bền vững trên 3 yếu tố
                        </h2>
                   </Fade>
                    {factorIcon.map((item, index) => (
                        <div className={cx('factor-item')} key={index}>
                            <a className={cx('factor-link')} href={item.id}>
                                <img alt="factor-item" src={item.path} />
                                <Fade direction={'up'}>{item.name}</Fade>
                            </a>
                        </div>
                    ))}
                </div>
                <div name='#kinh-te' ref={block2} id="kinh-te" className={cx('block', 'economy')}>
                    <SustainabilityDrawing className={cx('drawing-block2')} height={1387.78} offsetTop={height2} />
                    <h3 className={cx('sub-title')}>Kinh tế</h3>
                    <div className={cx('economy-content')}>
                        <div className={cx('factor-content-item')}>
                           <Fade direction={'up'}> <h2>NÔNG HỘ</h2></Fade>
                            <p className={cx('block1')}>
                                Mỗi nông hộ là một mối liên kết đặc biệt trong hơn 5.000 nông hộ hợp tác với chúng tôi
                                được nuôi dưỡng và bồi đắp dựa trên sự cam kết trong hành trình xây dựng cafe bền vững.
                                Chúng tôi đảm bảo các chính sách thu mua cà phê đặc biệt từ những người trồng trọt.
                            </p>
                            <p className={cx('block2')}>
                                Bên cạnh đó chúng tôi đã hỗ trợ các nông hộ, xây dựng nhóm quản lý, kỹ sư theo vùng để
                                tạo điều kiện giám sát, hỗ trợ đào tạo, phân phối cây giống và đầu vào cho nông nghiệp
                                hữu cơ. Ngoài ra nâng cao chất lượng đời sống thông qua con đường phát triển chuỗi giá
                                trị cafe bền vững là để
                            </p>
                        </div>
                        <div className={cx('factor-content-item')}>
                           <Fade direction={'up'}> <h2>DOANH NGHIỆP</h2></Fade>
                            <p className={cx('block1')}>
                                Phát triển các vùng nguyên liệu bền vững cùng với nông hộ cho chúng tôi đầu vào của cafe
                                ổn định. Tiêu chuẩn chất lượng cafe và tính nguyên bản từ các vùng trồng mang phẩm chất,
                                hương vị đặc trưng. Chúng tôi không ngừng truyền cảm hứng thúc đẩy tinh thần chung với
                                sự gắn kết bởi tình yêu cafe.
                            </p>
                            <p className={cx('block2')}>
                                Mỗi một sản phẩm được làm ra từ cái tâm của người làm nghề, chân thật và minh bạch, từ
                                vùng nguyên liệu. Quá trình sản xuất, khâu chế biến và kiểm soát chất lượng đến hương vị
                                cà phê 100% nguyên bản được đảm bảo thông qua đội ngũ nghệ nhân rang xay.
                            </p>
                        </div>
                    </div>
                </div>
                <div name='#xa-hoi' id="xa-hoi" className={cx('block')}>
                    <h3 className={cx('sub-title')}>Xã hội</h3>
                    <div className={cx('society-content')}>
                        <Fade><img className={cx('society-img')} src={sustainabilityImg.society} alt="xa-hoi" /></Fade>
                        <div className={cx('factor-content-item')}>
                            <h2>CỘNG ĐỒNG</h2>
                            <p className={cx('block1')}>
                                Cộng đồng bản địa là trung tâm cho các hoạt động của chúng tôi. Chúng tôi hòa nhập vào
                                cuộc sống của họ, đào tạo, chia sẻ kiến thức nông nghiệp.
                                <br />
                                <br />
                                Cộng đồng bản địa là trung tâm cho các hoạt động của chúng tôi. Chúng tôi hòa nhập vào
                                cuộc sống của họ, đào tạo, chia sẻ kiến thức nông nghiệp
                            </p>
                            <p className={cx('block2')}>
                                <h4 className={cx('society-title')}>
                                    “ĐỂ CÓ NHỮNG TÁCH CAFE NGON CHO KHÁCH HÀNG VÀO NGÀY MAI, CHÚNG TA PHẢI GIÚP CỘNG
                                    ĐỒNG NGƯỜI TRỒNG CAFE PHÁT TRIỂN HÔM NAY”.
                                </h4>
                            </p>
                        </div>
                        <div className={cx('factor-content-item')}>
                            <h2>NGƯỜI TIÊU DÙNG</h2>
                            <p className={cx('block1')}>
                                Hãy thưởng thức ngụm cafe thanh ngọt như mật ong từ các dải sơn nguyên và yên tâm rằng
                                bạn là một mảnh ghép quan trọng trong chuỗi giá trị cafe bền vững.
                                <br />
                                <br />
                                Bạn đang đóng góp tích cực đến cuộc sống của người trồng cafe tương lai của những nông
                                hộ đứng sau tách cafe chất lượng thơm ngát hàng ngày
                            </p>
                            <p className={cx('block2')}>
                               <Fade>
                                    <img
                                        className={cx('society-item-img')}
                                        src={sustainabilityImg.consumer}
                                        alt="nguoi-tieu-dung"
                                    />
                               </Fade>
                            </p>
                        </div>
                    </div>
                </div>
                <div name='#moi-truong' id="moi-truong" className={cx('block')}>
                    <h3 className={cx('sub-title')}>Môi trường</h3>
                    <div className={cx('environment-content')}>
                        <div className={cx('factor-content-item')}>
                            <h2>VÙNG NGUYÊN LIỆU</h2>
                            <p className={cx('block1')}>
                                Chúng tôi tạo ra sự cân bằng giữa nông nghiệp hữu cơ và hệ sinh thái môi trường bản địa,
                                duy trì nông nghiệp sạch với đất đai màu mỡ đến từ hệ sinh thái tự nhiên (thổ nhưỡng,
                                nguồn nước, ánh sáng...)
                            </p>
                            <p className={cx('block2')}>
                                Các chương trình tập huấn, kiểm tra giúp xây dựng ý thức hơn trong việc bảo vệ nguồn
                                nước, quản lý rác thải, tăng cường cây che bóng và một số loại cây phủ đất để giữ ẩm và
                                cải tạo đất.
                            </p>
                        </div>
                    </div>
                    <div
                        className={cx('environment-img')}
                        style={{ backgroundImage: `url(${sustainabilityImg.nguyenlieu})` }}
                    >
                       <Fade direction={'up'}>
                            <p className={cx('text-fly')}>
                                “Chúng tôi tạo ra sự cân bằng giữa nông nghiệp hữu cơ và hệ sinh thái môi
                                <br />
                                trường bản địa, duy trì nông nghiệp sạch với đất đai màu mỡ đến từ hệ sinh
                                <br />
                                thái tự nhiên”
                            </p>
                       </Fade>
                    </div>
                </div>
            </div>
            <div name='#hoat-dong' className={cx('manufacturing', 'block')}>
                <h3 className={cx('sub-title')}>Sản xuất</h3>
                <div className={cx('manufacturing-wrapper')}>
                    <div className={cx('manfacturing-img')}>
                        <img src={sustainabilityImg.manufacturing} alt="san-xuat" />
                    </div>
                    <div className={cx('manfacturing-content')}>
                        <p className={cx('block1')}>
                            Cam kết bền vững của chúng tôi cũng bao gồm quy trình kiểm soát chặt chẽ về xả thải tại nhà
                            máy, nhằm bảo vệ môi trường, nguồn nước, xây dựng hệ thống tái sử dụng vỏ cà phê, xử lý khí
                            đốt tạo nên luân chuyển tài nguyên, tránh tiêu tốn và lãng phí.
                        </p>
                        <p className={cx('block1')}>
                            Bên cạnh đó, chúng tôi cũng tạo ra môi trường làm việc an toàn với văn hóa gắn kết và tự
                            thức trong hệ giá trị lõi của doanh nghiệp.
                        </p>
                        <Link to="/san-xuat" className={cx('readmore-link', 'line-gold', 'bold-text')}>
                            ĐẾN TRANG SẢN XUẤT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sustainability;
