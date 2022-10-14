import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import publicRoutes from '../../routes';
import { Fade } from 'react-awesome-reveal';
import publicArchive from '../News/Archive';
import { HomeDrawing } from '../../components/Drawing';
import SlideProduct from './SlideProduct';
import AreasSlide from './AreasSlide';
import ValueOriginSlider from './ValueOrigin';
import CoffeeShop from './CoffeeShop';
import images from '../../assets/images';
import videos from '../../assets/videos';

const cx = classNames.bind(styles);
function Home() {
    const drawRef = useRef();
    const pinOriginRef = useRef();
    const [pin, setPin] = useState(0);
    const [top, setTop] = useState();
    useEffect(() => {
        const timer = setTimeout(() => {
            const drawOffsetTop = drawRef.current.offsetTop;
            const pinOffsetTop = pinOriginRef.current.offsetTop;
            setTop(drawOffsetTop);
            setPin(pinOffsetTop);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('green-background')}>
                <Fade>
                    <div className={cx('img-area')}>
                        <img src={images.coffeeIllustration} className={cx('coffee-img')} alt="coffee-illustration" />
                    </div>
                </Fade>
                <h1>MINH TIEN COFFFE</h1>
                <Fade direction={'up'}>
                    <h3 className={cx('brand-description')}>
                        Minh Tiến ra đời với khát vọng <br /> nâng tầm giá trị của hạt cà phê Việt Nam
                    </h3>
                </Fade>
                <p className={cx('green-background-text')}>Tham Gia Hành Trình Cùng Chúng Tôi</p>
                <LinkScroll to='video-intro'>
                    <button className={cx('next-btn')}>
                        <img className={cx('next-btn-img')} src={images.arrowBtn} alt="next-button" />
                    </button>
                </LinkScroll>
                <div ref={drawRef} className={cx('patch-drawing')}>
                    <div className={cx('drawing-wrapper')}>
                        {top && <HomeDrawing offsetTop={top} width="270px" height="1924px" />}
                    </div>
                </div>
            </div>
            <div name='video-intro' className={cx('video-intro')}>
                <div className={cx('mask-container')}>
                    <video muted loop autoPlay playsInline poster={images.videothump1}>
                        <source
                            src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/TVC_30s_Minh-Tiến_1.mp4"
                            type="video/mp4"
                        />
                        <source src={videos.video1} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={cx('feature-product', 'block')}>
                <h3 className={cx('sub-title')}>Sản phẩm</h3>
                <div className={cx('product-slide')} style={{ backgroundImage: `url(${images.productBackground})` }}>
                    <SlideProduct />
                </div>
            </div>
            <div className={cx('areas', 'block')}>
                <h3 className={cx('sub-title')}>Vùng trồng</h3>
                <AreasSlide />
            </div>
            <div ref={pinOriginRef} className={cx('value-origin')}>
                <h3 className={cx('sub-title')}>Giá trị nguyên bản</h3>
                {pin && <ValueOriginSlider offsetTop={pin} />}
            </div>
            <div className={cx('coffee-shop', 'block')}>
                <h3 className={cx('sub-title')}>COFFEE SHOP</h3>
                <CoffeeShop />
            </div>
            <div className={cx('sustainable-value', 'block')}>
                <h3 className={cx('sub-title')}>Giá trị bền vững</h3>
                <div className={cx('sustainable-value-wrapper')}>
                    <div className={cx('sustainable-value-content', 'left-text')}>
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
                        <Link className={cx('readmore-link', 'line-gold', 'bold-text')} to={publicRoutes[3].path}>
                            TÌM HIỂU THÊM
                        </Link>
                    </div>
                    <Fade>
                        <img
                            alt="gia-tri-ben-vung"
                            src={images.sustainableValue}
                            className={cx('sustainable-value-img')}
                        ></img>
                    </Fade>
                </div>
            </div>
            <div className={cx('news', 'block')}>
                <h3 className={cx('sub-title')}>Tin tức</h3>
                <Fade>
                    <div className={cx('news-wrapper')}>
                        {publicArchive.map((item, index) => {
                            return (
                                <div className={cx('post-item')} key={index}>
                                    <Link to={item.path()}>
                                        <img className={cx('post-thumbnail')} src={item.thumnail} alt="post-thumnail" />
                                        <div className={cx('left-text', 'post-description')}>
                                            <span className={cx('post-category')}>BẢN TIN</span>
                                            <h4 className={cx('post-title')}>{item.title}</h4>
                                            <p className={cx('post-time')}>{item.time}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Home;
