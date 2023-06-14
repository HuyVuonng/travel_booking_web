import classNames from 'classnames/bind';
import styles from './ViewDestination.module.scss';
import BackgroundBehindHeader from '~/components/BackgroundBehindHeader/BackgroundBehindHeader';
import TourPackages from '~/components/TourPackages/TourPackages';
import { Berlin, San_Francisco } from '~/components/images';

const cx = classNames.bind(styles);

function ViewDestination() {
    return (
        <>
            <BackgroundBehindHeader
                title="Europe"
                img="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-3-1.jpg"
                backgroundPosition="center"
            />
            <div className={cx('viewDestinationWrapper')}>
                <div className={cx('viewDestination-introduce')}>
                    <div className={cx('viewDestination-introduce-col-1-2-wrapper')}>
                        <div className={cx('viewDestination-introduce-col1')}>
                            <span className={cx('viewDestination-introduce-Big-Letter')}>A</span>
                            <span className={cx('viewDestination-introduce-paragrap')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus, odio sit
                                amet convallis sollicitudin, lacu
                            </span>
                        </div>
                        <div className={cx('viewDestination-introduce-col2')}>
                            <span className={cx('viewDestination-introduce-paragrap')}>
                                Nullam porta magna non turpis iaculis, sit amet rutrum velit scelerisque. Duis sed
                                pretium neque. Fusce aliquam enim blandit augue tristique suscipit. Etiam eget
                            </span>
                        </div>
                        <p className={cx('viewDestination-introduce-paragrap2')}>
                            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis
                            rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam
                            nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque
                            tristique fringilla tempus.
                        </p>
                    </div>
                    <div className={cx('viewDestination-introduce-col3')}>
                        <div className={cx('viewDestination-introduce-col3-item')}>
                            <img
                                src={
                                    'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/plugins/nd-travel/templates/cpt-3-layouts/icon-planet-earth-white.png'
                                }
                                className={cx('viewDestination-introduce-col3-item-icon')}
                                alt=""
                            />
                            <div className={cx('viewDestination-introduce-col3-item-info')}>
                                <span className={cx('viewDestination-introduce-col3-item-info-title')}>PACKAGES</span>
                                <span className={cx('viewDestination-introduce-col3-item-info-description')}>
                                    3 Tours in Europe
                                </span>
                            </div>
                        </div>

                        <div className={cx('viewDestination-introduce-col3-item')}>
                            <img
                                src={
                                    'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/plugins/nd-travel/templates/cpt-3-layouts/icon-map-location-white.svg'
                                }
                                className={cx('viewDestination-introduce-col3-item-icon')}
                                alt=""
                            />
                            <div className={cx('viewDestination-introduce-col3-item-info')}>
                                <span className={cx('viewDestination-introduce-col3-item-info-title')}>Europe</span>
                                <span className={cx('viewDestination-introduce-col3-item-info-description')}>
                                    Check the best Tours
                                </span>
                            </div>
                        </div>

                        <div className={cx('viewDestination-introduce-col3-item')}>
                            <img
                                src={
                                    'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/plugins/nd-travel/templates/cpt-3-layouts/icon-message-white.svg'
                                }
                                className={cx('viewDestination-introduce-col3-item-icon')}
                                alt=""
                            />
                            <div className={cx('viewDestination-introduce-col3-item-info')}>
                                <span className={cx('viewDestination-introduce-col3-item-info-title')}>Contact Us</span>
                                <span className={cx('viewDestination-introduce-col3-item-info-description')}>
                                    lovetravel@theme.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('viewDestination-tours-list')}>
                    <h5>EUROPE</h5>
                    <h1>PACKAGES</h1>

                    <div className={cx('viewDestination-tours')}>
                        <TourPackages color="#ffd205" imgSrc={Berlin} />
                        <TourPackages color="#f76570" imgSrc={San_Francisco} />
                        <TourPackages
                            color="#ba71da"
                            imgSrc={
                                'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-3-1024x640.jpg'
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewDestination;
