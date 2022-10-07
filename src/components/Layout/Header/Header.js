import React, { useState } from 'react';
import styles from './Header.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import {Search} from "../../Search/Search";
import {BalanceBox} from "./BalanceBox/BalanceBox";
import {Logo} from "../../../assets/svg/Logo";
import {MenuIcon} from "../../../assets/svg/MenuIcon";
import {Link} from "react-router-dom";


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
                <Link to={'/'} className={styles.logo}>
                    <Logo/>
                </Link>
                <Search/>
            </div>
            <div className={styles.right} >
                <BalanceBox amount={35}/>
                <MenuIcon onClick={toggleIsNavigationMenuOpen}/>
            </div>
        </header>
    );
};
