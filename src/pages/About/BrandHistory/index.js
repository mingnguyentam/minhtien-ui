import { useRef, useState, useEffect } from 'react';
import styles from './BrandHistory.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import brandhistory from '../../../data/brandhistory';

const cx = classNames.bind(styles);
function BrandHistory() {
    const [show, setShow] = useState(0);
    const [height, setHeight] = useState(0);
    const [translate, setTranslate] = useState(0);
    const timeLock = useRef();
    const handleUp = () => {
        setShow(show - 1);
        setTranslate(height * (show - 1));
    };
    const handleDown = () => {
        setShow(show + 1);
        setTranslate(height * (show + 1));
    };
    useEffect(() => {
        setHeight(timeLock.current.offsetHeight);
    });
    return (
        <div className={cx('brand-history-wrapper')}>
            <div className={cx('time-lock')} style={{ height: height * 4 }}>
                {show > 0 && (
                    <button
                        onClick={() => {
                            handleUp();
                        }}
                        className={cx('up-btn', 'btn')}
                    >
                        <img src={images.prevBtn} alt="up-button"></img>
                    </button>
                )}
                {brandhistory.map((item, index) => (
                    <span
                        style={{ transform: `translateY(${-translate}px)` }}
                        className={cx(`${show === index ? 'active' : ''}`)}
                        ref={timeLock}
                        key={index}
                        onClick ={() => {setShow(index); setTranslate(index*height)}}
                    >
                        {item.time}
                    </span>
                ))}
                {show < brandhistory.length - 1 && (
                    <button
                        className={cx('down-btn', 'btn')}
                        onClick={() => {
                            handleDown();
                        }}
                    >
                        <img src={images.prevBtn} alt="down-button"></img>
                    </button>
                )}
            </div>
            <div className={cx('time-event')}>
                <h4>CÁC CỘT MỐC</h4>
                <h5>Cuộc hành trình đi tìm giá trị nguyên bản</h5>
                <div className={cx('event-content-wrapper')}>
                    {brandhistory.map((item, index) => (
                        <p className={cx(`${show === index ? 'active' : ''}`)} key={index}>
                            {item.content}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrandHistory;
