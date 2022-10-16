import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import images from '../../../assets/images';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import publicRoutes from '../../../routes';
const cx = classNames.bind(styles);

function Header() {
    const [subMenuTitle, setSubMenuTitle] = useState('');
    const [showSubMenu, setShowSubMenu] = useState(0);
    const [showSubMenuTablet, setShowSubMenuTablet] = useState();
    const [showMenuTablet, setShowMenuTablet] = useState(false);

    const menubar = useRef();
    const handleSubMenu = (title, height, index) => {
        setSubMenuTitle(title);
        setShowSubMenu(height);
        setShowSubMenuTablet(index);
    };
    useEffect(() => {
        const handleHideMenuClickOut = (e) => {
            if (!menubar.current.contains(e.target)) {
                setShowMenuTablet(false);
            }
        };
        document.addEventListener('mousedown', handleHideMenuClickOut);
        document.addEventListener('scroll', handleHideMenuClickOut);
        return () => {
            document.removeEventListener('mousedown', handleHideMenuClickOut);
            document.removeEventListener('scroll', handleHideMenuClickOut);
        };
    });
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('menu-wrapper')}>
                <button
                    className={cx('menu-btn', 'bar', `${showMenuTablet ? 'active' : ''}`)}
                    onClick={() => setShowMenuTablet(true)}
                >
                    <img src={images.barBtn} alt="bar-btn" />
                </button>
                <button
                    className={cx('menu-btn', 'xmark', `${showMenuTablet ? 'active' : ''}`)}
                    onClick={() => setShowMenuTablet(false)}
                >
                    <img src={images.xmarkBtn} alt="xmark-btn" />
                </button>
                <Link to="/" onClick={() => setShowSubMenuTablet('')}>
                    <img className={cx('logo')} src={images.logo} alt="minh-tien-coffee" />
                </Link>
                <nav className={cx('navbar', `${showMenuTablet ? 'active' : ''}`)} ref={menubar}
                onScroll={() => setShowMenuTablet(true)}>
                    <ul className={cx('nav-list')}>
                        {publicRoutes.map((route, index) => {
                            if (route.title !== 'TRANG CHỦ') {
                                return (
                                    <Link
                                        key={index}
                                        onClick={() => handleSubMenu(route.title, 443, index)}
                                        className={cx('nav-item')}
                                        to={route.path}
                                    >
                                        <li>{route.title}</li>
                                        <ul
                                            className={cx(
                                                'sub-menu-tablet-list',
                                                `${showSubMenuTablet === index ? 'active' : ''}`,
                                            )}
                                        >
                                            {route.subContent.map((listitem, index) => (
                                                <li key={index}>
                                                    <LinkScroll
                                                        className={cx('sub-menu-link')}
                                                        to={listitem.subPath}
                                                        onClick={() => setShowMenuTablet(false)}
                                                    >
                                                        {listitem.subTitle}
                                                    </LinkScroll>
                                                </li>
                                            ))}
                                        </ul>
                                    </Link>
                                );
                            } else return;
                        })}
                    </ul>
                </nav>
            </div>
            <div
                className={cx('sub-menu-wrapper', 'left-text')}
                style={{ height: `${showSubMenu}px`, opacity: showSubMenu / 443 }}
                onMouseLeave={() => {
                    handleSubMenu('', 0);
                }}
            >
                {publicRoutes.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <div
                                className={cx(
                                    'sub-menu-item',
                                    'text-fly',
                                    `${item.title === subMenuTitle ? 'active' : ''}`,
                                )}
                                key={index}
                            >
                                <div className={cx('sub-menu-title')}>{item.title}</div>
                                <ul className={cx('sub-menu-list')}>
                                    {item.subContent.map((listitem, index) => (
                                        <li key={index}>
                                            <LinkScroll className={cx('sub-menu-link')} to={listitem.subPath}>
                                                {listitem.subTitle}
                                            </LinkScroll>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Header;
