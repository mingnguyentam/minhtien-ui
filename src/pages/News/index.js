import styles from './News.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { partnersImg } from '../../assets/images';
import publicArchive from './Archive';
const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fake-header')}>
                <img src={partnersImg.fakeheader} alt="fake-header" />
            </div>
            <div name='#ban-tin#nong-ho' className={cx('block', 'news')}>
                <h3 className={cx('sub-title')}>TIN TỨC</h3>
                <div className={cx('news-wrapper')}>
                    <div className={cx('main', 'post')}>
                        <Link to={publicArchive[0].path()}>
                            <img className={cx('post-thumbnail')} src={publicArchive[0].thumnail} alt="main-post" />
                            <div className={cx('main-post-description', 'left-text')}>
                                <span className={cx('post-category')}>BẢN TIN</span>
                                <h4 className={cx('post-title')}>{publicArchive[0].title}</h4>
                                <p className={cx('post-time')}>{publicArchive[0].time}</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('post-wrapper')}>
                        {publicArchive.map((item, index) => {
                            if (index !== 0) {
                                return (
                                    <div className={cx('post', 'post-item')} key={index}>
                                        <Link to={item.path()}>
                                                <img className={cx('post-thumbnail')} src={item.thumnail} alt="main-post" />
                                            <div className={cx('left-text','post-description')}>
                                                <span className={cx('post-category')}>BẢN TIN</span>
                                                <h4 className={cx('post-title')}>{item.title}</h4>
                                                <p className={cx('post-time')}>{item.time}</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
