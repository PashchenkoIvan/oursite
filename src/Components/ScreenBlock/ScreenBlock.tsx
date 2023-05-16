import styles from './ScreenBlock.module.css'

const ScreenBlock = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.header}>
                <div className={styles.redPoint}></div>
                <div className={styles.yellowPoint}></div>
                <div className={styles.greenPoint}></div>
            </div>
        </div>
    );
};

export default ScreenBlock;