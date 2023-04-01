import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import { logoFooter } from '~/components/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faVimeoV, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('footer-content')}>
                <div className={cx('footer-content-header')}>
                    <div className={cx('text')}>
                        <h5 className={cx('small-text')}>KEEP IN TOUCH</h5>
                        <h1 className={cx('large-text')}>Travel with Us</h1>
                    </div>
                    <div className={cx('input')}>
                        <input type="text" className={cx('text-input')} />
                        <input type="submit" value="send" className={cx('text-submit')} />
                    </div>
                </div>

                <div className={cx('footer-infor')}>
                    <div className={cx('footer-infor-row1')}>
                        <div className={cx('footer-infor1')}>
                            <img className={cx('logoFooter')} src={logoFooter} alt="logoFooter" />
                            <p className={cx('footer-paragrap')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh
                                condimentum venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.
                            </p>
                            <div className={cx('footer-icon')}>
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faFacebookSquare} />
                                <FontAwesomeIcon icon={faVimeoV} />
                            </div>
                        </div>
                        <div className={cx('footer-infor2')}>
                            <div className={cx('columm')}>
                                <h3 className={cx('footer-infor2-title')}>OUR AGENCY</h3>
                                <ul className={cx('footer-infor2-list')}>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Services
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Insurancee
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Agency
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Tourism
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Payment
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('columm')}>
                                <h3 className={cx('footer-infor2-title')}>PARTNERS</h3>
                                <ul className={cx('footer-infor2-list')}>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Booking
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        RentalCar
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        HostelWorld
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Trivago
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        TripAdvisor
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('columm')}>
                                <h3 className={cx('footer-infor2-title')}>LAST MINUTE</h3>
                                <ul className={cx('footer-infor2-list')}>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        London
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        California
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Indonesia
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Europe
                                    </li>
                                    <li className={cx('footer-infor2-list-item')}>
                                        <FontAwesomeIcon className={cx('list-item-icon')} icon={faAngleRight} />
                                        Oceania
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('footer-content-footer')}>
                    <span className={cx('left')}>THE BEST WORDPRESS TRAVEL THEME</span>
                    <span className={cx('right')}>COPYRIGHT NICDARK THEMES 2018</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
