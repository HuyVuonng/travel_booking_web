import classNames from 'classnames/bind';
import styles from './BackgroundBehindHeader.module.scss';

const cx = classNames.bind(styles);

function BackgroundBehindHeader({ img, title }) {
    return (
        <div
            className={cx('BackgroundBehindHeader-wrapper')}
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <h1>{title}</h1>
        </div>
    );
}

export default BackgroundBehindHeader;
