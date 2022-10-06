import styles from './BalanceBox.module.css';

export const BalanceBox = ({amount}) => {
    return(
        <div className={styles.balance}>
            {`${amount} DR`}
        </div>
    )
}