import styles from './AreasSlide.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import images from '../../../assets/images';
import AreasData from '../../../data/AreasData';

const cx = classNames.bind(styles);
function AreasSlide() {
    const handleShow = (action) => {
        if (action === 'next') {
            setShow(show === AreasData.length - 1 ? 0 : show + 1);
        } else {
            setShow(show === 0 ? AreasData.length - 1 : show - 1);
        }
    };
    const [show, setShow] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setShow(show === AreasData.length - 1 ? 0 : show + 1);
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, [show]);
    return (
        <div className={cx('areas-wrapper')}>
            <div className={cx('areas-wrapper-slide')}>
                <button
                    className={cx('prev', 'btn')}
                    onClick={() => handleShow()}
                    style={{ backgroundImage: `url(${images.prevBtn})` }}
                ></button>
                <div className={cx('areas-img')} style={{ backgroundImage: `url(${images.areaBackgournd})` }}>
                    {AreasData.map((item, index) => (
                        <img
                            key={index}
                            className={cx(`${show === index ? 'faded' : ''}`, 'center-block')}
                            src={item.img}
                            alt={item.alt}
                        />
                    ))}
                </div>
                <button
                    className={cx('next', 'btn')}
                    onClick={() => handleShow('next')}
                    style={{ backgroundImage: `url(${images.prevBtn})` }}
                ></button>
            </div>
            <div className={cx('areas-info-wrapper')}>
                {AreasData.map((item, index) => (
                    <div key={index} className={cx('areas-info')}
                    style = {{ left: `-${index*25}%` }}
                    >
                        <div className={cx('areas-name', `${show === index ? 'faded' : ''}`)}>{item.name}</div>
                        <div className={cx('areas-meta')}>
                            <p className={cx('h6', `${show === index ? 'faded' : ''}`)}>Vị Trí</p>
                            <p className={cx('data', `${show === index ? 'faded' : ''}`)}>{item.location}</p>
                        </div>
                        <div className={cx('areas-meta')}>
                            <p className={cx('h6', `${show === index ? 'faded' : ''}`)}>Cao Độ</p>
                            <p className={cx('data', `${show === index ? 'faded' : ''}`)}>{item.high}</p>
                        </div>
                        <div className={cx('areas-meta')}>
                            <p className={cx('h6', `${show === index ? 'faded' : ''}`)}>Diện Tích</p>
                            <p className={cx('data', `${show === index ? 'faded' : ''}`)}>{item.area}</p>
                        </div>
                        <div className={cx('areas-meta')}>
                            <p className={cx('h6', `${show === index ? 'faded' : ''}`)}>Sản Lượng</p>
                            <p className={cx('data', `${show === index ? 'faded' : ''}`)}>{item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AreasSlide;
