import images from '../../../assets/images';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import publicRoutes from '../../../routes';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('widget-wrapper')}>
                <div className={cx('logo')}>
                    <img src={images.aroundLogo} alt="Minh-Tien-Coffeee" />
                </div>
                <div className={cx('widget-contact')}>
                    <h6>LIÊN HỆ</h6>
                    <div className={cx('widget-contact-info')}>
                        <div>
                            <p>
                                Email
                                <br />
                                <a href="mailto:info@minhtiencoffee.com">info@minhtiencoffee.com</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                Mobile
                                <br />
                                0242.20.44.666
                                <br />
                                0372.589.589
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('widget-copyright')}>
                    <h6>2022 © MINH TIEN COFFEE</h6>
                    <div className={cx('widget-copyright-info')}>
                        <p>
                            Chúng tôi hướng đến chất lượng với những mẻ cà phê đượm nắng, luôn trăn trở cho chất lượng
                            hạt cà phê đạt tiêu chuẩn cao nhất với các công tuyển.
                        </p>
                        <p className={cx('social-block')}>
                            <a className={cx('social-icon')} href="https://www.facebook.com/CaPheMinhTien">
                                <img src={images.facebook} alt="minh-tien-facebook" />
                            </a>
                            <a className={cx('social-icon')} href="https://www.instagram.com/minhtiencoffee/">
                                <img src={images.instagram} alt="minh-tien-instagram" />
                            </a>
                        </p>
                    </div>
                </div>
                <div className={cx('widget-address')}>
                    <h6>ĐỊA CHỈ</h6>
                    <div className={cx('widget-address-info')}>
                        <p>Trụ sở: Geleximco Building số 36 Hoàng Cầu P. Ô Chợ Dừa, Q. Đống Đa, TP. Hà Nội</p>
                        <p>
                            Không gian thưởng thức, trải nghiệm cà phê: 75 Hàng Mã, P. Hàng Mã, Q. Hoàn Kiếm, TP. Hà Nội
                        </p>
                    </div>
                </div>
            </div>
            <nav className={cx('navbar-bottom')}>
                <ul className={cx('navbar-bottom-list')}>
                {publicRoutes.map((route, index) => {
                            if (route.title !== 'TRANG CHỦ') {
                                return (
                                    <li
                                        key={index}
                                        className={cx('navbar-bottom-item')}
                                    >
                                        <Link to={route.path} className={cx('navbar-bottom-link')}>
                                            {route.title}
                                        </Link>
                                    </li>
                                );
                            // eslint-disable-next-line array-callback-return
                            } else return;
                        })}
                </ul>
            </nav>
        </div>
    );
}

export default Footer;
