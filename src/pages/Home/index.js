import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { relax, cultural, history, sport } from '~/components/images';
import ItemDestination from './component/ItemDestination';
import NextHoliday from './component/nextHoliday';
import TourPackages from '~/components/TourPackages/TourPackages';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('container1')}>
                <div className={cx('content1')}>
                    <div className={cx('title')}>
                        <h1 className={cx('title1-content')}>Search your next Holiday</h1>
                        <h6 className={cx('title2-content')}>CHECK OUR BEST PROMOTIONS</h6>
                    </div>
                    <div className={cx('search-box')}>
                        <select className={cx('select-option')} name="nd_travel_archive_form_destinations">
                            <option value="0">Choose your Destination ...</option>
                            <option value="362">Europe</option>
                            <option value="23">&nbsp;&nbsp;- Italy</option>
                            <option value="22">&nbsp;&nbsp;- Netherlands</option>
                            <option value="24">Asia</option>
                            <option value="361">&nbsp;&nbsp;- Thailandia</option>
                            <option value="21">United States</option>
                            <option value="20">Oceania</option>
                        </select>

                        <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                    </div>
                    <div className={cx('content1-icon')}>
                        <div className={cx('content1-icon-block')}>
                            <Link to="/relax" className={cx('content1-icon-link')}>
                                <img src={relax} alt="" />
                                <span className={cx('content1-icon1-title')}>RELAX</span>
                            </Link>
                        </div>

                        <div className={cx('content1-icon-block')}>
                            <Link to="/" className={cx('content1-icon-link')}>
                                <img src={cultural} alt="" />
                                <span className={cx('content1-icon1-title')}>Cultural</span>
                            </Link>
                        </div>

                        <div className={cx('content1-icon-block')}>
                            <Link to="/" className={cx('content1-icon-link')}>
                                <img src={sport} alt="" />
                                <span className={cx('content1-icon1-title')}>Sport</span>
                            </Link>
                        </div>

                        <div className={cx('content1-icon-block')}>
                            <Link to="/" className={cx('content1-icon-link')}>
                                <img src={history} alt="" />
                                <span className={cx('content1-icon1-title')}>History</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------container2------------------- */}
            <div className={cx('container2')}>
                <div className={cx('content2')}>
                    <div className={cx('title')}>
                        <h6 className={cx('title1-content2')}>OUR PROPOSALS</h6>
                        <h1 className={cx('title2-content2')}>
                            OUR <span className={cx('title2-content2-decoration')}>DESTINATIONS</span>
                        </h1>
                    </div>

                    <div className={cx('destibations')}>
                        <ItemDestination />
                        <ItemDestination />
                        <ItemDestination />
                        <ItemDestination />
                        <ItemDestination />
                        <ItemDestination />
                    </div>
                </div>
            </div>

            {/* -----------conatiner3--------------- */}
            <div className={cx('container3')}>
                <div className={cx('container3-background')}>
                    <div className={cx('content3')}>
                        <div className={cx('content3-title')}>
                            <h6>Your</h6>
                            <h6>
                                next <span className={cx('content3-title-decoration')}>holiday</span>
                            </h6>
                        </div>

                        <a className={cx('content3-link')} href="\">
                            View all packages
                        </a>
                    </div>
                </div>

                <div className={cx('container3-content-wrapper')}>
                    <div className={cx('container3-content')}>
                        <NextHoliday />
                    </div>
                </div>
            </div>

            {/* -------container4----------- */}

            <div className={cx('container4')}>
                <div className={cx('container4-header')}>
                    <div className={cx('LAST-MINUTE')}>
                        <span className={cx('content-title')}>01. LAST MINUTE</span>
                        <h1 className={cx('content-name')}>Discover Cities</h1>
                        <a href="\" className={cx('content-details')}>
                            Details
                        </a>
                    </div>
                    <div className={cx('PROMOTIONS')}>
                        <span className={cx('content-title')}>02. PROMOTIONS</span>
                        <h1 className={cx('content-name')}>Discover Nature</h1>
                        <a href="\" className={cx('content-details')}>
                            Details
                        </a>
                    </div>
                </div>

                <div className={cx('content4')}>
                    <div className={cx('content4-header')}>
                        <span content={cx('content4-title')}>PROMOTIONS</span>
                        <h1 className={cx('content4-name')}>
                            OUR <span className={cx('content4-name-decoration')}>PACKAGES</span>{' '}
                        </h1>
                    </div>

                    <div className={cx('content4-item')}>
                        <TourPackages />
                        <TourPackages />
                        <TourPackages />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
