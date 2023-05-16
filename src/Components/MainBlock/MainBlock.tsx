'use client';

import styles from './MainBlock.module.css';
import SocialBlock from "@/Components/SocialBlock/SocialBlock";
import ScreenBlock from "@/Components/ScreenBlock/ScreenBlock";

const MainBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <h1>We create your <br/> dream</h1>
                <p>We create web-sites and mobile app according to your preferences</p>
                <a className={styles.price} href="#">Price</a>
                <SocialBlock/>
            </div>
            <div className={styles.rightBlock}>
                <ScreenBlock/>
            </div>
        </div>
    );
};

export default MainBlock;