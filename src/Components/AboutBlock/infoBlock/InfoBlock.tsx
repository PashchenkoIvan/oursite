import styles from './InfoBlock.module.css'
import postcssValueParser from "postcss-value-parser";
import {FC} from "react";
import Image from "next/image";

interface Props {
    title: string
    image: any
    info: string
}

const InfoBlock:FC<Props> = ({title, info, image}) => {
    return (
        <div className={styles.infoBlock}>
            <div className={styles.image}>
                <Image width={250} height={250} src={image} alt={image}/>
            </div>
            <div className={styles.info}>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoBlock;