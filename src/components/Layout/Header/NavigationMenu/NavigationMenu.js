import React from 'react';
import styles from './NavigationMenu.module.css';

export const NavigationMenu = ({
    isOpen,
    closeHandler,
}) => {
    return (
        <div
            className={
                isOpen ? styles.navigationMenuOpen : styles.navigationMenu
            }
        >
            Menu
        </div>
    );
};
