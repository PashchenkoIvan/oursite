'use client';

import styles from './Header.module.css'
import {useState} from "react";

const Header = () => {

    const [state, setState] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <a className={styles.links} href="">About us</a>
                <a className={styles.links} href="">Price</a>
                <a href="">Booking</a>
            </div>
        </div>
    );
};

export default Header;