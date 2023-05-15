'use client';

import styles from './MainBlock.module.css';

const MainBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <h1>We create your dream</h1>
                <p>We create web-sites and mobile app according to your preferences</p>
                <a href="#">Price</a>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.screen}>
                    <div className={styles.header}>
                        <div className={styles.redPoint}></div>
                        <div className={styles.yellowPoint}></div>
                        <div className={styles.greenPoint}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBlock;