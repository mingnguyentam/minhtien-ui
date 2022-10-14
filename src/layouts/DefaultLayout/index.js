import styles from './DefaultLayout.module.scss';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [showHeader, setShowHeader] = useState(false);
    const lastScroll = useRef(0)
    useEffect(() => {
        const handleShowHeader = (e) => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll > 0 && lastScroll.current >= currentScroll) {
                lastScroll.current = currentScroll;
                setShowHeader(true);
            } else {
                lastScroll.current = currentScroll;
                setShowHeader(false);
            }
        };
        window.addEventListener('scroll', handleShowHeader);

        return () => {
          window.removeEventListener('scroll', handleShowHeader);
        }
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header', `${showHeader && 'active'}`)}>
                <Header />
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}> {children}</div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
