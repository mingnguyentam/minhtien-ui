import { useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
    const maxHeightValue = [2100, 1800, 1400, 800]
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = Math.round((winScroll / height) * 300);
        setScrollTop(scrolled);
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);
    return (
        <div className={cx('wrapper')}>
            {maxHeightValue.map((item, index) => (
                <div className={cx('sidebar-number')} key= {index}>{item - scrollTop}m</div>
            )
            
            )}
        </div>
    );
}

export default Sidebar;
