import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import { Fade } from 'react-awesome-reveal';

import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Fact from './Fact';
import images from '../../assets/images';
import videos from '../../assets/videos';
import { souvenirImg } from '../../assets/images';
import CoffeeShop from '../Home/CoffeeShop';
const cx = classNames.bind(styles);
function Products() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro-video')}>
                <video muted loop autoPlay playsInline poster={images.sustainableValue}>
                    <source
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/SAN-PHAM.mp4"
                        type="video/mp4"
                    />
                    <source src={videos.video3} type="video/mp4" />
                </video>
                <div className={cx('intro-video-content', 'center-block')}>
                    <Fade direction={'up'}>
                        <div className={cx('brand-description', 'video-intro-title')}>
                            Tinh hoa từ bàn tay và văn hóa <br />
                            đại ngàn
                        </div>
                    </Fade>
                    <LinkScroll to="#coffilia-rang-xay">
                        <button className={cx('next-btn')}>
                            <img className={cx('next-btn-img')} src={images.arrowBtn} alt="next-button" />
                        </button>
                    </LinkScroll>
                </div>
            </div>
            <div name="#coffilia-rang-xay" className={cx('block')}>
                <h3 className={cx('sub-title')}>COFFILA RANG XAY</h3>
                <div className={cx('product-wrapper')} style={{ backgroundImage: `url(${images.productBackground})` }}>
                    <div className={cx('product-group')}>
                        <h2>COFFILA RANG XAY</h2>
                        <div className={cx('product-content')}>
                            <p className={cx('product-meta')}>
                                Trải nghiệm hương vị đại ngàn cùng bản sắc của hạt Cà Phê rang xay
                            </p>
                            <p className={cx('product-description')}>
                                Chúng tôi lưu giữ bản sắc của hạt cà phê, đưa ra tất cả tiềm năng sáng nhất hương vị vốn
                                có trong mỗi loại cà phê, để vị thanh ngọt tự nhiên và các sắc thái hương vị tinh tế
                                nhất không mất đi trong quá trình rang xay. Mang đến sự thăng hoa trong mỗi tách cà phê
                                pha sẵn giúp đánh thức năng lượng mỗi sáng cho bạn.
                            </p>
                            <a
                                href="www.minhtiencoffee.com/products/coffilia-rang-xay/"
                                className={cx('readmore-link', 'line-gold', 'bold-text')}
                            >
                                CHỌN LOẠI COFFEE
                            </a>
                        </div>
                        <div className={cx('product-img')}>
                            <Fade>
                                <img alt="coffilia-rang-xay" src={images.product1} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('fact')} style={{ backgroundImage: `url(${images.factBackground})` }}>
                <h3 className={cx('sub-title')}>
                    <Fact />
                </h3>
            </div>
            <div name="#coffilia-hoa-tan" className={cx('block')}>
                <h3 className={cx('sub-title')}>COFFILA HÒA TAN</h3>
                <div className={cx('product-wrapper')} style={{ backgroundImage: `url(${images.productBackground})` }}>
                    <div className={cx('product-group')}>
                        <h2>COFFILA HÒA TAN</h2>
                        <div className={cx('product-content')}>
                            <p className={cx('product-meta')}>
                                Trải nghiệm hương vị đam mê, nồng nàn trong mỗi tách cà phê hòa tan thơm ngát
                            </p>
                            <p className={cx('product-description')}>
                                Những hạt cà phê thơm ngon từ đại ngàn được tuyển chọn khắt khe, lưu giữ tinh hoa đất
                                trời và tâm huyết con người. Minh Tiến Coffee tự hào mang đến cho mọi người hương vị cà
                                phê hòa tan Coffilia chất lượng, lôi cuốn, đánh thức tinh thần sảng khoái, khai phá năng
                                lượng và cảm xúc mỗi ngày.
                            </p>
                            <a
                                href="www.minhtiencoffee.com/products/coffilia-rang-xay/"
                                className={cx('readmore-link', 'line-gold', 'bold-text')}
                            >
                                CHỌN LOẠI COFFEE
                            </a>
                        </div>
                        <div className={cx('product-img')}>
                            <Fade>
                                <img alt="coffilia-rang-xay" src={images.product2} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('souvenir')}>
                <h3 className={cx('sub-title')}>MINH TIEN SOUVENIR</h3>
                <div className={cx('souvenir-wrapper')}>
                    <div className={cx('souvenir-intro')}>
                        <p className={cx('block1')}>
                            Qua nhiều năm, Minh Tiến đã phát triển thành một trong những thương hiệu về lối sống được
                            yêu thích nhất, tập hợp nhiều loại sản phẩm, con người và ý tưởng trong một không gian.
                        </p>
                        <img src={images.divider} alt="divider-icon" />
                    </div>
                    <Fade direction={'left'}>
                        <div className={cx('souvenir-img')}>
                            {souvenirImg.map((item, index) => (
                                <img key={index} className={cx('souvenir-img')} src={item} alt="souvenir-img-item" />
                            ))}
                        </div>
                    </Fade>
                    <div className={cx('souvenir-footer','left-text')}>
                        <p className={cx('souvenir-orientation')}>
                            Định hướng của chúng tôi về mỗi không gian thưởng thức cà phê là độc đáo và đặc biệt ở mỗi
                            kiến trúc, trải nghiệm và cà phê đều mang đến các giá trị nguyên bản.
                        </p>
                        <p className={cx('souvenir-address','block1')}>
                            75 Hàng Mã,
                            <br /> Phường Hàng Mã
                            <br /> Quận Hoàn Kiếm,
                            <br /> TP. Hà Nội.
                        </p>
                        <p className={cx('souvenir-time','block2')}>
                            Mở cửa mỗi ngày
                            <br /> 7:00 am – 10:00 pm <br />
                            Tel: +842 3741 932
                        </p>
                        <Link
                            to={'www.minhtiencoffee.com/products/coffilia-rang-xay/'}
                            className={cx('readmore-link', 'line-gold', 'bold-text')}
                        >
                            TÌM HIỂU THÊM
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('block', 'coffee-shop')}>
                <h3 className={cx('sub-title')}>COFFEE SHOP</h3>
                <CoffeeShop />
            </div>
        </div>
    );
}

export default Products;
