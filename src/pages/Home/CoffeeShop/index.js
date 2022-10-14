import { useEffect, useState, useRef } from 'react';
import styles from './CoffeeShop.module.scss';
import coffeeShop from '../../../data/cofffeeShop';
import CountUp from '../../../components/CountUp';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CoffeeShop() {
    const slider = useRef();
    const [height, setHeight] = useState(0);
    const [show, setShow] = useState(0);
    // handdle height of slide element
    useEffect(() => {
        setHeight(slider.current.clientHeight);
        window.addEventListener('resize', () => {
            setHeight(slider.current.clientHeight);
        });
        return () => {
            window.removeEventListener('resize', () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setHeight(slider.current.clientHeight);
            });
        };
    });
    // Handle show element
    useEffect(() => {
        const timer = setInterval(() => {
            setShow(show === coffeeShop.length - 1 ? 0 : show + 1);
        }, 4000);
        return () => clearInterval(timer);
    }, [show]);
    return (
        <div className={cx('coffee-shop-wrapper')}>
            <div className={cx('coffee-shop-info')}>
                <div className={cx('coffee-shop-info-counter')}>
                    <div className={cx('coffee-shop-info-number')}>
                        <h6>Số Chi Nhánh</h6>
                        <span className={cx('counter')}>
                            0
                            <CountUp end={5} />
                        </span>
                    </div>
                    <div className={cx('coffee-shop-info-number')}>
                        <h6>Nhân viên</h6>
                        <span className={cx('counter')}>
                            <CountUp end={84} />
                        </span>
                    </div>
                    <div className={cx('coffee-shop-info-desc')}>
                        <p className={cx('block1')}>
                            Định hướng của chúng tôi về mỗi không gian thưởng thức cà phê là độc đáo ở mỗi kiến trúc,
                            trải nghiệm và cà phê đều mang đến các giá trị nguyên bản.
                        </p>
                        <a href="#/coffee-shop" className={cx('readmore-link')}>
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('coffee-shop-slider')} style={{ height: height }}>
                {coffeeShop.map((item, index) => (
                    <div key={index}
                        ref={slider}
                        id={index}
                        style={{ top: -height * index }}
                        className={cx('coffee-shop-slider-item')}
                    >
                        <div className={cx('coffee-shop-slider-img')}>
                            <img
                                className={cx('coffee-shop-img-item', `${show === index && 'active'}`)}
                                key={index}
                                src={item.img}
                                alt={item.name}
                            />
                        </div>
                        <div className={cx('coffee-shop-slider-text')}>
                            <div className={cx('coffee-shop-slogan')}>
                                <p>
                                    “Nơi mang đến hương vị cà phê ưa chuộng và không khí thân quen, thoải mái, luôn chào
                                    đón những tâm hồn yêu cà phê đến nghỉ chân, kết nối và sáng tạo.
                                </p>
                            </div>
                            <div className={cx('coffee-shop-data')}>
                                <div className={cx('coffee-shop-location')}>
                                    <ul>
                                        <li>75 Hàng Mã, Hà Nội</li>
                                        <li>137 Chùa Láng, Hà Nội</li>
                                        <li>45 Lý Thường Kiệt, Hà Nội</li>
                                        <li>45 Lê Đại Hành, Hà Nội</li>
                                        <li>40 Hồ Xanh, Sơn La</li>
                                    </ul>
                                </div>
                                <div className={cx('coffee-shop-time')}>
                                    <p>Mở cửa mỗi ngày</p>
                                    <p>7:00 am - 10:30 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoffeeShop;
