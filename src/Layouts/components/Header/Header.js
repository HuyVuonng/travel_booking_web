import classNames from 'classnames/bind';
import { logo } from '~/components/images';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('box-logo')}>
                    <Link to="/">
                        <img src={logo} alt="logo" className={cx('logo')} />
                    </Link>
                </div>

                <div className={cx('box-nav-list')}>
                    <ul className={cx('header-nav-list')}>
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                HOME
                            </Link>
                        </li>
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                PACKAGES
                            </Link>
                        </li>
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                SHOP
                            </Link>
                        </li>
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                PAGES
                            </Link>
                        </li>{' '}
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                NEWS
                            </Link>
                        </li>{' '}
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                CONTACT
                            </Link>
                        </li>
                        <li className={cx('header-nav-list-item')}>
                            <Link to="/" className={cx('nav-list-item-link')}>
                                BOOK NOW
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('box-menu-icon')}>
                    <FontAwesomeIcon icon={faBars} className={cx('menu-icon')} />
                </div>
            </header>
        </div>
    );
}

export default Header;
