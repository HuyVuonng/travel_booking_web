import classNames from 'classnames/bind';
import styles from './Relax.module.scss';
import BackgroundBehindHeader from '~/components/BackgroundBehindHeader';
import TourPackages from '~/components/TourPackages/TourPackages';
import { Berlin, San_Francisco } from '~/components/images';

const cx = classNames.bind(styles);
function Relax() {
    return (
        <>
            <BackgroundBehindHeader
                img={
                    'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-14.jpg'
                }
                title="Sports"
            />
            <div className={cx('relax-wrapper')}>
                <div className={cx('relax-content')}>
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
        </>
    );
}

export default Relax;
