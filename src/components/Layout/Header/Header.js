import React, { useState } from 'react';
import styles from './Header.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import {Search} from "../../Search/Search";
import {BalanceBox} from "./BalanceBox/BalanceBox";
import {Logo} from "../../../assets/svg/Logo";
import {MenuIcon} from "../../../assets/svg/MenuIcon";
import {Link} from "react-router-dom";
import {useAuthContext} from "../../../context/AuthContext";


export const Header = () => {
    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
    const toggleIsNavigationMenuOpen = () => {
        setIsNavigationMenuOpen((prevState) => !prevState);
    };

    const {userData} = useAuthContext()

    return (
        <header className={styles.header}>
            { userData && <NavigationMenu
                isOpen={isNavigationMenuOpen}
                closeHandler={toggleIsNavigationMenuOpen}
            />}
            <div className={styles.left}>
                <Link to={'/'} className={styles.logo}>
                    <Logo/>
                </Link>
                <div className={styles.s}>
                    <Search placeholder={'Поиск NFT, мероприятий и пользователей'}/>
                </div>
            </div>
            {
                userData ? (
                    <div className={styles.right} >
                        <BalanceBox amount={userData.balance.coinsAmount}/>
                        <MenuIcon onClick={toggleIsNavigationMenuOpen}/>
                    </div>
                ) : (
                    <Link to={'/sign-in'} className="btn_filled">Вход</Link>
                )
            }
        </header>
    );
};
