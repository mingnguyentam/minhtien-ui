import { useState, useEffect, useRef } from 'react';
import styles from './ValueOrigin.module.scss';
import classNames from 'classnames/bind';
import valueOrigin from '../../../data/ValueOrigin';

const cx = classNames.bind(styles);

function ValueOriginSlider({ offsetTop }) {
    const slideValueOrigin = useRef(null);
    const [itemheight, setItemHeight] = useState();
    const [movepin, setMovePin] = useState(offsetTop + 110);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const moved = winScroll - offsetTop;
        const move = () => {
            if (moved < 0) {
                return 0;
            } else {
                if (moved > slideValueOrigin.current.offsetHeight - 300) {
                    return slideValueOrigin.current.offsetHeight - 300;
                } else {
                    return moved;
                }
            }
        };
        setTimeout(() => {
            setMovePin(move());
        }, 250);
    };
    useEffect(() => {
        setItemHeight(slideValueOrigin.current.offsetHeight / valueOrigin.length);
    }, [itemheight]);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    });
    //console.log(itemheight);
    return (
        <div className={cx('value-origin-wrapper')}>
            <div
                className={cx('value-origin-pin')}
                style={{ top: offsetTop, transform: `translateY(${movepin + 120}px)` }}
            >
                {valueOrigin.map((item, index) => (
                    <a
                        className={cx(
                            `${
                                itemheight * index - 200 <= movepin &&
                                movepin <= itemheight * (index + 1) - 200 &&
                                'active'
                            }`,
                        )}
                        key={index}
                        href={`#slide-${index}`}
                    >
                        {item.order}
                    </a>
                ))}
            </div>
            <div ref={slideValueOrigin} className={cx('value-origin-slide')}>
                {valueOrigin.map((item, index) => (
                    <div id={`slide-${index}`} key={index} className={cx('value-origin-item')}>
                        <div className={cx('value-origin-content')}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                        <div className={cx('value-origin-img')}>
                            <img src={item.img} alt={index} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ValueOriginSlider;
