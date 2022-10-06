import React, { useState } from 'react';
import styles from './Header.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import {Search} from "../Search/Search";
import {BalanceBox} from "./BalanceBox/BalanceBox";
import {Logo} from "../../Assets/svg/Logo";
import {MenuIcon} from "../../Assets/svg/MenuIcon";


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
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <Search/>
            </div>
            <div className={styles.right} >
                <BalanceBox amount={35}/>
                <MenuIcon/>
            </div>
        </header>
    );
};
