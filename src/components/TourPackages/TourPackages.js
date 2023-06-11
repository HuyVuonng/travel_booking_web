import classNames from 'classnames/bind';
import styles from './TourPackages.module.scss';
import { Berlin } from '../images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TourPackages({ color, imgSrc }) {
    const colors = { yellow: '#ffd205', pink: '#f76570', pouper: '#ba71da' };
    return (
        <div className={cx('TourPackages-block')}>
            <Link className={cx('TourPackages-link')}>
                <div className={cx('img-container')}>
                    <img className={cx('TourPackages-img')} src={imgSrc} alt=""></img>
                    <a href="\" style={{ backgroundColor: color }}>
                        <img
                            className={cx('TourPackages-icon')}
                            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/arch.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className={cx('detination-block')}>
                    <div className={cx('TourPackages-destination')}>
                        <h1 className={cx('TourPackages-name')}>Berlin</h1>
                        <h5 className={cx('TourPackages-location')}>
                            <FontAwesomeIcon icon={faLocationDot} /> Europe
                        </h5>
                    </div>

                    <div className={cx('TourPackages-type')}>
                        <h3 className={cx('type')}>
                            Cultural relax
                            <span style={{ backgroundColor: color }}>+1</span>
                        </h3>
                        <h3 className={cx('cost')}>700 $</h3>
                    </div>

                    <div className={cx('TourPackages-decription')}>
                        <span className={cx('decription')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec
                            dapibus dictum scelerisque.
                        </span>
                    </div>

                    <a className={cx('TourPackages-link')} style={{ backgroundColor: color }} href="\">
                        details
                    </a>
                </div>
            </Link>
        </div>
    );
}

export default TourPackages;
