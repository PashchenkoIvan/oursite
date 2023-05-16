'use client';


import styles from './AboutBlock.module.css'
import InfoBlock from "@/Components/AboutBlock/infoBlock/InfoBlock";
import {useState} from "react";
import image from './images/image.jpg'

const AboutBlock = () => {

    const [state] = useState<Array<any>>([
        {title: "Test title", info: "Test info", image: image}
    ])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <div className={styles.block}>
                {
                    state.map(res =>
                        <InfoBlock
                            title={res.title}
                            image={res.image}
                            info={res.info}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default AboutBlock;