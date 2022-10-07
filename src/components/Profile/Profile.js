import styles from './Profile.module.css';
import {ArrowButton} from "../../assets/svg/ArrowButton";

export const Profile = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.picture}/>

            <div className={styles.bar}>
                <div className={styles.barFlex}>
                    <div className={styles.number}>4</div>
                    <p className={styles.par}>EgorMit</p>
                </div>
                <button className={styles.button}>
                    <ArrowButton/>
                    <p className={styles.par}>Перевод</p>
                </button>
            </div>

        </section>
    )
}
