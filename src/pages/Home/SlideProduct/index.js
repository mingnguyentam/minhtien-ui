import styles from './SlideProduct.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductData from '../../../data/ProductData';
const cx = classNames.bind(styles);
function SlideProduct() {
    //Handle show onclick
    const handleShow = (index) => {
        setcurrentSlide(index);
    };
    //Auto show slide
    const [currentSlide, setcurrentSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setcurrentSlide(currentSlide === ProductData.length - 1 ? 0 : currentSlide + 1);
        }, 2500);
        return () => {
            clearInterval(timer);
        };
    }, [currentSlide]);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('product-slide')}>
                    {ProductData.map((item, index) => (
                        <div className={cx('product-slide-item', `${index === currentSlide ? 'current' : 'slide'}`)}>
                            <div className={cx('product-description', 'left-text')}>
                                <div className={cx('product-name')}>{item.name}</div>
                                <div className={cx('product-info')}>{item.info}</div>
                                <Link to="/san-pham" className={cx('readmore-link', 'bold-text', 'line-gold')}>
                                    {' '}
                                    ĐẾN TRANG SẢN PHẨM
                                </Link>
                            </div>

                            <div className={cx('product-img')}>
                                <img key={index} src={item.url} alt="coffilia rang xay" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('slide-btn')}>
                    <div className={cx(`${currentSlide === 0 ? 'active' : ''}`)} onClick={() => handleShow(0)}>
                        <strong>01</strong>
                        <span>CÀ PHÊ RANG-XAY</span>
                    </div>
                    <div className={cx(`${currentSlide === 1 ? 'active' : ''}`)} onClick={() => handleShow(1)}>
                        <strong>02</strong>
                        <span>CÀ PHÊ HÒA TAN</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlideProduct;
