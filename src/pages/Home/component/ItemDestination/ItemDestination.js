import classNames from 'classnames/bind';
import styles from './ItemDestination.module.scss';
import { europe } from '~/components/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemDestination() {
    return (
        <div className={cx('ItemDestination')}>
            <img className={cx('ItemDestination-img')} src={europe} alt="europe" />
            <div className={cx('ItemDestination-blur')}>
                <div className={cx('ItemDestination-title')}>
                    <h3>EUROPE</h3>
                    <h6>3 packages</h6>
                </div>
            </div>

            <div className={cx('ItemDestination-access')}>
                <h3 className={cx('ItemDestination-access-title')}>Packages</h3>
                <Link className={cx('ItemDestination-access-link')} to="/">
                    Berlin
                </Link>
                <Link to="/" className={cx('ItemDestination-access-link')}>
                    Amsterdam
                </Link>
                <Link to="/" className={cx('ItemDestination-access-link')}>
                    Tuscany
                </Link>

                <Link to="/" className={cx('ItemDestination-access-link', 'btn-access')}>
                    View destination
                </Link>
            </div>
        </div>
    );
}

export default ItemDestination;
