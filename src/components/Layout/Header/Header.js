import React, { useState } from 'react';
import styles from './Header.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';

export const Header = () => {
    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
    const toggleIsNavigationMenuOpen = () => {
        setIsNavigationMenuOpen((prevState) => !prevState);
    };

    return (
        <header className={styles.header}>
            <NavigationMenu
                isOpen={isNavigationMenuOpen}
                closeHandler={toggleIsNavigationMenuOpen}
            />
            Header
        </header>
    );
};
