import styles from './About.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import BrandHistory from './BrandHistory';
import CoreValue from './CoreValue';
import { AboutDrawing } from '../../components/Drawing';
import publicRoutes from '../../routes';
import videos from '../../assets/videos';
import images from '../../assets/images';
import { certification, partner } from '../../assets/images';
const cx = classNames.bind(styles);
function About() {
    // handle play video
    const [play, setPlay] = useState(false);
    const videoBrand = useRef();
    const videoHandle = (param) => {
        if (param === true) {
            videoBrand.current.play();
            setPlay(true);
        } else {
            videoBrand.current.pause();
            setPlay(false);
        }
    };
    // Handle Drawing
    const journey = useRef();
    const [offsetTop, setOffsetTop] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            const drawOffsetTop = journey.current.getBoundingClientRect().top + window.pageYOffset;
            setOffsetTop(drawOffsetTop);
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
                        <div className={cx('brand-description', 'video-intro-title')}>
                            Theo chân chúng tôi <br />
                            đi tìm hạnh phúc từ hạt cà phê
                        </div>
                    </Fade>
                    <LinkScroll to='#cauchuyen'>
                        <btn className={cx('next-btn')}>
                            <img className={cx('next-btn-img')} src={images.arrowBtn} alt="next-button" />
                        </btn>
                    </LinkScroll>
                </div>
            </div>
            <div name='#cauchuyen' id="#brand-story" className={cx('brand-story', 'block')}>
                <h3 className={cx('sub-title')}>CÂU CHUYỆN MINH TIẾN</h3>

                <div>
                    <Fade direction={'up'}>
                        <h4 className={cx('brand-story-title')}>
                            CÀ PHÊ NGUYÊN BẢN <br />
                            TRÊN CAO NGUYÊN <br />
                            MÙ SƯƠNG
                        </h4>
                    </Fade>
                    <div className={cx('brand-story-background')}>
                        <img src={images.brandStoryBackground1} alt="Brand-Story-background" />
                        <img src={images.brandStoryBackground} alt="Brand-Story-background" />
                    </div>
                </div>
                <div className={cx('brand-story-content')}>
                    <div className={cx('brand-story-quotes')}>
                        “Chúng tôi tin vào chuỗi giá trị hạnh phúc bắt đầu hành trình từ nông trại cho đến tách cà phê.”
                    </div>
                    <div className={cx('brand-story-info')}>
                        <article className={cx('meta')}>
                            <h6>VỀ CHÚNG TÔI</h6>
                            <p>
                                Khởi đầu hành trình năm 2000, Minh Tiến ra đời với khát vọng mang lại giá trị nguyên bản
                                và hạnh phúc nơi hạt cà phê sinh ra.
                            </p>
                        </article>
                        <article className={cx('meta')}>
                            <h6>TẠO NỀN TẢNG</h6>
                            <p>
                                Dựa trên mô hình canh tác bền vững từ các vùng nguyên liệu độc lập, hạt cà phê chất
                                lượng cao, đạt tiêu chuẩn quốc tế của Minh Tiến đã chinh phục được các đối tác xuất khẩu
                                và người yêu cà phê trên toàn thế giới.
                            </p>
                        </article>
                        <article className={cx('meta')}>
                            <h6>CẦU NỐI GẮN KẾT</h6>
                            <p>
                                Với chất liên kết là tình yêu cà phê, Minh Tiến luôn cố gắng là cầu nối gắn kết và lan
                                toả hạnh phúc từ nông hộ, đối tác – khách hàng đến người tiêu dùng và cộng đồng. Để thực
                                hiện được điều này, Minh Tiến luôn đảm bảo chất lượng và giá trị nguyên bản của hạt cà
                                phê.
                            </p>
                        </article>
                    </div>
                </div>
                <div className={cx('brand-story-video')}>
                    <div className={cx('mask-video')}>
                        <video ref={videoBrand} muted loop playsInline poster={images.videothump1}>
                            <source
                                src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/GIOI-THIEU.mp4"
                                type="video/mp4"
                            />
                            <source src={videos.video2} type="video/mp4" />
                        </video>
                    </div>
                    <div className={cx('mask-text', 'center-block')}>
                        <Fade direction={'up'}>
                            <h2>Hành trình mang lại<br/>hạnh phúc</h2>
                        </Fade>
                        <button
                            onClick={() => {
                                videoHandle(!play);
                            }}
                            className={cx('play-btn')}
                        >
                            <img
                                className={cx('next-btn')}
                                src={images.arrowBtn}
                                alt="play-btn"
                                style={{ transform: 'rotate(-90deg)' }}
                            />
                            <span>Xem video</span>
                        </button>
                    </div>
                </div>
                <div name='#hanhtrinh'
                    ref={journey}
                    className={cx('journey')}
                    style={{ backgroundImage: `url(${images.journeyBackground})` }}
                >
                    <div className={cx('journey-text')}>
                        <Fade direction={'up'}>
                            <h6 className={cx('journey-title', 'text-fly')}>
                                Hành trình trên những <br />
                                Dãy sơn nguyên
                            </h6>
                        </Fade>
                        <div className={cx('journey-content')}>
                            <article>
                                Hành trình của hạt cà phê khởi đầu bằng hàng nghìn nụ hoa trắng xoá đầy hương sắc, hấp
                                thụ tinh hoa đất trời, tâm sức con người và văn hoá bản địa, tạo nên hương vị đánh thức
                                cảm hứng người dùng.
                            </article>
                            <article>
                                Giá trị thực mà Minh Tiến tâm huyết truyền tải trong từng tách cà phê chính là hương vị
                                nguyên bản nơi hạt cà phê được sinh ra, những vùng nguyên liệu từ Tây Bắc, Quảng Trị cho
                                đến Lào.
                            </article>
                            <article>
                                <Link to={publicRoutes[4].path} className={cx('readmore-link', 'line-gold')}>
                                    ĐẾN TRANG SẢN XUẤT
                                </Link>
                                <Link to={publicRoutes[4].path} className={cx('readmore-link', 'line-gold')}>
                                    ĐẾN TRANG SẢN PHẨM
                                </Link>
                            </article>
                        </div>
                    </div>
                    <AboutDrawing
                        className={cx('journey-drawing')}
                        offsetTop={offsetTop}
                        width="135px"
                        height="2381px"
                    />
                </div>
                <div name='#cotmoc' className={cx('brand-history')}>
                    <BrandHistory />
                </div>
            </div>
            <div name='#tamnhin' className={cx('vision-mission', 'block')}>
                <h3 className={cx('sub-title')}>Tầm nhìn & sứ mệnh</h3>
                <div className={cx('vision-mission-wrapper')}>
                    <div className={cx('vision-mission-content')}>
                        <Fade direction={'up'}>
                            {' '}
                            <div className={cx('vision-mission-header')}>TẦM NHÌN</div>
                        </Fade>
                        <div className={cx('vision-mission-description')}>
                            <h5>Nâng tầm giá trị của hạt cà phê Việt Nam</h5>
                            <p>
                                Phát triển chuỗi giá trị cà phê bền vững để nâng tầm giá trị cà phê Arabica Việt Nam Với
                                chất liên kết là tình yêu cà phê, Minh Tiến luôn cố gắng là cầu nối gắn kết và lan toả
                                hạnh phúc từ nông hộ, đối tác – khách hàng đến người tiêu dùng và cộng đồng.
                            </p>
                        </div>
                    </div>
                    <div className={cx('vision-mission-content')}>
                        <Fade direction={'up'}>
                            <div className={cx('vision-mission-header')}>SỨ MỆNH</div>
                        </Fade>
                        <div className={cx('vision-mission-description')}>
                            <h5>Minh Tiến mong muốn giúp người tiêu dùng khám phá lại hương vị cà phê nguyên bản</h5>
                            <p>
                                Mục tiêu của chúng tôi là tái định nghĩa và khám phá lại hương vị cà phê nguyên bản yêu
                                thích mỗi ngày bằng sản phẩm tâm huyết của từng người trồng cà phê, đồng thời truyền cảm
                                hứng kết nối mọi người bằng tình yêu cà phê, giúp mọi người hiểu thêm về tầm vóc cà phê
                                Việt và bản sắc vùng nguyên liệu.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('vision-mission-img')}>
                    <img src={images.highlineImages} alt="high-line-images" />
                </div>
            </div>
            <div className={cx('core-value', 'block')} style={{ backgroundImage: `url(${images.companyBackground})` }}>
                <h3 className={cx('sub-title')}>Giá trị cốt lõi</h3>
                <CoreValue />
            </div>
            <div name='#chungnhan' className={cx('block')}>
                <h3 className={cx('sub-title')}>chứng nhận</h3>
                <div className={cx('certification-wrapper')}>
                    <Fade direction={'up'}>
                        <h4 className={cx('certification-title')}>ĐAM MÊ ĐỂ LÀM TỐT HƠN</h4>
                    </Fade>
                    <p>
                        Trải qua 20 năm chuyên môn và kiến thức về cà phê, Minh Tien Coffee đặt mục tiêu được công nhận
                        là đối tác kinh doanh hàng đầu trong lĩnh vực cà phê xanh hạt arabica từ cao cấp đến phục vụ cho
                        specialty thông qua các tiêu chuẩn chất lượng khắt khe.
                    </p>
                    <div className={cx('certification-logo')}>
                        {certification.map((item, index) => {
                            return <img className={cx('certification-logo-item')} key={index} src={item} alt="logo" />;
                        })}
                    </div>
                </div>
            </div>
            <div className={cx('block')}>
                <h3 className={cx('sub-title')}>đối tác</h3>
                <div className={cx('certification-wrapper')}>
                    <Fade direction={'up'}>
                        <h4 className={cx('certification-title')}>KHÁT VỌNG ĐỂ VƯƠN BIỂN LỚN</h4>
                    </Fade>
                    <p>
                        Chúng tôi cung cấp cà phê cho các đối tác hàng đầu trên thế giới và phân phối cà phê trên toàn
                        quốc. Chúng tôi thích làm việc với tất cả các đối tác để chia sẻ những hạt cà phê ngon nhất đến
                        những người yêu thích cà phê.
                    </p>
                    <div className={cx('certification-logo')}>
                        {partner.map((item, index) => {
                            return <img className={cx('certification-logo-item')} key={index} src={item} alt="logo" />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
