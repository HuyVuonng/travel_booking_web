import classNames from 'classnames/bind';
import styles from './nextHoliday.module.scss';
import { useEffect, useRef } from 'react';
import { Best_Tours, Cruises, world_tour } from '~/components/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NextHoliday() {
    const picture = [
        {
            id: 0,
            link: 'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-3.jpg',
        },
        {
            id: 1,
            link: 'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4.jpg',
        },
        {
            id: 2,
            link: 'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4-1.jpg',
        },
    ];
    let idActivePic = useRef(0);
    let IntervalID = useRef(0);

    const changePicAnimation = () => {
        IntervalID = setInterval(() => {
            const picAll = document.querySelectorAll('.pic');
            const btnchangepic = document.querySelectorAll('.change');
            // Lấy id ảnh hiện tại
            for (let i = 0; i < picAll.length; i++) {
                if (picAll[i].classList.contains(`${cx('activePic')}`)) {
                    idActivePic.current = picAll[i].dataset.id;
                }
            }

            let currentID = Number(idActivePic.current);
            let nextID = currentID + 1;

            if (nextID > picAll.length - 1) {
                nextID = 0;
            }
            btnchangepic[currentID].classList.remove(`${cx('active')}`);
            picAll[currentID].classList.remove(`${cx('activePic')}`);

            //gán lại current id bằng next id
            idActivePic.current = nextID;

            btnchangepic[nextID].classList.add(`${cx('active')}`);

            for (let j = 0; j < picAll.length; j++) {
                if (+picAll[j].dataset.id === nextID) {
                    picAll[j].classList.add(`${cx('activePic')}`);
                }
            }
        }, 10000);
    };

    useEffect(() => {
        const pic = document.querySelector('.pic');
        const btnchangepic = document.querySelectorAll('.change');
        pic.classList.add(`${cx('activePic')}`);
        btnchangepic[0].classList.add(`${cx('active')}`);
        changePicAnimation();
    }, []);

    const Changepicture = (id) => {
        const picAll = document.querySelectorAll('.pic');
        const btnchangepic = document.querySelectorAll('.change');

        // Khi click gỡ hết các class name active ở ảnh và btn
        for (var i = 0; i < btnchangepic.length; i++) {
            btnchangepic[i].classList.remove(`${cx('active')}`);
            picAll[i].classList.remove(`${cx('activePic')}`);
        }

        btnchangepic[id].classList.add(`${cx('active')}`);
        for (let i = 0; i < picAll.length; i++) {
            if (+picAll[i].dataset.id === +id) {
                picAll[i].classList.add(`${cx('activePic')}`);
            }
        }
        clearInterval(IntervalID);
        // console.log('clear ' + IntervalID);
        changePicAnimation();
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
                        {/* <img className={cx('pic')} src={currentPic.link} alt="" /> */}
                        {picture.map((img, index) => {
                            return <img data-id={index} key={index} className={cx('pic')} src={img.link} alt="" />;
                        })}
                        <div className={cx('change-pic-slide')}>
                            {picture.map((img) => {
                                return (
                                    <div
                                        key={img.id}
                                        id={img.id}
                                        onClick={() => Changepicture(img.id)}
                                        className={cx('btn-change-pic', 'change')}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={cx('countDown-block')}>
                        <div className={cx('days', 'countdownElement')}>
                            <h1>000</h1>
                            <h3>Days</h3>
                        </div>
                        <div className={cx('hours', 'countdownElement')}>
                            <h1>00</h1>
                            <h3>Hours</h3>
                        </div>
                        <div className={cx('minutes', 'countdownElement')}>
                            <h1>00</h1>
                            <h3>Minutes</h3>
                        </div>
                        <div className={cx('seconds', 'countdownElement')}>
                            <h1>00</h1>
                            <h3>Seconds</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('nextHoliday-row2')}>
                <div className={cx('world-tour', 'tours')}>
                    <img src={world_tour} alt=""></img>
                    <div className={cx('decription')}>
                        <h3 className={cx('decription-title')}>World Tour</h3>
                        <span className={cx('decription-content')}>
                            Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.
                        </span>
                        <Link to="\">View More</Link>
                    </div>
                </div>
                <div className={cx('Cruises', 'tours')}>
                    <img src={Cruises} alt=""></img>
                    <div className={cx('decription')}>
                        <h3 className={cx('decription-title')}>Cruises</h3>
                        <span className={cx('decription-content')}>
                            Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.
                        </span>
                        <Link to="\">View More</Link>
                    </div>
                </div>
                <div className={cx('Best Tours', 'tours')}>
                    <img src={Best_Tours} alt=""></img>
                    <div className={cx('decription')}>
                        <h3 className={cx('decription-title')}>Best Tours</h3>
                        <span className={cx('decription-content')}>
                            Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.
                        </span>
                        <Link to="\">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NextHoliday;
