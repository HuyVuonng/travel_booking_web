import classNames from 'classnames/bind';
import styles from './nextHoliday.module.scss';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function NextHoliday() {
    const picture = [
        {
            id: 1,
            link: 'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-3.jpg',
        },
        {
            id: 2,
            link: 'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4.jpg',
        },
        {
            id: 3,
            link: 'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4-1.jpg',
        },
    ];
    const pictureLength = useRef(picture.length);
    let timeoutid = useRef();
    const btnchangepic = document.querySelectorAll('.change');
    const [currentPicIndex, setCurrentPicIndex] = useState(0);
    const [currentPic, setCurrentPic] = useState(picture[currentPicIndex]);

    const changePicAnimation = () => {
        const pic = document.querySelector('.pic');

        if (currentPicIndex < pictureLength.current - 1) {
            setCurrentPicIndex(currentPicIndex + 1);
        } else setCurrentPicIndex(0);

        setCurrentPic(picture[currentPicIndex]);
        for (var i = 0; i < btnchangepic.length; i++) {
            btnchangepic[i].classList.remove(`${cx('active')}`);
        }
        for (var j = 0; j < btnchangepic.length; j++) {
            if (btnchangepic[j].id - 1 === currentPicIndex) {
                btnchangepic[j].classList.add(`${cx('active')}`);
                pic.classList.add(`${cx('active-pic')}`);
            }
        }
        setTimeout(() => {
            pic.classList.remove(`${cx('active-pic')}`);
        }, 8000);
    };

    useEffect(() => {
        timeoutid.current = setTimeout(() => {
            changePicAnimation();
        }, 10000);
        console.log('chayj');

        return () => clearTimeout(timeoutid.current);
    }, [currentPicIndex]);

    const Changepicture = (id) => {
        const pic = document.querySelector('.pic');
        const btnchangepic = document.querySelectorAll('.change');

        for (var i = 0; i < btnchangepic.length; i++) {
            btnchangepic[i].classList.remove(`${cx('active')}`);
        }

        btnchangepic[id - 1].classList.add(`${cx('active')}`);
        setCurrentPicIndex(id - 1);
        setCurrentPic(picture[currentPicIndex]);
        clearTimeout(timeoutid.current);
        pic.classList.add(`${cx('active-pic')}`);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nextHoliday-row1')}>
                <div className={cx('nextHoliday-collum1')}>
                    <h6>NORTH AMERICA</h6>
                    <h3>
                        The Best <span>Beaches</span>
                    </h3>
                    <p className={cx('nextHoliday-paragrap1')}>
                        Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque
                        molestie ultricies mauris ac.
                    </p>
                    <p className={cx('nextHoliday-paragrap2')}>
                        Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque
                        molestie ultricies mauris ac.
                    </p>

                    <div className={cx('price')}>
                        <span className={cx('old-price')}>800</span>
                        <span className={cx('new-price')}>
                            500 $ <span>/ for person</span>
                        </span>
                    </div>
                    <div className={cx('btn-book')}>
                        <a href="\" className={cx('book-link')}>
                            book now
                        </a>
                    </div>
                </div>

                <div className={cx('nextHoliday-collum2')}>
                    <div className={cx('image-slide')}>
                        <img className={cx('pic')} src={currentPic.link} alt="" />
                        <div className={cx('change-pic-slide')}>
                            <div
                                id="1"
                                onClick={() => Changepicture(1)}
                                className={cx('btn-change-pic', 'active', 'change')}
                            ></div>
                            <div
                                id="2"
                                onClick={() => Changepicture(2)}
                                className={cx('btn-change-pic', 'change')}
                            ></div>
                            <div
                                id="3"
                                onClick={() => Changepicture(3)}
                                className={cx('btn-change-pic', 'change')}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('nextHoliday-row2')}></div>
        </div>
    );
}

export default NextHoliday;
