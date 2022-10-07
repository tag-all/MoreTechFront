import React from 'react';
import styles from './NavigationMenu.module.css';
import close from '../../../../assets/svg/Cross.svg'
import enter from '../../../../assets/svg/Enter.svg'

export const NavigationMenu = ({
    isOpen,
    closeHandler,
}) => {

    const userName = 'Ясос Биба'

    return (
        <>
            { isOpen && <div className={styles.bg} onClick={closeHandler}/> }
            <div
                className={
                    isOpen ? styles.navigationMenuOpen : styles.navigationMenu
                }
            >
                <div className={styles.header}>
                    <p className={styles.name}>{userName}</p>
                    <img src={enter} alt="sign in" className={styles.enter}/>
                    <button className={styles.closeBtn} onClick={closeHandler}>
                        <img src={close} alt="close"/>
                    </button>
                </div>
            </div>
        </>
    );
};
